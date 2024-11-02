"use client";
import Select from "antd/es/select";
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
    <Select
      defaultValue="decimal"
      style={{ width: 230, marginRight: "5px", marginTop: "5px" }}
      onChange={setInputType}
      options={options}
    />
  );
}
