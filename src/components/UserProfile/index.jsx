import React from "react";
import { Layout, Descriptions, Button, Radio, Input } from 'antd';
import { httpGet, httpPut } from "../../utils/http";
import { Link } from "react-router-dom";
import Config from '../../config/env'
import {
    messageLoading,
    messageSuccess,
    messageError
  } from "../../utils/antd"
import "./index.css";
const { Content } = Layout;

class UserProfile extends React.Component {

    state = {
        config: Config.getData().default,
        isButtonDisabled: false,
        size: 'default',
        tgbtn: true,
        userData: {}
    };

    userData;

    constructor(props) {
        super(props);
        this.state.userData = JSON.parse(localStorage.getItem('user'));
        if (!this.state.userData?._id) {
            this.props.history.push("/");
        }
    }


    componentDidMount() {
        httpGet({url: `${this.state.config.baseUrl}user/${this.state.userData._id}`}).then((response) => {
            this.setState({
                userData: response.result
            });
            this.userData = response.result;

        }).catch((err) => {
            messageError({ content: "something went wrong", duration: 2 });
        });
      }


    toggleButton = (from) => {
        this.setState({ tgbtn: !this.state.tgbtn });
        if (from === 'cancel') {
            this.setState({
                userData: this.userData
            });
        }
    }

    update = () => {

        const key = 'changePwd';
        messageLoading({ key });

        const fieldToUpdate = ['firstName', 'lastName', 'gender', 'email'];
        const data = {}
        fieldToUpdate.forEach( k => {
            if(this.state.userData[k]) {
                data[k] = this.state.userData[k];
            }
        });
        if(!data['email']) {
            return messageError({ content: 'Email can not be empty', key, duration: 2 });
        }
        httpPut({
            url: `${this.state.config.baseUrl}${this.state.userData._id}/update-user`,
            body: data
          }).then(response => {
            this.setState({ isButtonDisabled: false });
            if (response && response.statusCode === 200) {
                this.setState({ tgbtn: true });
              messageSuccess({ content: response.message, key });

            } else if (response && response.statusCode === 400) {

              messageError({ content: response.message, key, duration: 2 });

            }
          }).catch((err) => {

            this.setState({ isButtonDisabled: false });
            if (err.status === 400) {
              messageError({ content: err.data.message, key, duration: 2 });
            } else {
              messageError({ content: "something went wrong", key, duration: 2 });
            }

          });
    }

    handleInputChange = e => {

        this.setState({
            userData: {
                ...this.state.userData,
                [e.target.name]: e.target.value
            }
        });

    }


    render() {
        return (

            <Content style={{ padding: "50px 50px" }}>
                <div className="row content-height"  >
                    <div className="col-lg-2" />
                    <div className="col-lg-8" style={{ textAlign: "center" }}>
                        <Descriptions
                            column={1}
                            extra= {<Button className = { this.state.tgbtn ? "visible" : "invisible"} type="primary" onClick={() => this.toggleButton()}>Edit</Button>}>

                            <Descriptions.Item label="First Name">
                                {
                                    this.state.tgbtn ? this.state.userData?.firstName
                                    : <Input allowClear = {true} name = "firstName" className="input" onChange={this.handleInputChange} defaultValue={this.state.userData.firstName} />

                                }

                            </Descriptions.Item>
                            <Descriptions.Item label="Last Name">

                                {
                                    this.state.tgbtn ?
                                    this.state.userData?.lastName
                                    : <Input allowClear = {true} name = "lastName" className="input" onChange={this.handleInputChange} defaultValue={this.state.userData.lastName}/>

                                }

                            </Descriptions.Item>
                            <Descriptions.Item label="Email">

                                {
                                    this.state.tgbtn ? this.state.userData?.email :
                                    <Input allowClear = {true} className="input" name = "email" onChange={this.handleInputChange} defaultValue={this.state.userData.email}/>

                                }

                            </Descriptions.Item>
                            <Descriptions.Item label="Gender">
                                <Radio.Group name = "gender" onChange={this.handleInputChange} value={this.state.userData?.gender} disabled={this.state.tgbtn}>
                                    <Radio value={'m'}>Male</Radio>
                                    <Radio value={'f'}>Female</Radio>
                                    <Radio value={'o'}>Other</Radio>

                                </Radio.Group>

                            </Descriptions.Item>

                            <Descriptions.Item label="Password">
                            ********
                            <Link style={{float: "right"}} to={`/reset-password`}>Change Password</Link>

                            </Descriptions.Item>

                            <Descriptions.Item >
                               { !this.state.tgbtn ?  <>
                                <Button onClick={() => this.toggleButton('cancel')} className="edit-icon" style={{marginRight: "20px"}} >cancel</Button>
                                <Button onClick={() => this.update()}  className="edit-icon" type="primary">Save</Button>
                                </> : null}
                            </Descriptions.Item>
                        </Descriptions>

                    </div>
                    <div className="col-lg-2" />
                </div>
            </Content>
        );
    }
}

export default UserProfile;
