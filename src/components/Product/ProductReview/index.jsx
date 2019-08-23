import React from "react";
import { Link } from "react-router-dom";
import "./product-review.css";
import { RatingPercentage } from "../../../components";
import { Layout, Rate, Icon, Button } from "antd";
const { Content } = Layout;


const dataOne = {
  title:
    "Computer software, or simply software, is a collection of data or compute",
  img: "/images/zookeeper.PNG",
  stars: 3
};
const data = [
  {
    name: "John Milton",
    date: "24 September 2018",
    verifiedBuyer: true,
    rating: 4,
    reviewComment: `Distribution List tab displays the same users as the users were
        added under the table(reviewer/checker/accepter/author/approver)
        during GTR creation. Distribution List tab displays the same users
        as the users were added under the
        table(reviewer/checker/accepter/author/approver) during GTR
        creation`
  },
  {
    name: "007",
    date: "01 September 2019",
    verifiedBuyer: true,
    rating: 3,
    reviewComment: `Only the Reviewer's table records are displayed in the 'Distribution List' tab after Informal Review is done. Records from all other tables gets removedOnly the Reviewer's table records are displayed in the 'Distribution List' tab after Informal Review is done. Records from all other tables gets removedOnly the Reviewer's table records are displayed in the 'Distribution List' tab after Informal Review is done. Records from all other tables gets removedOnly the Reviewer's table records are displayed in the 'Distribution List' tab after Informal Review is done. Records from all other tables gets removed`
  },
  {
    name: "Tom",
    date: "01 July 2019",
    verifiedBuyer: true,
    rating: 3,
    reviewComment: `Only the Reviewer's table records are displayed in the 'Distribution List' tab after Informal Review is done. Records from all other tables gets removedOnly the Reviewer's table records are displayed in the 'Distribution List' tab after Informal Review is done. Records from all other tables gets removedOnly the Reviewer's table records are displayed in the 'Distribution List' tab after Informal Review is done. Records from all other tables gets removedOnly the Reviewer's table records are displayed in the 'Distribution List' tab after Informal Review is done. Records from all other tables gets removed`
  }
];
const ProductReview = ({ appName }) => {
  return (
    <Content style={{ padding: "50px 50px" }}>
      <div className="row">
        <div className="col-lg-2" />
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-3">
              <div>
                <h2>4.5/5</h2>
                <Rate
                  disabled
                  defaultValue={4}
                  style={{ display: "block", marginBottom: "20px" }}
                />
                <span className="light-color"> 522 Reviews</span>
              </div>
            </div>
            <div className="col-lg-5">
                <RatingPercentage />
            </div>
            <div className="col-lg-4">
              <div>
                <div className="blog-title">
                  <Link
                    to={`/home/${dataOne.title
                      .replace(/ /g, "-")
                      .toLowerCase()}`}
                    style={{ display: "block", marginBottom: "20px" }}
                  >
                    {dataOne.title}
                  </Link>
                  <Button type="primary" size="small">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {data.map(function(o, i) {
            return (
              <div className="m-top-55">
                <div className="reviewer-name-time" key={i}>
                  <h4>{o.name} </h4>
                  <p className="review-time"> {o.date}</p>
                </div>
                <div>
                  <Rate disabled defaultValue={o.rating} />
                  <span style={{ marginLeft: "20px" }}>
                    <Icon
                      type="check-circle"
                      className="verified-icon"
                      theme="filled"
                    />
                    <span style={{ fontWeight: "600" }}> Verified Buyer </span>
                  </span>
                </div>
                <p className="review-comment">{o.reviewComment}</p>
                <hr />
              </div>
            );
          })}
        </div>
        <div className="col-lg-2" />
      </div>
    </Content>
  );
};

export default ProductReview;
