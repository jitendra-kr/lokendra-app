import { withRouter } from "next/router";
import { ToolKeys } from "../ToolsList";
import { InputOutputViewer } from "../helper/InputOutputViewer";
import { HikeInPercentageBySalary } from "./HikeInPercentageBySalary";
import { NewSalaryByPercentage } from "./NewSalaryByPercentage";
import styles from "./SalaryHikePercentageCalculator.module.css";

function SalaryHikePercentageCalculator() {
  return (
    <InputOutputViewer
      toolId={ToolKeys.SalaryHike}
      byte={""}
      inputChild={
        <div className={"col-lg-4 " + styles.container}>
          <HikeInPercentageBySalary />
        </div>
      }
      outputChild={
        <>
          <div className="col-lg-3"></div>
          <div className={"col-lg-4 " + styles.container}>
            <NewSalaryByPercentage />
          </div>
        </>
      }
    />
  );
}

export default withRouter(SalaryHikePercentageCalculator);
