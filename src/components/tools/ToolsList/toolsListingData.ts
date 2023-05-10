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
  Tools = "Tools"
}

export interface ITools {
  title: string;
  link: string;
  heading: string;
  metaTitle: string;
  metaDescription: string;
  content: string;
  list: boolean;
  key: ToolKeys
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
    content: "Discover your updated salary and the percentage increase with our salary hike calculator.",
    list: true,
    key: ToolKeys.SalaryHike
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
    key: ToolKeys.StringtoASCII
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
    key: ToolKeys.ASCIItoString

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
    key: ToolKeys.JSONtostring

  },
  {
    title: "JSON parser",
    link: `/tools/${jsonParser}`,
    heading: "JSON Parser Online",
    content: "Just load your JSON, System will automatically parse it",
    metaTitle: seoData.jsonParser.title,
    metaDescription: seoData.jsonParser.description,
    list: true,
    key: ToolKeys.JSONParser

  },
  {
    title: "JSON Unstringify",
    link: `/tools/${jsonUnstringifyPath}`,
    heading: "JSON Unstringify Online",
    content: "Just load your JSON, System will automatically parse it",
    metaTitle: seoData.jsonParser.title,
    metaDescription: seoData.jsonParser.description,
    list: true,
    key: ToolKeys.JSONUnstringify

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
    key: ToolKeys.UppercaseTextconverter

  },
  {
    title: "Text to Lowercase",
    link: "/tools/text-to-lowercase",
    heading: "Lowercase Text converter",
    content:
      " Just load your text, System will automatically convert it to lower case text",
    metaTitle: seoData.toLowercase.title,
    metaDescription: seoData.toLowercase.description,
    list: true,
    key: ToolKeys.LowercaseTextconverter

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
    key: ToolKeys.Tools

  },
];
