import { FaqProps } from "@ft/components/common/Faq";
import { SalaryHikePercentageCalculatorBenefits } from "./SalaryHikePercentageCalculatorBenefits";

const SalaryHikePercentageCalculatorFaq: FaqProps[] = [
  {
    question: "What is a salary hike percentage calculator?",
    ans: "A salary hike percentage calculator is a tool that helps you calculate the percentage increase in your salary.",
  },
  {
    question: "How do I use the salary hike percentage calculator?",
    ans: "To use the salary hike percentage calculator, simply enter your current salary and your new salary into the calculator. The calculator will then automatically calculate the percentage increase in your salary.",
  },
  {
    question:
      "What are the benefits of using the salary hike percentage calculator?",
    ans: <SalaryHikePercentageCalculatorBenefits />,
  },
];

export default SalaryHikePercentageCalculatorFaq;
