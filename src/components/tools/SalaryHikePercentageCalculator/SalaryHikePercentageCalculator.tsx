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
        <>
          <div className={styles.container}>
            <HikeInPercentageBySalary />
          </div>
        </>
      }
      outputChild={
        <>
          <div className={styles.container}>
            <NewSalaryByPercentage />
          </div>
        </>
      }
    />
  );
}

export default SalaryHikePercentageCalculator;
