import { InputNumber } from "antd";
import dynamic from "next/dynamic";
import { useState } from "react";
import { CalculatorOutput } from "./CalculatorOutput";
import { Label } from "./Label";
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
        gap: "20px",
      }}
    >
      <SalaryHikePercentageCalculatorTitle title="New Salary by Percentage" />
      <Label label="Old Salary" />

      <InputNumber
        name="Current Salary"
        placeholder="Current Salary: 100"
        style={{ width: "100%", height: "40px" }}
        value={currentSalary === 0 ? "" : currentSalary}
        onChange={(v) => {
          if (v) {
            setCurrentSalary(v);
          }
        }}
      />
      <Label label="Percentage of Increment(%)" />
      <InputNumber
        placeholder="Percentage of Increment: 15"
        style={{ width: "100%", height: "40px" }}
        name="Percentage of Increment"
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
