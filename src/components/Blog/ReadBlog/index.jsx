import React from "react";
import * as _ from "lodash";
import { Layout } from "antd";

const { Content } = Layout;


export default class ReadBlog extends React.Component {

  paramsId;
  constructor(props){
    super(props);
    this.paramsId = this.props.match.params.id;
    this.state = {
      data: {
        size: {}
      }
    }
  }

  componentWillMount() {

    fetch('../data/product.json').then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        data: _.filter(data, { slug: this.paramsId })[0]
      });
    }).catch(err => {
      console.log("Error Reading data " + err);
    });
  }




  render() {
    return (
      <Content style={{ padding: "50px 50px" }}>
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">


            <h1>OpenAI’s Hide-and-Seek Findings, the Systems Perspective</h1>
            <p><span style={{color: "lightsalmon"}}>20 Sep 2019</span></p>  

            <p>
            It’s official: Big Brother Facebook wants to run your love life. No longer content to destabilize democratic institutions, fork over data on millions of its users, or spam you with invites to play FarmVille, Facebook will now play Cupid and personal matchmaker.
Of course, it’s easy to don your tinfoil hat and proclaim that, with Facebook moving into your romantic life, it’s going to be the end of days. But here’s the crazy thing: Facebook’s latest push might actually be a good thing. In fact, with a slew of key features designed to fight harassment, and, more importantly, keep users safe, Zuckerberg is making a compelling argument for users to drop Tinder and Bumble and start dating on the ‘book. The only catch is that if you want to be safe, you’ll have to make a Faustian bargain and provide Facebook with some of your most intimate data.
            </p>

          </div>
          <div className="col-lg-2" />
        </div>
      </Content>
    );
  }
}
