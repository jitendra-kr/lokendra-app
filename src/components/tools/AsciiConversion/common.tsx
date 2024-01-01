import { Select, Space, Tooltip } from "antd";
import { Dispatch, SetStateAction } from "react";

export type AsciiFormat =
  | "Decimal ASCII"
  | "Octal ASCII"
  | "Binary ASCII"
  | "Hexadecimal ASCII";

export function SelectASCIIConversionType({
  setInputType,
}: {
  setInputType: Dispatch<SetStateAction<AsciiFormat>>;
}) {
  return (
    <Tooltip title="Input Format">
      <Space wrap style={{ marginRight: "5px" }}>
        <Select
          defaultValue="Decimal ASCII"
          style={{ width: 230 }}
          onChange={setInputType}
          options={[
            { value: "Decimal ASCII", label: "Decimal ASCII" },
            { value: "Octal ASCII", label: "Octal ASCII" },
            { value: "Binary ASCII", label: "Binary ASCII" },
            {
              value: "Hexadecimal ASCII",
              label: "Hexadecimal ASCII",
            },
          ]}
        />
      </Space>
    </Tooltip>
  );
}
