"use client";

import Select from "antd/es/select";

type UpdateThemeProps = {
  handleThemeChange: (value: string) => void;
};

export function UpdateMonacoTheme({ handleThemeChange }: UpdateThemeProps) {
  return (
    <Select
      aria-label="change-theme"
      defaultValue="light"
      style={{ width: 120, marginRight: "5px" }}
      onChange={handleThemeChange}
      options={[
        { value: "light", label: "Light" },
        { value: "vs-dark", label: "Vs Dark" },
        { value: "hc-black", label: "Hc Black" },
        { value: "hc-light", label: "Hc Light" },
      ]}
    />
  );
}
