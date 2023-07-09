import { InputNumber } from "antd";
import dynamic from "next/dynamic";
import { useState } from "react";
import { CalculatorOutput } from "./CalculatorOutput";
import { SalaryHikePercentageCalculatorTitle } from "./SalaryHikePercentageCalculatorType";

const CalculationFormula = dynamic(() =>
  import("./CalculationFormula").then((mod) => mod.CalculationFormula),
);

const SalaryHikePercentageCalculatorActions = dynamic(() =>
  import("./SalaryHikePercentageCalculatorActions").then(
    (mod) => mod.SalaryHikePercentageCalculatorActions,
  ),
);

export function HikeInPercentageBySalary() {
  const [newSalary, setNewSalary] = useState<number>(0);
  const [oldSalary, setOldSalary] = useState<number>(0);

  const [result, setResult] = useState<number>(0);

  const clear = () => {
    setNewSalary(0);
    setOldSalary(0);
    setResult(0);
  };

  const calculateByNewSalary = () => {
    const result = ((newSalary - oldSalary) / oldSalary) * 100;
    setResult(Number(result.toFixed(2)));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <SalaryHikePercentageCalculatorTitle title=" Hike Percentage by Salary" />
      <label>Old Salary</label>

      <InputNumber
        placeholder="Old salary: 100"
        style={{ width: "100%" }}
        name="firstName"
        value={oldSalary === 0 ? "" : oldSalary}
        onChange={(v) => {
          if (v) {
            setOldSalary(v);
          }
        }}
      />
      <label>New Salary</label>

      <InputNumber
        placeholder="New Salary: 120"
        style={{ width: "100%" }}
        value={newSalary === 0 ? "" : newSalary}
        onChange={(v) => {
          if (v) {
            setNewSalary(v);
          }
        }}
      />

      <SalaryHikePercentageCalculatorActions
        calculate={calculateByNewSalary}
        clear={clear}
      />

      <CalculatorOutput
        text="Your percentage increase is"
        value={`${result} %`}
      />

      <CalculationFormula
        heading="Calculation Formula: How we determine hike percentage using old and new salaries"
        alt="Salary hike percentage"
        src="https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/master/Hike_percentage_salary.webp"
      />
    </div>
  );
}
