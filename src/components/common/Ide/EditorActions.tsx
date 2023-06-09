import { Button } from "antd";

type EditorActionsProps = {
  clear: () => void;
};
export const EditorActions = ({ clear }: EditorActionsProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "start" }}>
      <Button type="primary" htmlType="submit" onClick={clear}>
        <span style={{ color: "white" }}>Clear</span>
      </Button>
    </div>
  );
};
