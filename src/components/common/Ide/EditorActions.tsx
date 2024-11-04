import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";
import { get } from "lodash";
import { ReactNode } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaUpload } from "react-icons/fa";
import { PiBracketsCurlyBold } from "react-icons/pi";

import { COLOR_CONST } from "@ft/constants/colorConstant";
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
  return <Col style={{ marginTop: "5px" }}>{children}</Col>;
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
      styles={{ marginTop: "5px" }}
      name="Format"
      onClick={() => format()}
      mdIcon={<PiBracketsCurlyBold color={COLOR_CONST.defaultIcon} />}
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
          <InputOutputActionButton
            name="Load file"
            onClick={() => {}}
            mdIcon={<FaUpload color={COLOR_CONST.defaultIcon} size={10} />}
          />
        </Upload>
      </EditorActionsButtons>

      {childrenAfter}
      <EditorActionsButtons>
        <InputOutputActionButton
          name="Clear"
          onClick={clear}
          mdIcon={<AiFillDelete size={13} color={COLOR_CONST.defaultIcon} />}
          tooltip="Clear Input"
        />
      </EditorActionsButtons>
    </Row>
  );
};
