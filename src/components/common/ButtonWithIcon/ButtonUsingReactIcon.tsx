import { Button } from "antd";
import { ReactNode } from "react";

type ButtonUsingProps = {
  onClick: () => void;
  mdIcon: ReactNode;
  name: string;
};

export function ButtonUsingReactIcon({
  onClick,
  mdIcon,
  name,
}: ButtonUsingProps) {
  return (
    <Button
      type="primary"
      onClick={onClick}
      icon={mdIcon}
      style={{ marginRight: "5px" }}
    >
      <span style={{ color: "white", marginLeft: "4px" }}>{name}</span>
    </Button>
  );
}
