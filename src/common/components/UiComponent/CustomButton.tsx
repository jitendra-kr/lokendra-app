"use client";
import { ButtonType } from "antd/lib/button";
import Button from "antd/lib/button/button";
import React, { CSSProperties } from "react";

type CustomButtonProps = {
  style?: CSSProperties | undefined;
  children: React.ReactNode;
  type: ButtonType;
  onClick: () => void;
};

export function CustomButton({
  style,
  children,
  onClick,
  type = "default",
}: CustomButtonProps) {
  return (
    <Button type={type} style={style} onClick={onClick}>
      {children}
    </Button>
  );
}
