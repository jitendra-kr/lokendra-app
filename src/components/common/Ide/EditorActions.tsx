import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";
import { get } from "lodash";
import { ReactNode } from "react";

import beautifyJSON from "@ft/utils/json/beautifyJSON";
import Switch from "antd/es/switch";
import Upload from "antd/es/upload";
import { InputOutputActionButton } from "../Buttons/InputOutputActionButton";

type EditorActionsProps = {
  clear: () => void;
  onChange: (value: string | undefined) => void;
  children?: ReactNode;
  childrenAfter?: ReactNode;
};

export function EditorActionsButtons({ children }: { children: ReactNode }) {
  return <Col>{children}</Col>;
}

export function MonoType({
  onChange,
}: {
  onChange: (status: boolean) => void;
}) {
  return (
    <Switch
      style={{ marginTop: "10px", marginRight: "5px" }}
      checkedChildren="Mono Type"
      unCheckedChildren="Mono Type"
      defaultChecked={false}
      onChange={onChange}
    />
  );
}

export function MiniMap({ onChange }: { onChange: (status: boolean) => void }) {
  return (
    <Switch
      style={{ marginTop: "10px", marginRight: "5px" }}
      checkedChildren="Mini Map"
      unCheckedChildren="Mini Map"
      defaultChecked={false}
      onChange={onChange}
    />
  );
}

export function FormatInput({
  value,
  cb,
}: {
  value: (() => string) | string;
  cb: (formattedValue: string, errorMsg?: string) => void;
}) {
  const format = async () => {
    value = typeof value === "string" ? value : value();
    const { beautifiedData, msg } = await beautifyJSON(value);
    if (beautifiedData) {
      cb(beautifiedData);
    }
    if (msg) {
      cb("", msg);
    }
  };

  return (
    <InputOutputActionButton
      name="Format"
      onClick={() => format()}
      tooltip="Format input"
    />
  );
}

export const EditorActions = ({
  clear,
  onChange,
  children,
  childrenAfter,
}: EditorActionsProps) => {
  return (
    <Row
      style={{ display: "flex", justifyContent: "start", marginBottom: "5px" }}
    >
      {children}

      <EditorActionsButtons>
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
          <InputOutputActionButton name="Load file" onClick={() => {}} />
        </Upload>
      </EditorActionsButtons>

      {childrenAfter}
      <EditorActionsButtons>
        <InputOutputActionButton
          name="Clear"
          onClick={clear}
          tooltip="Clear Input"
        />
      </EditorActionsButtons>
    </Row>
  );
};
