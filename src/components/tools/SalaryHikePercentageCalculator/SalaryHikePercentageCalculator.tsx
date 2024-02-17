import { Faq } from "@ft/components/common";
import { ToolKeys } from "../ToolsList/ToolKeys";
import { InputOutputViewer } from "../helper/InputOutputViewer";
import { HikeInPercentageBySalary } from "./HikeInPercentageBySalary";
import { NewSalaryByPercentage } from "./NewSalaryByPercentage";
import styles from "./SalaryHikePercentageCalculator.module.css";
import SalaryHikePercentageCalculatorFaq from "./SalaryHikePercentageCalculatorFaq";

function SalaryHikePercentageCalculator() {
  return (
    <>
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
      <Faq data={SalaryHikePercentageCalculatorFaq}></Faq>
    </>
  );
}

export default SalaryHikePercentageCalculator;
