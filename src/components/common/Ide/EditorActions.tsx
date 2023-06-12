import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

import { get } from "lodash";

type EditorActionsProps = {
  clear: () => void;
  onChange: (value: string | undefined) => void;
};

export const EditorActions = ({ clear, onChange }: EditorActionsProps) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "start", marginBottom: "5px" }}
    >
      <Upload
        accept=".txt, .json"
        showUploadList={false}
        beforeUpload={(file) => {
          const reader = new FileReader();

          reader.onload = (e) => {
            onChange(get(e, "target.result") ?? "");
          };
          reader.readAsText(file);

          return false;
        }}
      >
        <Button
          style={{ marginRight: "5px" }}
          type="primary"
          icon={<UploadOutlined />}
        >
          <span style={{ color: "white" }}>Upload Data</span>
        </Button>
      </Upload>
      <Button type="primary" htmlType="submit" onClick={clear}>
        <span style={{ color: "white" }}>Clear</span>
      </Button>
    </div>
  );
};
