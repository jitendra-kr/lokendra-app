type SalaryHikePercentageCalculatorTitleProps = {
  title: string;
};

export function SalaryHikePercentageCalculatorTitle({
  title,
}: SalaryHikePercentageCalculatorTitleProps) {
  return (
    <h2
      style={{
        fontSize: "22px",
        marginTop: "50px",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      <b>Calculate {title}</b>
    </h2>
  );
}
