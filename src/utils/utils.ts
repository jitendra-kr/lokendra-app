import { messageSuccess } from "./antd";

const getLimitedText = (text: string, limit: number) => {
  limit = limit ? limit : 63;
  if (text.length > limit) {
    return text.substring(0, limit) + " ... ";
  }
  return text;
};

export const inputFieldsLimit = {
  firstName: 15,
  lastName: 15,
};

export const dateFormat = (date: Date) => {
  if (date) {
    const newDate = new Date(date);
    const month = newDate.toLocaleString("default", { month: "long" });
    return `${month} ${newDate.getDate()}, ${newDate.getFullYear()}`;
  }
};

export const getDefaultHeadValues = () => {
  return {
    url: window.location.href,
  };
};

export const copyToClipboard = (content: any, title?: string): void => {
  try {
    navigator.clipboard.writeText(content).then(() => {
      messageSuccess({
        content: title ? title : "Copied to clipboard",
        key: "Copiedtoclipboard",
        duration: 4,
      });
    });
  } catch (e) {
    alert("failed to copy");
  }
};

export function convertNumberToWords(number: number): string {
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (number === 0) {
    return "zero";
  } else if (number < 20) {
    return ones[number];
  } else if (number < 100) {
    return tens[Math.floor(number / 10)] + " " + ones[number % 10];
  } else if (number < 1000) {
    return (
      ones[Math.floor(number / 100)] +
      " hundred " +
      convertNumberToWords(number % 100)
    );
  } else if (number < 1000000) {
    return (
      convertNumberToWords(Math.floor(number / 1000)) +
      " thousand " +
      convertNumberToWords(number % 1000)
    );
  } else if (number < 1000000000) {
    return (
      convertNumberToWords(Math.floor(number / 1000000)) +
      " million " +
      convertNumberToWords(number % 1000000)
    );
  } else if (number < 1000000000000) {
    return (
      convertNumberToWords(Math.floor(number / 1000000000)) +
      " billion " +
      convertNumberToWords(number % 1000000000)
    );
  } else if (number < 1000000000000000) {
    return (
      convertNumberToWords(Math.floor(number / 1000000000000)) +
      " trillion " +
      convertNumberToWords(number % 1000000000000)
    );
  } else {
    return "Number is too large to convert.";
  }
}

export function capitalizeEveryWord(str: string) {
  return str.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
}
