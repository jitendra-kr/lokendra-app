import React from 'react';
import ReactDOM from 'react-dom';
import MainFooter from '../Footer';
import MainHeader from '../Header';
import { Layout, List, Avatar, Card } from 'antd';

const { Content } = Layout;

const data = [
  {
    title: 'Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder',
    img: "images/bitcoin-coin.jpg"
  },
  {
    title: 'The Indian Army is the land-based branch and the largest component of Indian Armed',
    img: "images/army.jpg"
  },
  {
    title: 'Uber Technologies, Inc. is an American multinational transportation network company.',
    img: "images/uber.jpeg"
  },
  {
    title: 'Creating blog content that is valuable, helpful, and/or entertaining is an effective way to grow.',
    img: "images/blog.jpg"
  }, {
    title: '10,000 American Cryptocurrency Owners Will Receive Warning Letters From the IRS',
    img: "images/mark_zukerberg.jpg"
  },
  {
    title: 'Mark Elliot Zuckerberg is an American technology entrepreneur and philanthropist.',
    img: "images/two.jpeg"
  },
  {
    title: 'Computer software, or simply software, is a collection of data or compute',
    img: "images/software.jpg"
  },
  {
    title: 'Baba Ramdev is an Indian yoga guru known for his work in ayurveda',
    img: "images/Ramdev.jpg"
  }, {
    title: 'Modi is an politician serving as the 14th and current Prime Minister of India since 2014.',
    img: "images/modi.jpg"
  },
  {
    title: 'The No. 1 gold price site for fast loading live gold price charts in ounces.',
    img: "images/gold.jpg"
  }
];

class Home extends React.Component {

  render() {
    return ReactDOM.render(
      <Layout className="layout" style={{ backgroundColor: "#ffffff" }}>
        <MainHeader appName="JP" />
        <Content style={{ padding: '50px 50px' }}>

          <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card style={{ height: 350 }}>
                  <Avatar shape="square" style={{ width: "90%", height: "80%" }} src={item.img} />
                  <p>
                    {item.title}
                  </p>
                  </Card>
              </List.Item>
            )}
          />
        </Content>

        <MainFooter appName="JP" />
      </Layout>,
      document.getElementById('root'),
    );
  }
}

export default Home;