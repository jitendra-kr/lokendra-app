import React from "react";
import { Layout, Descriptions, Button, Radio, Input } from "antd";
import { withRouter } from "next/router";
import { isEmpty } from "lodash";
import { httpGet, httpPut } from "../../utils/http";
import { getUser } from "../../utils";
import Link from "next/link";
import { messageLoading, messageSuccess, messageError } from "../../utils/antd";
import styles from "../../../styles/UserProfile.module.css";
const { Content } = Layout;

class UserProfile extends React.Component {
  state = {
    isButtonDisabled: false,
    size: "default",
    tgbtn: true,
    userData: {},
  };

  userData;

  constructor(props) {
    super(props);
    this.state.userData = getUser();
  }

  componentDidMount() {
    if (!this.state.userData?._id) {
      return this.props.router.push("/");
    }
    httpGet({ url: `user/${this.state.userData._id}` })
      .then((response) => {
        this.setState({
          userData: response.result,
        });
        this.userData = response.result;
      })
      .catch((err) => {
        messageError({ content: "something went wrong", duration: 2 });
      });
  }

  toggleButton = (from) => {
    this.setState({ tgbtn: !this.state.tgbtn });
    if (from === "cancel") {
      this.setState({
        userData: this.userData,
      });
    }
  };

  update = () => {
    const key = "changePwd";
    messageLoading({ key });

    const fieldToUpdate = ["firstName", "lastName", "gender", "email"];
    const data = {};
    fieldToUpdate.forEach((k) => {
      if (this.state.userData[k]) {
        data[k] = this.state.userData[k];
      }
    });
    if (!data["email"]) {
      return messageError({
        content: "Email can not be empty",
        key,
        duration: 2,
      });
    }
    httpPut({
      url: `${this.state.userData._id}/update-user`,
      body: data,
    })
      .then((response) => {
        this.setState({ isButtonDisabled: false });
        if (response && response.statusCode === 200) {
          this.setState({ tgbtn: true });
          messageSuccess({ content: response.message, key });
        } else if (response && response.statusCode === 400) {
          messageError({ content: response.message, key, duration: 2 });
        }
      })
      .catch((err) => {
        this.setState({ isButtonDisabled: false });
        if (err.status === 400) {
          messageError({ content: err.data.message, key, duration: 2 });
        } else {
          messageError({ content: "something went wrong", key, duration: 2 });
        }
      });
  };

  handleInputChange = (e) => {
    this.setState({
      userData: {
        ...this.state.userData,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    if (isEmpty(this.state.userData)) {
      return <div className = "ant-layout-content" ></div>;
    }
    return (
       <Content className=" content-height"  style={{ textAlign: "center" }}>
            <Descriptions
              column={1}
              extra={
                <Button
                  className={this.state.tgbtn ? "visible" : "invisible"}
                  type="primary"
                  onClick={() => this.toggleButton()}
                >
                  Edit
                </Button>
              }
            >
              <Descriptions.Item label="First Name" >
                {this.state.tgbtn ? (
                  <span className={styles['user-profile-value']}>
                  {this.state.userData?.firstName}
                </span>
                ) : (
                  <Input
                    allowClear={true}
                    name="firstName"
                    className={styles.input}
                    onChange={this.handleInputChange}
                    defaultValue={this.state.userData.firstName}
                  />
                )}
              </Descriptions.Item>
              <Descriptions.Item label="Last Name">
                {this.state.tgbtn ? (
                  <span className={styles['user-profile-value']}>

                  {this.state.userData?.lastName}
                  </span>
                ) : (
                  <Input
                    allowClear={true}
                    name="lastName"
                    className={styles.input}
                    onChange={this.handleInputChange}
                    defaultValue={this.state.userData.lastName}
                  />
                )}
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                {this.state.tgbtn ? (
                  <span className={styles['user-profile-value']}>

                 { this.state.userData?.email}
                  </span>
                ) : (
                  <Input
                    allowClear={true}
                    className={styles.input}
                    style = {{marginLeft: '30px'}}
                    name="email"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.userData.email}
                  />
                )}
              </Descriptions.Item>
              <Descriptions.Item label="Gender">
                <span className={styles['user-profile-value']}>

                <Radio.Group
                  name="gender"
                  onChange={this.handleInputChange}
                  value={this.state.userData?.gender}
                  disabled={this.state.tgbtn}
                  >
                  <Radio value={"m"}>Male</Radio>
                  <Radio value={"f"}>Female</Radio>
                  <Radio value={"o"}>Other</Radio>
                </Radio.Group>
                  </span>
              </Descriptions.Item>

              <Descriptions.Item label="Password">
                <div className={styles['user-profile-value']}>
                  <span style = {{marginRight: '30px'}} >********</span>
                  <span>
                    <Link style={{ float: "right" }} href={`/reset-password`}>
                      Change Password
                    </Link>
                  </span>
                </div>
              </Descriptions.Item>

              <Descriptions.Item>
                {!this.state.tgbtn ? (
                  <React.Fragment>
                    <Button
                      onClick={() => this.toggleButton("cancel")}
                      className="edit-icon"
                      style={{ marginRight: "20px" }}
                    >
                      cancel
                    </Button>
                    <Button
                      onClick={() => this.update()}
                      className="edit-icon"
                      type="primary"
                    >
                      Save
                    </Button>
                  </React.Fragment>
                ) : null}
              </Descriptions.Item>
            </Descriptions>


      </Content>
    );
  }
}

export default withRouter(UserProfile);
