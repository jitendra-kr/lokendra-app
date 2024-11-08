export type DiffIdeProps = {
  id: "leftIDE" | "rightIDE";
  value: string;
  onChange: (value: string | undefined) => void;
  onCompareClick: () => void;
};
