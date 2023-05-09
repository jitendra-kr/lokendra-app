import { Button, Image, InputNumber } from "antd";
import { useState } from "react";
import { SalaryHikePercentageCalculatorConst } from "./const";
import { SalaryHikePercentageCalculatorTitle } from "./SalaryHikePercentageCalculatorType";
import { CalculatorOutput } from "./CalculatorOutput";

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
        placeholder="Old salary"
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
        placeholder="New Salary"
        style={{ width: "100%" }}
        value={newSalary === 0 ? "" : newSalary}
        onChange={(v) => {
          if (v) {
            setNewSalary(v);
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

      <CalculatorOutput text="Your hike percentage is" value={result} />

      <Image
        alt="Salary hike percentage"
        src="https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/master/Hike_percentage_salary.webp"
      ></Image>
    </div>
  );
}
