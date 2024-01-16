import { Checkbox, Select, Space, Tooltip } from "antd";

export function NumbersToWordsOptions({
  handleLocaleCodeChange,
  handleCurrencyCheckboxChange,
}: {
  handleLocaleCodeChange: (value: string) => void;
  handleCurrencyCheckboxChange: (value: boolean) => void;
}) {
  return (
    <div style={{ marginTop: "30px" }}>
      <Tooltip title="Locale">
        <Space wrap style={{ marginRight: "5px" }}>
          <Select
            defaultValue={`${navigator ? navigator.language : "en-US"}`}
            style={{ width: 150 }}
            onChange={handleLocaleCodeChange}
            options={[
              { value: "pt-BR", label: "Brazil (pt-BR)" },
              { value: "fr-FR", label: "France (fr-FR)" },
              { value: "en-IN", label: "India (en-IN)" },
              { value: "en-NG", label: "Nigeria (en-NG)" },
              { value: "tr-TR", label: "Turkey (tr-TR)" },
              { value: "en-AE", label: "UAE (en-AE)" },
              { value: "en-GB", label: "UK (en-GB)" },
              { value: "en-US", label: "USA (en-US)" },
            ]}
          />
        </Space>
      </Tooltip>
      <Checkbox
        onChange={(status) =>
          handleCurrencyCheckboxChange(status.target.checked)
        }
      >
        Currency
      </Checkbox>
    </div>
  );
}
