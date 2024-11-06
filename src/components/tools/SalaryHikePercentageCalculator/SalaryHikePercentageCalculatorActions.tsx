"use client";
import { CustomButton } from "@ft/common/components/UiComponent/CustomButton";
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
        justifyContent: "center",
      }}
    >
      <CustomButton
        onClick={clear}
        styles={{
          width: "40%",
          backgroundColor: "white",
          height: "40px",
        }}
        textStyles={{ color: "black" }}
        name={SalaryHikePercentageCalculatorConst.clear}
      />
      <CustomButton
        type="primary"
        styles={{ width: "40%", height: "40px" }}
        name={SalaryHikePercentageCalculatorConst.submit}
        onClick={() => {}}
      />
    </div>
  );
}
