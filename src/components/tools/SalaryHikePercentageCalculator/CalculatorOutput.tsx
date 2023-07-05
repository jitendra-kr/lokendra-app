type CalculatorOutputProps = {
  text: string;
  value: number | string;
};

export const CalculatorOutput = ({ text, value }: CalculatorOutputProps) => {
  return (
    <b style={{ textAlign: "center", color: "brown" }}>
      {text}: {value}
    </b>
  );
};
