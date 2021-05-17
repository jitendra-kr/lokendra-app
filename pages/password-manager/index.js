import React, { useEffect, useState } from "react";
import { Layout, Table, Modal, Button, Form, Input, Space, Tooltip } from "antd";
import { get } from "lodash";
import { useRouter } from "next/router";
import * as CryptoJS from "crypto-js";
import { httpGet, httpPost, httpDelete } from "../../src/utils/http";
import { messageError, messageSuccess } from "../../src/utils/antd";
import { dateFormat } from "../../src/utils";
import { AppHead } from "../../src/components";
import {
  EyeFilled,
  EditFilled,
  DeleteFilled,
  ExclamationCircleOutlined,
  CopyOutlined,
} from "@ant-design/icons";

const { Content } = Layout;

const from = "abcdefghijklmnopqrzywxuvts";
const to = "గాఇకురవథటిമേലെആടനുಕನ್ಸೇಪಯಿ";
const sk = "!flf#87678<>/)()fsdhkjfHH";

const ecd = (data) => {
  const str = JSON.stringify(data);
  let newStr = "";
  for (let index = 0; index < str.length; index++) {
    const s = str[index];
    newStr += from.indexOf(s) > -1 ? to[from.indexOf(s)] : s;
  }
  return CryptoJS.AES.encrypt(newStr, sk).toString();
};

const dcd = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, sk);
  const str = bytes.toString(CryptoJS.enc.Utf8);
  let newStr = "";
  for (let index = 0; index < str.length; index++) {
    const s = str[index];
    newStr += to.indexOf(s) > -1 ? from[to.indexOf(s)] : s;
  }
  return JSON.parse(newStr);
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
function RegisterPage() {

  const stars = "******";
  const formRef = React.createRef();
  const [freshData, setfreshData] = useState(false);
  const [data, setData] = useState(false);
  const [dataToEdit, setDataToEdit] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();

  function confirm(rowData, text) {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      onOk() {
        httpDelete({ url: `pd/delete/${rowData._id}` })
          .then((response) => {
            const filteredData = data.filter((o) => o._id !== rowData._id);
            setData(filteredData);
            messageSuccess({ content: "Deleted successfully" });
          })
          .catch((err) => {
            console.log(err);
            messageError({ content: "something went wrong" });
          });
      },
      content: "Are you sure to delete " + text,
      okText: "Delete",
      cancelText: "No",
    });
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Email",
      className: "column-money",
      dataIndex: "email",
      align: "center",
    },
    {
      title: "Username",
      dataIndex: "userNm",
      render: (text) => text === stars ? text :
      <Tooltip placement="top" title="Click to Copy">
        <a onClick={copyToClipboard.bind(this, text)} >{text} <span className="margin-left-8"><CopyOutlined /></span> </a>
      </Tooltip>
      ,
    },
    {
      title: "Password",
      dataIndex: "pwd",
      render: (text) => text === stars ? text :
      <Tooltip placement="top" title="Click to Copy">
      <a onClick={copyToClipboard.bind(this, text)} >{text} <span className="margin-left-8"><CopyOutlined /></span> </a>
    </Tooltip>
    },
    {
      title: "Created On",
      dataIndex: "created_at",
    },
    {
      title: "Modified On",
      dataIndex: "updated_at",
    },
    {
      title: "Actions",
      dataIndex: "name",
      fixed: "right",
      width: 100,
      render: (text, record) => (
        <Space size="small">
          <EyeFilled
            onClick = {showRowData.bind(this, record)}
            style={{
              padding: "6px",
              color: 'green'
            }}
          />
          <EditFilled onClick={showModal.bind(this, record)} />
          <DeleteFilled
            onClick={confirm.bind(this, record, text)}
            style={{
              color: "red",
              padding: "6px",
            }}
          />
        </Space>
      ),
    },
  ];

  const copyToClipboard = (text) => {
    const key  = 'copyToClipboard';
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    messageSuccess({ content: "Copied to Clipboard! ", key, duration: 4 });
  }

  const showModal = (data) => {
    if (data.user) {
      setDataToEdit(data);
    }
    setIsModalVisible(true);
  };

  const showRowData = (record) => {
    const modifiedData = [];
    for (let index = 0; index < freshData.length; index++) {
      const o = freshData[index];
      if(o._id === record._id) {
        o.pwd = o.password;
        o.userNm = o.usn;
      } else {
        o.pwd = stars;
        o.userNm = stars;
      }
      o.key = index;
      o.name = o.website;
      o.email = o.email;
      o.url = o.url;
      o.created_at = dateFormat(o.created_at);
      o.updated_at = dateFormat(o.updated_at);
      modifiedData.push(o)

    }
    setData(modifiedData);
  }

  const handleCancel = () => {
    setDataToEdit({});
    setIsModalVisible(false);
  };

  const fetchData = () => {
    const allData = [];
    httpGet({ url: `/pd/data` })
      .then((response) => {
        response = response.result.map((o, i) => {
          const value = dcd(o.value);
          value.usn = value.userNm;
          allData.push({...{
            _id: o._id,
            key: i,
            created_at: dateFormat(o.created_at),
            updated_at: dateFormat(o.updated_at)},
            ...value});
          o.key = i;
          o.name = value.website;
          o.email = value.email;
          o.pwd = stars;
          o.userNm = stars;
          o.url = value.url;
          o.created_at = dateFormat(o.created_at);
          o.updated_at = dateFormat(o.updated_at);
          return o;
        });
        setData(response);
        setfreshData(allData);
      })
      .catch((err) => {});
  };

  const checkAccess = () => {
    httpGet({ url: `/pd/auth` })
    .then((response) => {
      if(get(response, 'result.hasAccess')) {
        fetchData();
      } else {
        messageError({ content: "You are not authorized to access page", duration: 2 });
        router.push("/");
      }
    })
    .catch((err) => {});
  }

  useEffect(async () => {
    checkAccess();

  }, []);

  const onFinish = (values) => {
    if (dataToEdit._id) {
      values._id = dataToEdit._id;
    }
    const key = "onFinish";
    httpPost({
      url: `pd/save`,
      body: { value: ecd(values) },
    })
      .then((response) => {
        fetchData();
        setIsModalVisible(false);
        messageSuccess({ content: response.message, key, duration: 4 });
      })
      .catch((err) => {
        setIsModalVisible(false);
        if (err.status === 400) {
          messageError({ content: err.data.message, key, duration: 2 });
        } else {
          messageError({ content: "something went wrong", key, duration: 2 });
        }
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Content>
      <AppHead data={{ title: "Password Manager" }} />
      <div className="col-lg-12">
        <h2 className="text-center m-bottom-30">Password Manager</h2>
        <div>
          { data ? <Table
            pagination={false}
            columns={columns}
            scroll={{ x: 1300 }}
            dataSource={data}
            bordered
            title={() => (
              <Button type="primary" onClick={showModal}>
                Save New
              </Button>
            )}
          /> : '' }
        </div>
        <Modal
          title="Save Password"
          visible={isModalVisible}
          footer={null}
          onCancel={handleCancel}
          destroyOnClose={true}
        >
          <Form
            layout="vertical"
            name="basic"
            initialValues={{
              website: dataToEdit.name,
              url: dataToEdit.url,
              userNm: dataToEdit.userNm,
              email: dataToEdit.email,
              password: dataToEdit.pwd,
              id: dataToEdit._id,
            }}
            ref={formRef}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Website Name"
              name="website"
              rules={[
                {
                  required: true,
                  message: "Please input your website!",
                },
              ]}
            >
              <Input placeholder="e.g. Jimmypoint" maxLength="15" />
            </Form.Item>
            <Form.Item
              label="URL"
              name="url"
              rules={[
                {
                  required: true,
                  message: "Please input your url!",
                },
                {
                  type: "url",
                  message: "Please input image a valid url.",
                },
              ]}
            >
              <Input placeholder="e.g. http://jimmypoint.com" maxLength="28" />
            </Form.Item>
            <Form.Item
              label="Username"
              name="userNm"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="jimmy" maxLength="15" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
              ]}
            >
              <Input placeholder="jimmy@zyx.com" maxLength="35" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" maxLength="15" />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button
                type="primary"
                style={{ margin: "10px" }}
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </Content>
  );
}

export default RegisterPage;
