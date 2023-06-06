import { Layout } from "antd";
import { withRouter } from "next/router";
import { OfflineMetaTags } from "../../common";
import { ToolsBody } from "../ToolsBody";
import { ToolKeys, ToolsList, toolsListData } from "../ToolsList";

import { ToolDescription } from "../helper/ToolOverview";
import { HikeInPercentageBySalary } from "./HikeInPercentageBySalary";
import { NewSalaryByPercentage } from "./NewSalaryByPercentage";

const { Content } = Layout;

function SalaryHikePercentageCalculator() {
  const result = toolsListData.filter((obj) => {
    return obj.key === ToolKeys.SalaryHike;
  });

  return (
    <Content>
      <OfflineMetaTags tagId={ToolKeys.SalaryHike} />
      <div>
        <ToolsBody />
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "50px",
          }}
        >
          <div className="col-lg-4">
            <HikeInPercentageBySalary />
          </div>
          <div className="col-lg-4">
            <NewSalaryByPercentage />
          </div>
        </div>
      </div>
      <ToolDescription content={result[0].toolDescription} />
      <ToolsList />
    </Content>
  );
}

export default withRouter(SalaryHikePercentageCalculator);
