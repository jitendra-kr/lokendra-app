"use client";
import { CustomButton } from "@ft/common/components/UiComponent/CustomButton";
import { Input, ToolInputProps } from "./ToolInput";

type RenderActionButtonProps = {
  input: Input;
} & Pick<ToolInputProps, "options" | "onClick">;

export function RenderActionButton({
  input,
  options,
  onClick,
}: RenderActionButtonProps) {
  if (!input?.buttonName) {
    return <></>;
  }
  return (
    <CustomButton
      onClick={() => {
        onClick && onClick();
      }}
      name={input.buttonName}
      styles={{ marginTop: "30px" }}
      disable={options?.disable}
    />
  );
}
