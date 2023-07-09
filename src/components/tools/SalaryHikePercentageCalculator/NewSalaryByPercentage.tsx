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

export function NewSalaryByPercentage() {
  const [currentSalary, setCurrentSalary] = useState<number>(0);
  const [newSalary, setNewSalary] = useState<number>(0);

  const [percentageByNewSalary, setPercentageByNewSalary] = useState<number>(0);

  const clear = () => {
    setCurrentSalary(0);
    setNewSalary(0);
    setPercentageByNewSalary(0);
  };

  const calculateByNewSalary = () => {
    const result =
      currentSalary * (percentageByNewSalary / 100) + currentSalary;
    setNewSalary(Number(result.toFixed(2)));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <SalaryHikePercentageCalculatorTitle title="New Salary by Percentage" />
      <label>Old Salary</label>
      <InputNumber
        placeholder="Current Salary: 100"
        style={{ width: "100%" }}
        value={currentSalary === 0 ? "" : currentSalary}
        onChange={(v) => {
          if (v) {
            setCurrentSalary(v);
          }
        }}
      />
      <label>Percentage of Increment</label>

      <InputNumber
        placeholder="Percentage of Increment: 15"
        style={{ width: "100%" }}
        name="firstName"
        value={percentageByNewSalary === 0 ? "" : percentageByNewSalary}
        onChange={(v) => {
          if (v) {
            setPercentageByNewSalary(v);
          }
        }}
      />

      <SalaryHikePercentageCalculatorActions
        calculate={calculateByNewSalary}
        clear={clear}
      />

      <CalculatorOutput text="New Salary after Increment" value={newSalary} />

      <CalculationFormula
        heading="Calculation Formula: How we determine new salary using percentage"
        alt="Salary hike percentage"
        src="https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/master/newSalaryByPercentage.png"
      />
    </div>
  );
}
