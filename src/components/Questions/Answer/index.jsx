import React from "react";
import get from "axios";
import { upperFirst } from "lodash";
import { withRouter } from "react-router-dom";
import { Layout } from "antd";

const { Content } = Layout;
class Answer extends React.Component {
  slug;
  constructor(props) {
    super(props);
    this.slug = this.props.match.params.slug;
    this.state = {
      data: {
        answer: [1]
      }
    };
  }
  componentWillMount() {
    get(`https://jimmypoint-server.herokuapp.com/api/question/answer/${this.slug}`)
      .then(response => {
        console.log(response.data.result);
        this.setState({
          data: response.data.result
        });
        console.log(this.state.data.answer)
      })
      .catch(err => {
        console.log("Error Reading data " + err);
      });
  }

  date(date) {
    if (date) {
      const newDate = new Date(date);
      const month = newDate.toLocaleString('default', { month: 'long' });
      return `${month} ${newDate.getDate()}, ${newDate.getFullYear()}`
    }
  }

  render() {
    return (
      <Content style={{ padding: "50px 50px" }}>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="row">
              {this.state.data.answer.length ? this.state.data.answer.map((item, i) => {
                return (
                  <div
                    className="col-lg-12"
                    key={i}
                    style={{ marginTop: "25px", display: item.ans_by ? 'block' : 'none' }}
                  >
                    <div className="listing border ">
                      <div
                        className="home-page-title"
                        style={{ marginLeft: "30px" }}
                      >
                      </div>
                      <div style={{ marginLeft: "35px" }}>
                        <p dangerouslySetInnerHTML={{ __html: item.ans }}></p>
                        <p style = {{fontFamily: "monospace", fontStyle: "italic"}}>
                          <span className ="question-by" style={{ display: item.ans_by ? 'block' : 'none' }} >Answered By </span> {upperFirst(item.ans_by)}
                          <span className ="question-by" style={{ display: item.ans_by ? 'block' : 'none' }}> On </span> {this.date(item.added)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }) :
                <div className = "center-loader" style = {{marginTop: '20%'}}>
                  <p style ={{fontSize: '30px'}} >Not Answered Yet</p>
                </div>}
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </Content>
    );
  }
}

export default withRouter(Answer);
