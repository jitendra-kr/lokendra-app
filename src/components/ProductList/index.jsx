import React from "react";
import { Rate } from "antd";

const ProductList = ({ appName }) => {
  const data = [
    {
      title: "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder",
      img: "images/bitcoin-coin.jpg",
      stars: 3
    },
    {
      title:
        "The Indian Army is the land-based branch and the largest component of Indian Armed",
      img: "images/army.jpg",
      stars: 5
    },
    {
      title:
        "Uber Technologies, Inc. is an American multinational transportation network company.",
      img: "images/uber.jpeg",
      stars: 3
    },
    {
      title:
        "Creating blog content that is valuable, helpful, and/or entertaining is an effective way to grow.",
      img: "images/blog.jpg",
      stars: 3
    },
    {
      title:
        "10,000 American Cryptocurrency Owners Will Receive Warning Letters From the IRS",
      img: "images/mark_zukerberg.jpg",
      stars: 1
    },
    {
      title:
        "Mark Elliot Zuckerberg is an American technology entrepreneur and philanthropist.",
      img: "images/two.jpeg",
      stars: 3
    },
    {
      title:
        "Computer software, or simply software, is a collection of data or compute",
      img: "images/software.jpg",
      stars: 3
    },
    {
      title:
        "Baba Ramdev is an Indian yoga guru known for his work in ayurveda",
      img: "images/Ramdev.jpg",
      stars: 9
    },
    {
      title:
        "Modi is an politician serving as the 14th and current Prime Minister of India since 2014.",
      img: "images/modi.jpg",
      stars: 3
    },
    {
      title:
        "The No. 1 gold price site for fast loading live gold price charts in ounces.",
      img: "images/gold.jpg",
      stars: 5
    }
  ];

  return (
    <div className="row">
      {data.map(function(key) {
        return (
          <div className="col-lg-3">
            {/* <span>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                alt="jp"
                style={{ width: "100%" }}
              />
            </span> */}
            <Rate disabled defaultValue={key.stars} /> (123)
            <div>
              <a href="/">{key.title}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
