import { Button, Switch } from "antd";
import { Dispatch, SetStateAction } from "react";

type EditorActionsProps = {
  setAuto: Dispatch<SetStateAction<boolean>>;
  format: () => void;
  clear: () => void;
};
export const EditorActions = ({
  setAuto,
  clear,
  format,
}: EditorActionsProps) => {
  const auto = (checked: boolean) => {
    setAuto(checked);
  };

  return (
    <div style={{ display: "flex", justifyContent: "start" }}>
      <span style={{ marginRight: "10px" }}>
        <Switch defaultChecked onChange={auto} /> auto
      </span>
      <Button
        type="primary"
        htmlType="submit"
        style={{ marginRight: "10px" }}
        onClick={format}
      >
        Format
      </Button>
      <Button
        type="primary"
        htmlType="submit"
        style={{ marginRight: "10px" }}
        onClick={clear}
      >
        Clear
      </Button>
    </div>
  );
};
