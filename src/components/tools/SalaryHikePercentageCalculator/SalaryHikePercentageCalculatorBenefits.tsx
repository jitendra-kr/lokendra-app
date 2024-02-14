export function SalaryHikePercentageCalculatorBenefits() {
  const data = [
    "Track your salary progress over time",
    "See how much your salary has increased (or decreased).",
    "Measure your earnings against the standard income in your field.",
    "Negotiate a higher salary with your employer.",
  ];

  return (
    <>
      <p>
        There are many benefits to using the salary hike percentage calculator.
        For example, it can help you:
      </p>
      <ul>
        {data.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </>
  );
}
