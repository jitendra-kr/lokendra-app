type SalaryHikePercentageCalculatorTitleProps = {
    title: string
}

export function SalaryHikePercentageCalculatorTitle({title}: SalaryHikePercentageCalculatorTitleProps) {
  return  <b style={{fontSize: "20px"}} >{title}</b> ;
}
