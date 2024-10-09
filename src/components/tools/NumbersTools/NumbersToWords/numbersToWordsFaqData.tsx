import { FaqProps } from "@ft/components/common/Faq";
import { WhatAreTheNamesLargeNumbers } from "./WhatAreTheNamesLargeNumbers";

type NumberingSystem = "Indian" | "international";

function countZeros(str: string) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      count++;
    }
  }

  return count;
}

const howManyZero = (
  amount: string,
  system: NumberingSystem,
  amountInNumber: string,
  example: string,
) => {
  return `${amount}, In the ${system} numbering system, is equal to ${amountInNumber}. It has ${countZeros(
    amountInNumber,
  )} zeros as a result. This is how you can see it: ${example}`;
};

const numbersToWordsFaqData: FaqProps[] = [
  {
    question: "What is the Numbers to Words Converter'?",
    ans: "The Numbers to Words Converter' is a free online tool that allows you to convert any numerical value into written words in a matter of seconds.",
  },
  {
    question: "How do I use the Numbers to Words Converter'?",
    ans: "Simply enter the number you wish to convert into the input field and the tool will instantly display the number in word form.",
  },
  {
    question: "Is the Numbers to Words Converter' free to use?",
    ans: "Yes, the Numbers to Words Converter' is completely free to use. There are no hidden charges or subscription fees.",
  },
  {
    question: "Can I use the Numbers to Words Converter' for large numbers?",
    ans: "Absolutely! Our tool can handle any size of number, making it perfect for converting large numbers into words.",
  },
  {
    question: "Why should I use the Numbers to Words Converter'?",
    ans: "The Numbers to Words Converter' is a handy tool for anyone who needs to write out numbers in words, such as for cheque writing, legal documents, or educational purposes.",
  },
  {
    question: "How can I download my number conversion results?",
    ans: "You can download your conversion results directly from our tool. Just click on the 'download' button and your results will be downloaded instantly.",
  },
  {
    question: "How many zero in 1 Lakh (लाख)?",
    ans: howManyZero(
      "One lakh (लाख)",
      "Indian",
      "1,00,000",
      "1 Lakh = 1,00,000",
    ),
  },
  {
    question: "How many zero in 1 Crore (करोड़)?",
    ans: howManyZero(
      "One Crore (करोड़)",
      "Indian",
      "1,00,00,000",
      "1 Crore = 1,00,00,000",
    ),
  },
  {
    question: "How many zero in 1 Arab (अरब)?",
    ans: howManyZero(
      "One Arab (अरब)",
      "Indian",
      "1,000,000,000",
      "1 Arab = 1,000,000,000",
    ),
  },
  {
    question: "How many zero in 1 Kharab (खरब)?",
    ans: howManyZero(
      "One Kharab (खरब)",
      "Indian",
      "1,00,00,00,00,000",
      "1 Kharab = 1,00,00,00,00,000",
    ),
  },
  {
    question: "How many zero in Million?",
    ans: howManyZero(
      "1 Million",
      "international",
      "1,000,000",
      "1 Million = 1,000,000",
    ),
  },
  {
    question: "How many zero in Billion?",
    ans: howManyZero(
      "1 Billion",
      "international",
      "1,000,000,000",
      "1 Billion = 1,000,000,000",
    ),
  },
  {
    question: "How many zero in Trillion?",
    ans: howManyZero(
      "1 Trillion",
      "international",
      "1,000,000,000,000",
      "1 Billion = 1,000,000,000,000",
    ),
  },
  {
    question: "What are the names of large numbers and their values?",
    ans: (
      <>
        <WhatAreTheNamesLargeNumbers />
      </>
    ),
  },
  // {
  //   question: "how this tool transforms numbers into words?",
  //   ans: (
  //     <>
  //       <HowThisToolIsConvertingNumberToWords />
  //     </>
  //   ),
  // },
];
export default numbersToWordsFaqData;
