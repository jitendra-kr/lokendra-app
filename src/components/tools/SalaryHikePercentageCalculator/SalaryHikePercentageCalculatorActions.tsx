"use client";
import { Button } from "antd";
import { SalaryHikePercentageCalculatorConst } from "./const";

export function SalaryHikePercentageCalculatorActions({
  clear,
}: {
  clear: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button type="primary" htmlType="submit" style={{ width: "40%" }}>
        <span style={{ color: "white", fontWeight: "bold" }}>
          {SalaryHikePercentageCalculatorConst.submit}
        </span>
      </Button>
      <Button onClick={clear} style={{ width: "40%", marginTop: "10px" }}>
        {SalaryHikePercentageCalculatorConst.clear}
      </Button>
    </div>
  );
}
