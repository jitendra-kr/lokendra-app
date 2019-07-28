import React from 'react';
import Banner from './Banner.jsx';



class Home extends React.Component {
  render() {
    return (
      <div className="home-page">

        <Banner appName="LK" />

        <div className="container ">
          <div className="row justify-content-md-center">
            <div className="col col-lg-4">
              <img style={{width:'100%', height: "100%"}} src="images/bitcoin-coin.jpg" alt="jimmy" />
              <p>
              10,000 American Cryptocurrency Owners Will Receive Warning Letters From the IRS
              </p>
            </div>
            <div className="col col-lg-4">
              <img style={{width:'100%', height: "100%"}} src="images/army.jpg" alt="jimmy" />
              <p>
              The Indian Army is the land-based branch and the largest component of Indian Armed
              </p>
            </div>
          </div>
          <div className="row justify-content-md-center" style={{"marginTop": "110px"}}>
            <div className="col col-lg-4">
              <img style={{width:'100%', height: "100%"}} src="images/uber.jpeg" alt="jimmy" />
              <p>
              Uber Technologies, Inc. is an American multinational transportation network company.
              </p>
            </div>
            <div className="col col-lg-4">
              <img style={{width:'100%', height: "100%"}} src="images/blog.jpg" alt="jimmy" />
              <p>
              Creating blog content that is valuable, helpful, and/or entertaining is an effective way to grow.
              </p>
            </div>
          </div>
          <div className="row justify-content-md-center" style={{"marginTop": "110px"}}>
            <div className="col col-lg-4">
              <img style={{width:'100%', height: "100%"}} src="images/mark_zukerberg.jpg" alt="jimmy" />
              <p>
              10,000 American Cryptocurrency Owners Will Receive Warning Letters From the IRS
              </p>
            </div>
            <div className="col col-lg-4">
              <img style={{width:'100%', height: "100%"}} src="images/two.jpeg" alt="jimmy" />
              <p>
              Mark Elliot Zuckerberg is an American technology entrepreneur and philanthropist.
              </p>
            </div>
          </div>
          <div className="row justify-content-md-center" style={{"marginTop": "110px"}}>
            <div className="col col-lg-4">
              <img style={{width:'100%', height: "100%"}} src="images/software.jpg" alt="jimmy" />
              <p>
              Computer software, or simply software, is a collection of data or compute
              </p>
            </div>
            <div className="col col-lg-4">
              <img style={{width:'100%', height: "100%"}} src="images/Ramdev.jpg" alt="jimmy" />
              <p>
              Baba Ramdev is an Indian yoga guru known for his work in ayurveda
              </p>
            </div>
          </div>
          <div className="row justify-content-md-center" style={{"marginTop": "110px"}}>
            <div className="col col-lg-4">
              <img style={{width:'100%', height: "100%"}} src="images/modi.jpg" alt="jimmy" />
              <p>
              Modi is an politician serving as the 14th and current Prime Minister of India since 2014.
              </p>
            </div>
            <div className="col col-lg-4">
              <img style={{width:'100%', height: "100%"}} src="images/gold.jpg" alt="jimmy" />
              <p>
              The No. 1 gold price site for fast loading live gold price charts in ounces.
              </p>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Home;