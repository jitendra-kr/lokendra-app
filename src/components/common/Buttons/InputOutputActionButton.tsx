"use client";
import { CustomButton } from "@ft/common/components/UiComponent/CustomButton";
import { CSSProperties } from "react";

type InputOutputActionButtonProps = {
  onClick: () => void;
  name: string;
  tooltip?: string;
  styles?: CSSProperties;
  textStyles?: CSSProperties;
};

export function InputOutputActionButton({
  onClick,
  name,
}: InputOutputActionButtonProps) {
  return (
    <CustomButton
      name={name}
      onClick={onClick}
      textStyles={{ color: "white", fontSize: "small" }}
      styles={{ height: "30px" }}
      type="primary"
    />
  );
}
