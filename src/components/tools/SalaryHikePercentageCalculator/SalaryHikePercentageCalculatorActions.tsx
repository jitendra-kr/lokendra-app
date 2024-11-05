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
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CustomButton
        type="primary"
        styles={{ width: "40%", height: "40px" }}
        name={SalaryHikePercentageCalculatorConst.submit}
        onClick={() => {}}
      ></CustomButton>
      <CustomButton
        onClick={clear}
        styles={{
          width: "40%",
          marginTop: "10px",
          backgroundColor: "white",
          height: "35px",
        }}
        textStyles={{ color: "black" }}
        name={SalaryHikePercentageCalculatorConst.clear}
      ></CustomButton>
    </div>
  );
}
