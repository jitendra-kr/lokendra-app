import { Layout } from "antd";
import { withRouter } from "next/router";
import React from "react";
import { ToolsList } from "../ToolsList";
import { ToolsBody } from "../ToolsBody";
import { OfflineMetaTags } from "../../common";

import { HikeInPercentageBySalary } from "./HikeInPercentageBySalary";
import { NewSalaryByPercentage } from "./NewSalaryByPercentage";

const { Content } = Layout;

function SalaryHikePercentageCalculator() {
  return (
    <Content>
      <OfflineMetaTags />
      <div>
        <ToolsBody />
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-evenly", marginTop: "50px" }}
        >
          <div className="col-lg-4">
            <HikeInPercentageBySalary />
          </div>
          <div className="col-lg-4">
            <NewSalaryByPercentage />
          </div>
        </div>
      </div>
      <ToolsList />
    </Content>
  );
}

export default withRouter(SalaryHikePercentageCalculator);
