import { Input, InputNumber } from "antd";
import { CSSProperties } from "react";

type CustomInputProps = {
  style?: CSSProperties | undefined;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
};
export function CustomInput({
  style,
  value,
  defaultValue,
  onChange,
}: CustomInputProps) {
  return (
    <Input
      style={{ ...style }}
      value={value}
      defaultValue={defaultValue}
      onChange={(value) => {
        onChange(value.target.value);
      }}
      allowClear
    ></Input>
  );
}
type CustomNumberInputProps = {
  style?: CSSProperties | undefined;
  value?: number;
  defaultValue?: number;
  maxValue?: number;
  onChange: (value: number) => void;
};

export function CustomNumberInput({
  style,
  value,
  maxValue,
  defaultValue,
  onChange,
}: CustomNumberInputProps) {
  return (
    <InputNumber<number>
      size="large"
      value={value}
      style={{ ...style }}
      defaultValue={defaultValue}
      min={0}
      max={maxValue}
      onChange={(value) => {
        value = value ? Math.trunc(value) : 0;
        onChange(value);
      }}
    />
  );
}
