import { CSSProperties, ReactElement } from "react";

type LabelProps = {
  label: string | ReactElement;
  style?: CSSProperties;
};

export function Label({ label, style }: LabelProps) {
  return (
    <label style={{ fontSize: "15px", ...style }}>
      <b>{label}</b>
    </label>
  );
}
