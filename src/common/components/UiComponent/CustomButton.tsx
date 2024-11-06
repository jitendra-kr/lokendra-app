"use client";

import { CSSProperties, ReactNode } from "react";

declare const _ButtonTypes: readonly [
  "default",
  "primary",
  "dashed",
  "link",
  "text",
];
export type ButtonType = (typeof _ButtonTypes)[number];

type CustomButtonProps = {
  name: string;
  styles?: CSSProperties;
  textStyles?: CSSProperties;
  children?: ReactNode;
  type?: ButtonType;
  onClick: () => void;
  disable?: boolean;
};

export function CustomButton({
  styles,
  children,
  onClick,
  textStyles,
  name,
  disable,
  type = "primary",
}: CustomButtonProps) {
  return (
    <button
      disabled={disable}
      type="submit"
      onClick={onClick}
      style={
        type === "primary"
          ? {
              marginRight: "5px",
              height: "40px",
              borderColor: "#1677FF",
              borderRadius: "5px",
              backgroundColor: "#1677FF",
              cursor: "pointer",
              ...styles,
            }
          : {
              marginRight: "5px",
              height: "40px",
              borderRadius: "5px",
              cursor: "pointer",
              ...styles,
            }
      }
    >
      {children || (
        <b style={{ color: "white", fontSize: "larger", ...textStyles }}>
          {name}
        </b>
      )}
    </button>
  );
}
