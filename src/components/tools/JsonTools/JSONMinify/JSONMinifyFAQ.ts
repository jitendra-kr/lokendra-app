import { FaqProps } from "@ft/components/common/Faq";

const jsonMinifierFaqData: FaqProps[] = [
  {
    question: "What is a JSON Minifier, and how does it work?",
    ans: "A JSON Minifier, also known as a JSON Compressor, is a tool that removes unnecessary characters from JSON data, such as spaces and line breaks. This process reduces the file size while keeping the data structure intact, making it faster to load and transfer.",
  },
  {
    question: "Why should I use a JSON compressor?",
    ans: "Using a JSON compressor is beneficial for optimizing web performance. Smaller JSON files reduce bandwidth usage, improve load times, and can enhance user experience on websites and applications by loading data more quickly.",
  },
  {
    question: "Is it safe to minify JSON? Will I lose any data?",
    ans: "Yes, it is safe to minify JSON. Minification only removes spaces, line breaks, and unnecessary formatting—it does not alter the actual data or values within the JSON file.",
  },
  {
    question: "How can a JSON Compressor help improve website performance?",
    ans: "A JSON Compressor reduces the size of JSON files, which leads to quicker data transfer and lower bandwidth usage. This helps improve website performance, especially for users on slower connections.",
  },
  {
    question: "Can I use a it for large JSON files?",
    ans: "Yes, It can be used for large JSON files.",
  },
  {
    question: "Is this tool free to minify JSON?",
    ans: "Yes.",
  },
  {
    question:
      "What is the difference between JSON Minification and JSON Beautification?",
    ans: "JSON Minification removes all extra spaces, line breaks, and formatting to reduce file size. JSON Beautification, on the other hand, formats the JSON to make it more readable with indentation and spacing, typically for developers.",
  },
  {
    question: "Can I decompress or beautify minified JSON?",
    ans: "Yes.",
  },
];

export default jsonMinifierFaqData;
