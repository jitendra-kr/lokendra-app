import { Button, Image, InputNumber } from "antd";
import { useState } from "react";
import { SalaryHikePercentageCalculatorConst } from "./const";
import { SalaryHikePercentageCalculatorTitle } from "./SalaryHikePercentageCalculatorType";
import { CalculatorOutput } from "./CalculatorOutput";

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
      (currentSalary * (percentageByNewSalary / 100)) + currentSalary;
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
        placeholder="Current Salary"
        style={{ width: "100%" }}
        value={currentSalary === 0  ? "" :  currentSalary}
        onChange={(v) => {
          if (v) {
            setCurrentSalary(v);
          }
        }}
      />
      <label>Percentage of Increment</label>

      <InputNumber
        placeholder="Percentage of Increment"
        style={{ width: "100%" }}
        name="firstName"
        value={percentageByNewSalary === 0  ? "" :  percentageByNewSalary}
        onChange={(v) => {
          if (v) {
            setPercentageByNewSalary(v);
          }
        }}
      />
      <Button
        type="primary"
        onClick={calculateByNewSalary}
        style={{ width: "100%" }}
      >
        {SalaryHikePercentageCalculatorConst.submit}
      </Button>

      <Button onClick={clear} style={{ width: "100%" }}>
        {SalaryHikePercentageCalculatorConst.clear}
      </Button>


      <CalculatorOutput text="New Salary after Increment" value= {newSalary} />

      <Image
        alt="Salary hike percentage"
        src="https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/master/newSalaryByPercentage.png"
      ></Image>
    </div>
  );
}
