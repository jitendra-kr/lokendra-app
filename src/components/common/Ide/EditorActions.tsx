import { Button, Upload } from "antd";
import { FaUpload } from "react-icons/fa";

import { get } from "lodash";
import { ReactNode } from "react";
import { ButtonUsingReactIcon } from "../ButtonWithIcon/ButtonUsingReactIcon";

type EditorActionsProps = {
  clear: () => void;
  onChange: (value: string | undefined) => void;
  children?: ReactNode;
};

export const EditorActions = ({
  clear,
  onChange,
  children,
}: EditorActionsProps) => {
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
        <ButtonUsingReactIcon
          name="Upload Data"
          onClick={() => {}}
          mdIcon={<FaUpload />}
        />
      </Upload>
      {children}
      <Button type="primary" htmlType="submit" onClick={clear}>
        <span style={{ color: "white" }}>Clear</span>
      </Button>
    </div>
  );
};
