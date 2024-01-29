import { CSSProperties } from "react";

type CustomTextareaProps = {
  style?: CSSProperties;
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
  autoFocus?: boolean;
};

export function CustomTextarea({
  style,
  onChange,
  value,
  placeholder,
  autoFocus,
}: CustomTextareaProps) {
  return (
    <textarea
      autoFocus={autoFocus}
      style={style}
      onChange={(value) => {
        onChange(value.target.value);
      }}
      value={value}
      placeholder={placeholder}
    ></textarea>
  );
}
