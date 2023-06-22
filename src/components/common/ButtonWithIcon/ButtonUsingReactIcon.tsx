import { Button, Tooltip } from "antd";
import { ReactNode } from "react";

type ButtonUsingProps = {
  onClick: () => void;
  mdIcon: ReactNode;
  name: string;
  tooltip?: string;
};

export function ButtonUsingReactIcon({
  onClick,
  mdIcon,
  name,
  tooltip,
}: ButtonUsingProps) {
  return (
    <Tooltip title={tooltip}>
      <Button
        type="primary"
        onClick={onClick}
        icon={mdIcon}
        style={{ marginRight: "5px" }}
      >
        <span style={{ color: "white", marginLeft: "4px" }}>{name}</span>
      </Button>
    </Tooltip>
  );
}
