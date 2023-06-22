import { Tooltip, Upload } from "antd";
import { get } from "lodash";
import { ReactNode } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaUpload } from "react-icons/fa";
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
      {children}
      <Tooltip title="Load Data From Load File">
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
      </Tooltip>

      <ButtonUsingReactIcon
        name="Clear"
        onClick={clear}
        mdIcon={<AiFillDelete size={15} />}
        tooltip="Clear Input"
      />
    </div>
  );
};
