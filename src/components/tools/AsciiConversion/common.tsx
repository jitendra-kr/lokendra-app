import { Select, Space, Tooltip } from "antd";
import { AsciiToTextType } from "ascii-text-converter";
import { Dispatch, SetStateAction } from "react";

export function SelectASCIIConversionType({
  setInputType,
}: {
  setInputType: Dispatch<SetStateAction<AsciiToTextType>>;
}) {
  const options: {
    label: string;
    value: AsciiToTextType;
  }[] = [
    { value: "decimal", label: "Decimal ASCII" },
    { value: "octal", label: "Octal ASCII" },
    { value: "binary", label: "Binary ASCII" },
    {
      value: "hex",
      label: "Hexadecimal ASCII",
    },
  ];

  return (
    <Tooltip title="Input Format">
      <Space wrap style={{ marginRight: "5px" }}>
        <Select
          defaultValue="decimal"
          style={{ width: 230 }}
          onChange={setInputType}
          options={options}
        />
      </Space>
    </Tooltip>
  );
}
