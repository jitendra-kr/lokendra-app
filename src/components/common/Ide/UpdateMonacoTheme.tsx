"use client";
import { Select, Space, Tooltip } from "antd";

type UpdateThemeProps = {
  handleThemeChange: (value: string) => void;
};

export function UpdateMonacoTheme({ handleThemeChange }: UpdateThemeProps) {
  return (
    <Tooltip title="Change Editor Theme">
      <Space wrap style={{ marginRight: "5px" }}>
        <Select
          aria-label="change-theme"
          defaultValue="light"
          style={{ width: 120 }}
          onChange={handleThemeChange}
          options={[
            { value: "light", label: "Light" },
            { value: "vs-dark", label: "Vs Dark" },
            { value: "hc-black", label: "Hc Black" },
            { value: "hc-light", label: "Hc Light" },
          ]}
        />
      </Space>
    </Tooltip>
  );
}
