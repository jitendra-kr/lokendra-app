"use client";
import { Button } from "antd";
import { ButtonType } from "antd/lib/button";
import { CSSProperties, ReactNode } from "react";

type ButtonUsingProps = {
  onClick: () => void;
  mdIcon?: ReactNode;
  name: string;
  tooltip?: string;
  styles?: CSSProperties;
  textStyles?: CSSProperties;
  type?: ButtonType;
};

export function InputOutputActionButton({
  onClick,
  name,
  styles,
  textStyles,
  type = "primary",
}: ButtonUsingProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      style={{ marginRight: "5px", ...styles }}
    >
      <span style={{ color: "white", ...textStyles }}>
        <b>{name}</b>
      </span>
    </Button>
  );
}
