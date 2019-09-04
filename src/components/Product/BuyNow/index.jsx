import React from "react";
import "./index.css";
import {
  Form,
  Icon,
  Input,
  Layout,
  Select,
  Card,
  Table,
  Radio,
  Button
} from "antd";
const { Content } = Layout;
const { Option } = Select;

class BuyNow extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  data = {
    email: "jitendra@gmail.com",
    mobileNumber: "7042752172",
    alternateMobileNumber: "9719721140",
    firstName: "Jitendra",
    lastName: "Kumar Rajput",
    country: "India",
    pinCode: "246745",
    address: "Village & Post - Bagwara tel-Dhampur",
    state: "up",
    cityTowm: "Moradabad"
  };
  state = {
    value: 1
  };
  columns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      className: "hide"
    },
    {
      title: "Total",
      dataIndex: "age",
      key: "age",
      className: "hide"
    }
  ];

  dataOne = [
    {
      key: "1",
      name:
        "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 5 lbs, Double Rich Chocolate",
      age: "₹11,548"
    }
  ];
  changePaymentMode = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };
    return (
      <Content style={{ padding: "50px 50px" }}>
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6">
                <Form onSubmit={this.handleSubmit}>
                  <Form.Item>
                    {getFieldDecorator("email", {
                      initialValue: this.data.email,
                      rules: [
                        {
                          type: "email",
                          message: "The input is not valid E-mail!"
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="mail"
                            theme="filled"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Email"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("mobileNumber", {
                      initialValue: this.data.mobileNumber,
                      rules: [
                        {
                          type: "string",
                          message: "The input is not valid mobile number!"
                        },
                        {
                          required: true,
                          message: "Please input your mobile number!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="phone"
                            theme="filled"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Phone Number"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("alternateMobileNumber", {
                      initialValue: this.data.alternateMobileNumber,
                      rules: [
                        {
                          type: "string",
                          message: "The input is not valid mobile number!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="phone"
                            theme="filled"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Altername Phone Number"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("firstName", {
                      initialValue: this.data.firstName,
                      rules: [
                        {
                          type: "string",
                          message: "The input is not valid first name!"
                        },
                        {
                          required: true,
                          message: "Please input your first name!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="smile"
                            theme="filled"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="First Name"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("lastName", {
                      initialValue: this.data.lastName,
                      rules: [
                        {
                          type: "string",
                          message: "The input is not valid last name!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="smile"
                            theme="filled"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Last Name"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("country", {
                      initialValue: this.data.country,
                      rules: [
                        {
                          type: "string",
                          message: "The input is not valid E-mail!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="global"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        disabled = {true}
                        placeholder="Country"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("pinCode", {
                      initialValue: this.data.pinCode,
                      rules: [
                        {
                          type: "string",
                          message: "The input is not valid pin code!"
                        },
                        {
                          required: true,
                          message: "Please input your pin code!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="contacts"
                            theme="filled"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Pin Code"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("address", {
                       initialValue: this.data.address,
                      rules: [
                        {
                          type: "string",
                          message: "The input is not valid address!"
                        },
                        {
                          required: true,
                          message: "Please input your address!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="home"
                            theme="filled"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Address"
                      />
                    )}
                  </Form.Item>

                  <Form.Item>
                    {getFieldDecorator("state", {
                      initialValue: this.data.state,
                      rules: [
                        {
                          required: true,
                          message: "Please select your state!"
                        },
                        {
                          required: true,
                          message: "Please select your state!"
                        }
                      ]
                    })(
                      <Select

                        placeholder="Select State"
                        onChange={this.handleSelectChange}
                      >
                        <Option value="up">Uttar Predesh</Option>
                        <Option value="uK">UK</Option>
                      </Select>
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("cityTowm", {
                      initialValue: this.data.cityTowm,
                      rules: [
                        {
                          type: "string",
                          message: "The input is not valid city/town!"
                        },
                        {
                          required: true,
                          message: "Please input your city/town!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="shop"
                            theme="filled"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="City/Town"
                      />
                    )}
                  </Form.Item>
                </Form>
              </div>
              <div className="col-lg-6">
                <Card title="YOUR ORDER" bordered={true}>
                  <Table
                    columns={this.columns}
                    dataSource={this.dataOne}
                    pagination={false}
                  />
                  <Radio.Group
                    onChange={this.changePaymentMode}
                    value={this.state.value}
                  >
                    <Radio style={radioStyle} value={1}>
                      Paytm
                    </Radio>
                    <Radio style={radioStyle} value={2}>
                      Cash on Delivery
                    </Radio>
                  </Radio.Group>
                  <Button
                    htmlType="submit"
                    className="login-form-button m-top-30 place-order-button"
                    onClick={this.handleSubmit}
                  >
                    <span>hello node</span>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2" />
      </Content>
    );
  }
}

BuyNow = Form.create({ name: "normal_login" })(BuyNow);
export default BuyNow;
