import React from "react";

const ProductList = ({ appName }) => {
    const data = [
        {
          title: "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder",
          img: "images/bitcoin-coin.jpg"
        },
        {
          title:
            "The Indian Army is the land-based branch and the largest component of Indian Armed",
          img: "images/army.jpg"
        },
        {
          title:
            "Uber Technologies, Inc. is an American multinational transportation network company.",
          img: "images/uber.jpeg"
        },
        {
          title:
            "Creating blog content that is valuable, helpful, and/or entertaining is an effective way to grow.",
          img: "images/blog.jpg"
        },
        {
          title:
            "10,000 American Cryptocurrency Owners Will Receive Warning Letters From the IRS",
          img: "images/mark_zukerberg.jpg"
        },
        {
          title:
            "Mark Elliot Zuckerberg is an American technology entrepreneur and philanthropist.",
          img: "images/two.jpeg"
        },
        {
          title:
            "Computer software, or simply software, is a collection of data or compute",
          img: "images/software.jpg"
        },
        {
          title: "Baba Ramdev is an Indian yoga guru known for his work in ayurveda",
          img: "images/Ramdev.jpg"
        },
        {
          title:
            "Modi is an politician serving as the 14th and current Prime Minister of India since 2014.",
          img: "images/modi.jpg"
        },
        {
          title:
            "The No. 1 gold price site for fast loading live gold price charts in ounces.",
          img: "images/gold.jpg"
        }
      ];

  return (
    <div className="row">
    {data.map(function(key) {
      return (
        <div className="col-lg-3">
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            alt="jp"
            style={{ width: "100%" }}
          />
          <p className="color">{key.title}</p>
        </div>
      );
    })}
  </div>
  );
};

export default ProductList;
