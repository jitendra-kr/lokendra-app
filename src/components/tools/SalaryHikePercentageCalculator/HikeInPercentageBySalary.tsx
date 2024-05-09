"use client";
import { Form, InputNumber } from "antd";
import dynamic from "next/dynamic";
import { useState } from "react";
import { messageError } from "../../../utils";
import styles from "./CalculationFormula.module.css";
import { CalculatorOutput } from "./CalculatorOutput";
import { Label } from "./Label";
import { HikeInPercentageBySalaryField } from "./SalaryHikePercentageCalculator.types";
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
  const [result, setResult] = useState<number>(0);
  const [increasedValue, setIncreasedValue] = useState<number>(0);

  const [form] = Form.useForm();

  const onFinish = (values: HikeInPercentageBySalaryField) => {
    const newSalary = values.newSalary;
    const oldSalary = values.oldSalary;
    if (!newSalary || !oldSalary) {
      messageError({ content: "Provided inputs are invalid " });

      return;
    }
    const result = ((newSalary - oldSalary) / oldSalary) * 100;
    if (isNaN(result)) {
      messageError({ content: "Provided inputs are invalid " });
      return;
    }
    setResult(result);
    setIncreasedValue(newSalary - oldSalary);
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles["calculator-container"]}>
      <SalaryHikePercentageCalculatorTitle title=" Hike Percentage by Salary" />
      <Form
        style={{ marginLeft: "40px", marginRight: "40px" }}
        form={form}
        name="HikeInPercentageBySalary"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<HikeInPercentageBySalaryField>
          label={<Label label="Old Salary" />}
          name="oldSalary"
          rules={[{ required: true, message: "Please input your old salary!" }]}
        >
          <InputNumber
            placeholder="Old salary: 100"
            style={{ width: "100%", height: "40px" }}
          />
        </Form.Item>

        <Form.Item<HikeInPercentageBySalaryField>
          label={<Label label="New Salary" />}
          name="newSalary"
          rules={[{ required: true, message: "Please input your new salary!" }]}
        >
          <InputNumber
            placeholder="New Salary: 120"
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
      <CalculatorOutput
        text="Your percentage increase is"
        value={`${result} %`}
      />
      <CalculatorOutput
        text="Your salary has increased by"
        value={`${increasedValue}`}
      />

      <CalculationFormula
        heading="Calculation Formula: How we determine hike percentage using old and new salaries"
        alt="Salary hike percentage"
        src="https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/master/Hike_percentage_salary.webp"
      />
    </div>
  );
}
