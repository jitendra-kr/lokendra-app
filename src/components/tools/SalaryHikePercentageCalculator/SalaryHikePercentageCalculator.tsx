import { withRouter } from "next/router";
import { ToolKeys } from "../ToolsList";

import { InputOutputViewer } from "../helper/InputOutputViewer";
import { HikeInPercentageBySalary } from "./HikeInPercentageBySalary";
import { NewSalaryByPercentage } from "./NewSalaryByPercentage";

function SalaryHikePercentageCalculator() {
  return (
    <InputOutputViewer
      toolId={ToolKeys.SalaryHike}
      byte={""}
      inputChild={
        <div className="col-lg-4">
          <HikeInPercentageBySalary />
        </div>
      }
      outputChild={
        <>
          <div className="col-lg-3"></div>
          <div className="col-lg-4">
            <NewSalaryByPercentage />
          </div>
        </>
      }
    />
  );
}

export default withRouter(SalaryHikePercentageCalculator);
