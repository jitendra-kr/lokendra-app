import { Input } from "./ToolInput";

type RenderInputOptionsProps = {
  input: Input;
};

export function RenderInputOptions({ input }: RenderInputOptionsProps) {
  return (
    <div style={{ marginTop: "20px" }}>{input.options && input.options}</div>
  );
}
