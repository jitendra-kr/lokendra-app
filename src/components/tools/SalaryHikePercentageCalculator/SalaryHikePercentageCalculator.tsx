import { Layout } from "antd";
import { withRouter } from "next/router";
import { OfflineMetaTags } from "../../common";
import { ToolsBody } from "../ToolsBody";
import { ToolKeys, ToolsList } from "../ToolsList";

import { useToolListData } from "../../../common/hooks/useToolListData";
import { ToolDescription } from "../helper/ToolOverview";
import { HikeInPercentageBySalary } from "./HikeInPercentageBySalary";
import { NewSalaryByPercentage } from "./NewSalaryByPercentage";

const { Content } = Layout;

function SalaryHikePercentageCalculator() {
  const { toolData } = useToolListData(ToolKeys.SalaryHike);

  return (
    <Content>
      <OfflineMetaTags tagData={toolData} />
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
      <ToolDescription content={toolData.toolDescription} />
      <ToolsList />
    </Content>
  );
}

export default withRouter(SalaryHikePercentageCalculator);
