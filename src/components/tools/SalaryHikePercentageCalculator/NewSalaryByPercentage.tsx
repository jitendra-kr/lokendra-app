"use client";
import { Form, InputNumber } from "antd";
import dynamic from "next/dynamic";
import { useState } from "react";

import { messageError } from "@ft/utils/antd";
import styles from "./CalculationFormula.module.css";
import { CalculatorOutput } from "./CalculatorOutput";
import { Label } from "./Label";
import { NewSalaryByPercentageField } from "./SalaryHikePercentageCalculator.types";
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
  const [result, setResult] = useState<number>(0);
  const [increasedValue, setIncreasedValue] = useState<number>(0);

  const [form] = Form.useForm();

  const onFinish = ({
    currentSalary,
    percentage,
  }: NewSalaryByPercentageField) => {
    const result = currentSalary * (percentage / 100) + currentSalary;
    if (isNaN(result)) {
      messageError({ content: "Provided inputs are invalid " });
      return;
    }
    setResult(Number(result.toFixed(2)));
    setIncreasedValue(Number((result - currentSalary).toFixed(2)));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles["calculator-container"]}>
      <SalaryHikePercentageCalculatorTitle title="New Salary by Percentage" />
      <Form
        style={{ marginLeft: "40px", marginRight: "40px" }}
        form={form}
        name="NewSalaryByPercentage"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<NewSalaryByPercentageField>
          label={<Label label="Old Salary" />}
          name="currentSalary"
          rules={[{ required: true, message: "Please input your old salary!" }]}
        >
          <InputNumber
            placeholder="Salary: 100"
            style={{ width: "100%", height: "40px" }}
          />
        </Form.Item>

        <Form.Item<NewSalaryByPercentageField>
          label={<Label label="Percentage of Increment(%)" />}
          name="percentage"
          rules={[{ required: true, message: "Please input your percentage!" }]}
        >
          <InputNumber
            placeholder="Percentage: 12"
            style={{ width: "100%", height: "40px" }}
          />
        </Form.Item>

        <Form.Item>
          <SalaryHikePercentageCalculatorActions
            clear={() => {
              form.resetFields();
              setResult(0);
              setIncreasedValue(0);
            }}
          />
        </Form.Item>
      </Form>

      <CalculatorOutput text="New salary after increment is" value={result} />
      <CalculatorOutput
        text="Your salary has increased by"
        value={increasedValue}
      />

      <CalculationFormula
        heading="Calculation Formula: How we determine new salary using percentage"
        alt="salary hike percentage calculator"
        src="https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/master/newSalaryByPercentage.jpg"
      />
    </div>
  );
}
