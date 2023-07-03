import { Col, Row, Tooltip, Upload } from "antd";
import { get } from "lodash";
import { ReactNode } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaUpload } from "react-icons/fa";
import { COLOR_CONST } from "../../../constants";
import { ButtonUsingReactIcon } from "../ButtonWithIcon/ButtonUsingReactIcon";

type EditorActionsProps = {
  clear: () => void;
  onChange: (value: string | undefined) => void;
  children?: ReactNode;
  childrenAfter?: ReactNode;
};

export function EditorActionsButtons({ children }: { children: ReactNode }) {
  return (
    <Col
      xs={2}
      sm={2}
      md={2}
      lg={1}
      xl={1}
      style={{ marginTop: "5px", padding: "0px" }}
    >
      {children}
      {/* jimmy */}
    </Col>
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
      className="row"
      style={{ display: "flex", justifyContent: "start", marginBottom: "5px" }}
    >
      {children}

      <EditorActionsButtons
        children={
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
                mdIcon={<FaUpload color={COLOR_CONST.defaultIcon} />}
              />
            </Upload>
          </Tooltip>
        }
      />

      {childrenAfter}
      <EditorActionsButtons
        children={
          <ButtonUsingReactIcon
            name="Clear"
            onClick={clear}
            mdIcon={<AiFillDelete size={15} color={COLOR_CONST.defaultIcon} />}
            tooltip="Clear Input"
          />
        }
      />
    </Row>
  );
};
