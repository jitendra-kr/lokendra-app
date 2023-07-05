import { Button } from "antd";
import { SalaryHikePercentageCalculatorConst } from "./const";

export function SalaryHikePercentageCalculatorActions({
  clear,
  calculate,
}: {
  clear: () => void;
  calculate: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button type="primary" onClick={calculate} style={{ width: "40%" }}>
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
