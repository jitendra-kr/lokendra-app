import React from "react";
import { Empty } from "antd";


class DataNoFound extends React.Component {


  render()  {

        return <div>
                <Empty
                  image="../../images/data-not-found.png"
                  imageStyle={{
                    height: 70,
                  }}
                  description={<span>{this.props.data.text}</span>}
                ></Empty>
        </div>
    };
};

export default DataNoFound;
