import React, { useEffect, useState } from "react";
import * as CryptoJS from "crypto-js";
import { httpGet, httpPost, httpDelete } from "../../src/utils/http";
import { messageError, messageSuccess } from "../../src/utils/antd";
import { dateFormat } from "../../src/utils";
import {
  EyeFilled,
  EditFilled,
  DeleteFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Layout, Table, Modal, Button, Form, Input, Space } from "antd";

const { Content } = Layout;

const from = "abcdefghijklmnopqrzywxuvts";
const to =   "గాఇకురవథటిമേലെആടനുಕನ್ಸೇಪಯಿ";
const sk = "!flf#87678<>/)()fsdhkjfHH";


const ecd = (data) => {
    const str = JSON.stringify(data);
    let newStr = ""
    for (let index = 0; index < str.length; index++) {
        const s = str[index];
        newStr += from.indexOf(s) > -1 ? to[(from.indexOf(s))] : s;
    }
    return CryptoJS.AES.encrypt(newStr, sk).toString();
}

const dcd  = (ciphertext) => {
    const bytes  = CryptoJS.AES.decrypt(ciphertext, sk);
    const str = bytes.toString(CryptoJS.enc.Utf8);
    let newStr = "";
    for (let index = 0; index < str.length; index++) {
        const s = str[index];
        newStr += to.indexOf(s) > -1 ? from[(to.indexOf(s))] : s;
    }
    return JSON.parse(newStr);
}

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
function RegisterPage() {

  const formRef = React.createRef();
  const [data, setData] = useState(false);
  const [dataToEdit, setDataToEdit] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  function confirm(rowData, text) {
    Modal.confirm({
      title: 'Confirm',
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
      content: 'Are you sure to delete ' + text,
      okText: 'Delete',
      cancelText: 'No',
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
    },
    {
      title: "Password",
      dataIndex: "pwd",
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
      fixed: 'right',
      width: 100,
      render: (text, record) => (
        <Space size="small">
          <EyeFilled style={{
                      padding: "6px",
                    }}/>
          <EditFilled onClick={showModal.bind(this, record)}
                    />
          <DeleteFilled
          onClick={confirm.bind(this, record, text)}
          style={{
                    color: "red",
                    padding: "6px",
                  }}/>
        </Space>
      ),
    },
  ];

  const showModal = (data) => {
    if(data.user) {
      setDataToEdit(data);
    }
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setDataToEdit({});
    setIsModalVisible(false);
  };

  const fetchData = () => {
    httpGet({ url: `/pd/data` })
      .then((response) => {
          response = response.result.map((o, i) => {
              const value = dcd(o.value);
              console.log(value)
              o.key = i;
              o.name = value.website;
              o.email = value.email;
              o.pwd = value.password ;
              o.url = value.url;
              o.userNm = value.userNm;
              o.id = value._id;
              o.created_at = dateFormat(o.created_at);
              o.updated_at = dateFormat(o.updated_at);
              return o;
        });
        setData(response);
      })
      .catch((err) => {});
  };

  useEffect(async () => {
    fetchData();
  }, []);

  const onFinish = (values) => {
      if(dataToEdit._id) {
        values._id = dataToEdit._id
      }
      const key = 'onFinish';
      httpPost({
        url: `pd/save`,
        body: {value : ecd(values)},
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
        <div className="col-lg-12">
          <h2 className="text-center m-bottom-30">Password Manager</h2>
          <div>
            <Table
              pagination={false}
              columns={columns}
              scroll={{ x: 1300 }}
              dataSource={data}
              bordered
              title={() => (
                <Button type="primary" onClick={showModal}  >
                  Save New
                </Button>
              )}
            />
          </div>
          <Modal
            title= "Save Password"
            visible={isModalVisible}
            footer={null}
            onCancel={handleCancel}
            afterClose={handleCancel}
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
                id: dataToEdit._id
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
                <Input placeholder="e.g. Jimmypoint" maxLength="15"/>
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
                    message: "Please input image a valid url."
                }
                ]}
              >
                <Input placeholder="e.g. http://jimmypoint.com" maxLength="28"/>
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
                <Input placeholder ="jimmy" maxLength="15"/>
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
                <Input placeholder ="jimmy@zyx.com" maxLength="35"/>
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
                <Input.Password  placeholder="Password" maxLength="15"/>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button onClick={handleCancel} >
                Cancel
                </Button>
                <Button type="primary" style={{margin: '10px'}} htmlType="submit">
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
