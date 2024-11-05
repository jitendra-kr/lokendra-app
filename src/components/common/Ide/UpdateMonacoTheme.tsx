"use client";
import CustomSelect from "@ft/common/components/UiComponent/CustomSelect";

type UpdateThemeProps = {
  handleThemeChange: (value: string) => void;
};

const options = [
  { value: "light", label: "Light" },
  { value: "vs-dark", label: "Vs Dark" },
  { value: "hc-black", label: "Hc Black" },
  { value: "hc-light", label: "Hc Light" },
];

export function UpdateMonacoTheme({ handleThemeChange }: UpdateThemeProps) {
  return (
    <CustomSelect
      onChange={handleThemeChange}
      label="Select type"
      options={options}
      defaultValue={options[0].value}
    />
  );
}
