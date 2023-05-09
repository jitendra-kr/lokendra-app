type CalculatorOutputProps = {
  text: string;
  value: number;
};

export const CalculatorOutput = ({ text, value }: CalculatorOutputProps) => {
  return <b style={{ textAlign: "center" }}>{text}: {value}</b>;
};
