type SalaryHikePercentageCalculatorTitleProps = {
  title: string;
};

export function SalaryHikePercentageCalculatorTitle({
  title,
}: SalaryHikePercentageCalculatorTitleProps) {
  return (
    <p
      style={{
        fontSize: "20px",
        marginTop: "50px",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      <b>Calculate {title}</b>
    </p>
  );
}
