import React from "react";
import { Progress } from "antd";

const percentageData = [
  {
    star: "5",
    percentage: 50
  },
  {
    star: "4",
    percentage: 30
  },
  {
    star: "3",
    percentage: 10
  },
  {
    star: "2",
    percentage: 10
  },
  {
    star: "1",
    percentage: 0
  }
];

const RatingPercentage = ({ appName }) => {
  return (
    <div >
      {percentageData.map(function(o, i) {
        return (
          <div key={i}>
            <span style={{fontSize: "13px"}}>{o.star} Star </span>
            <Progress
              style={{ width: "85%", marginLeft: "10px" }}
              strokeColor={{
                from: "#FFBC00",
                to: "#FFBC00"
              }}
              percent={o.percentage}
              status="active"
            />
          </div>
        );
      })}
    </div>
  );
};

export default RatingPercentage;
