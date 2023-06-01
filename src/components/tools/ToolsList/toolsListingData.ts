import seoData from "../../../seo/tools/tools.json";

export enum ToolKeys {
  SalaryHike = "SalaryHike",
  StringtoASCII = "StringtoASCII",
  ASCIItoString = "ASCIItoString",
  JSONtostring = "JSONtostring",
  JSONParser = "JSONParser",
  JSONUnstringify = "JSONUnstringify",
  UppercaseTextconverter = "UppercaseTextconverter",
  LowercaseTextconverter = "LowercaseTextconverter",
  wordCounter = "wordCounter",
  Tools = "Tools",
  ReplaceSpaces = "ReplaceSpaces",
}

export interface ITools {
  title: string;
  link: string;
  heading: string;
  metaTitle: string;
  metaDescription: string;
  content: string;
  list: boolean;
  key: ToolKeys;
  toolDescription: string;
}

export const jsonUnstringifyPath = "json-unstringify";
export const jsonParser = "json-parser";

export const toolsListData: Array<ITools> = [
  {
    title: "Salary Hike Percentage Calculator",
    link: "/tools/salary-hike-percentage-calculator",
    heading: " Salary Hike Percentage Calculator",
    metaTitle: seoData.salaryHikePercentageCalculator.title,
    metaDescription: seoData.salaryHikePercentageCalculator.description,
    content:
      "Discover your updated salary and the percentage increase with our salary hike calculator.",
    list: true,
    key: ToolKeys.SalaryHike,
    toolDescription: `
    Certainly! An online salary hike percentage calculator is a tool that allows you to calculate the percentage increase in your salary after a raise or promotion. This tool is especially useful for employees who are negotiating a salary increase or trying to estimate their future earnings.

    To use the calculator, you simply enter your current salary, the amount of the raise, and any other relevant information, such as the frequency of pay periods. The calculator then calculates the percentage increase in your salary and displays the new salary amount.

    Overall, an online salary hike percentage calculator can be a valuable tool for employees who want to better understand their earning potential and negotiate fair compensation for their work. Whether you're exploring a new job opportunity or negotiating a raise with your current employer, a salary calculator can help you make informed decisions about your career and financial future.
`,
  },
  {
    title: "String to ASCII",
    link: "/tools/string-to-ascii",
    heading: " String to ASCII converter",
    content:
      "Just load your text, System will automatically convert it to ASCII codes",
    metaTitle: seoData.stringToAscii.title,
    metaDescription: seoData.stringToAscii.description,
    list: true,
    key: ToolKeys.StringtoASCII,
    toolDescription: "",
  },
  {
    title: "ASCII to String",
    link: "/tools/ascii-to-string",
    heading: " ASCII to String converter",
    content:
      "Just load your ASCII code, System will automatically convert it to text",
    metaTitle: seoData.asciiToString.title,
    metaDescription: seoData.asciiToString.description,
    list: true,
    key: ToolKeys.ASCIItoString,
    toolDescription: "",
  },
  {
    title: "JSON to String",
    link: "/tools/json-to-string",
    heading: "  JSON to string converter",
    content:
      "Just load your JSON, System will automatically it to JSON string or text",
    metaTitle: seoData.jsonToString.title,
    metaDescription: seoData.jsonToString.description,
    list: true,
    key: ToolKeys.JSONtostring,
    toolDescription: "",
  },
  {
    title: "JSON parser",
    link: `/tools/${jsonParser}`,
    heading: "JSON Parser Online",
    content: "Just load your JSON, System will automatically parse it",
    metaTitle: seoData.jsonParser.title,
    metaDescription: seoData.jsonParser.description,
    list: true,
    key: ToolKeys.JSONParser,
    toolDescription: `This utility is available as a free online tool. It offers a simple and user-friendly interface that allows you to enter your JSON code and instantly format it for readability. The tool also validates your JSON code and alerts you to any errors or syntax issues that need to be corrected. 
      
      \n One of the most useful features of this tool is its ability to share your JSON output. You can easily copy and paste your formatted and validated JSON code into an email or chat message, or you can use the tool's Share feature to generate a unique URL that you can send to others.`,
  },
  {
    title: "JSON Unstringify",
    link: `/tools/${jsonUnstringifyPath}`,
    heading: "JSON Unstringify Online",
    content: "Just load your JSON, System will automatically parse it",
    metaTitle: seoData.jsonParser.title,
    metaDescription: seoData.jsonParser.description,
    list: true,
    key: ToolKeys.JSONUnstringify,
    toolDescription: "",
  },
  {
    title: "Text to Uppercase",
    link: "/tools/text-to-uppercase",
    heading: "Uppercase Text converter",
    content:
      "Just load your text, System will automatically convert it to upper case text",
    metaTitle: seoData.toUppercase.title,
    metaDescription: seoData.toUppercase.description,
    list: true,
    key: ToolKeys.UppercaseTextconverter,
    toolDescription: "",
  },
  {
    title: "Text to Lowercase",
    link: "/tools/text-to-lowercase",
    heading: "Lowercase Text converter online",
    content:
      " Just load your text, System will automatically convert it to lower case text",
    metaTitle: seoData.toLowercase.title,
    metaDescription: seoData.toLowercase.description,
    list: true,
    key: ToolKeys.LowercaseTextconverter,
    toolDescription: "",
  },
  {
    title: "Word Count",
    link: "/tools/word-counter",
    heading: "Word and Character Counter Tool",
    content: " Just load your text, System will automatically start counting ",
    metaTitle: seoData.wordCounter.title,
    metaDescription: seoData.wordCounter.description,
    list: true,
    key: ToolKeys.wordCounter,
    toolDescription: "",
  },
  {
    title: "Replace Spaces",
    link: "/tools/replace-spaces",
    heading: "Replace Spaces Online",
    metaTitle: seoData.ReplaceSpaces.title,
    metaDescription: seoData.ReplaceSpaces.description,
    content: `Just load your content or text, By default system will replace all spaces with underscores
      if you need to replace specific character please use below input fields accordingly`,
    list: true,
    key: ToolKeys.ReplaceSpaces,
    toolDescription:
      "Introducing our versatile text replacement tool, designed to simplify the process of modifying your content. With this user-friendly tool, you can effortlessly replace any text with a provided replacement of your choice. Whether you need to update specific keywords, or make extensive changes, our tool offers a seamless solution. Simply enter the text you wish to replace and provide the replacement, and our tool will swiftly perform the necessary modifications. Save time and effort while maintaining the integrity of your content with our powerful text replacement tool.",
  },
  {
    title: "Tools",
    link: "/tools",
    heading: "Tools",
    content:
      " Just load your text, System will automatically convert it to lower case text",
    metaTitle: seoData.toolsList.title,
    metaDescription: seoData.toolsList.description,
    list: false,
    key: ToolKeys.Tools,
    toolDescription: "",
  },
];
