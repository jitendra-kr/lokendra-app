"use client";
import { Button } from "antd";
import InputOutputViewerStyles from "./InputOutputViewer.module.css";
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
    <Button
      type="primary"
      className={InputOutputViewerStyles["input-button"]}
      onClick={onClick}
      disabled={options?.disable}
      size="large"
    >
      <b className={InputOutputViewerStyles.buttonText}>{input.buttonName}</b>
    </Button>
  );
}
