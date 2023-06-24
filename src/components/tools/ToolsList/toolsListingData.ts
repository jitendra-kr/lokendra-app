import { SCREENS } from "../../../common/enums";
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
  UrlDecode = "UrlDecode",
  URLEncode = "URLEncode",
  UUIDGenerator = "UUIDGenerator",
}

export interface ITools {
  title: string;
  link: SCREENS;
  heading: string;
  metaTitle: string;
  metaDescription: string;
  content: string;
  list: boolean;
  key: ToolKeys;
  toolDescription: string;
  howWorks?: string;
}

export const jsonParser = "json-parser";

export const toolsListData: Array<ITools> = [
  {
    title: "Salary Hike Percentage Calculator",
    link: SCREENS.SALARY_HIKE_PERCENTAGE_CALCULATOR,
    heading: "Online Salary Hike Percentage Calculator",
    metaTitle: seoData.salaryHikePercentageCalculator.title,
    metaDescription: seoData.salaryHikePercentageCalculator.description,
    content:
      "Discover your updated salary and the percentage increase with our salary hike calculator.",
    list: true,
    key: ToolKeys.SalaryHike,
    toolDescription: `Get an accurate salary hike percentage calculation with our Salary Hike Percentage Calculator. Quickly enter your wage information and get a personalized salary hike percentage in minutes. Easily compare your wages against industry standards and ensure you're getting the raise you deserve.
    \nCertainly! An online salary hike percentage calculator is a free online tool that allows you to calculate the percentage increase in your salary after a raise or promotion. This tool is especially useful for employees who are negotiating a salary increase or trying to estimate their future earnings. 
    \n To use the calculator, you simply enter your current salary, the amount of the raise, and any other relevant information, such as the frequency of pay periods. The calculator then calculates the percentage increase in your salary and displays the new salary amount.`,
  },
  {
    title: "String to ASCII",
    link: SCREENS.STRING_TO_ASCII,
    heading: "Convert String to ASCII Easily & Quickly Online",
    content:
      "Just load your text, System will automatically convert it to ASCII codes",
    metaTitle: seoData.stringToAscii.title,
    metaDescription: seoData.stringToAscii.description,
    list: true,
    key: ToolKeys.StringtoASCII,
    toolDescription: `Convert strings to ASCII quickly and accurately with our free online string to ASCII converter. Save time and effort with this easy-to-use tool. No coding skills required - just enter your string and get the result instantly.
    \nOur online ASCII converter is a powerful that allows you to easily convert any string of text into its corresponding ASCII code. Whether you need to convert a single word or an entire paragraph, our tool can handle it all with ease. Simply enter your text into the tool, and it will instantly generate the corresponding ASCII code for each character in your text. 
    \nThis tool is particularly useful for developers, programmers, and anyone who needs to work with ASCII codes on a regular basis. Best of all, our online ASCII converter is completely free to use and requires no downloads or installations. Give it a try today and see how it can simplify your workflow!. 
    `,
  },
  {
    title: "ASCII to String",
    link: SCREENS.ASCII_TO_STRING,
    heading: "Convert ASCII to String Online with Ease & Accuracy",
    content:
      "Just load your ASCII code, System will automatically convert it to text",
    metaTitle: seoData.asciiToString.title,
    metaDescription: seoData.asciiToString.description,
    list: true,
    key: ToolKeys.ASCIItoString,
    toolDescription: `Convert ASCII to string quickly and easily with our free online tool. Simply upload your file, choose the output format, and have your converted text in seconds. Get started now with no signup required and enjoy instant access anytime.
    \nOur online ASCII to string converter is a simple yet powerful tool that allows you to easily convert any ASCII code into its corresponding text string. Whether you're a developer, programmer, or just someone who needs to work with ASCII codes on a regular basis, our tool can help streamline your workflow. Simply enter the ASCII code into the tool, and it will instantly generate the corresponding text string for you. This tool is particularly useful for tasks such as converting binary code to text, or for decoding messages that have been encrypted using ASCII codes. 
    \nBest of all, our online ASCII to string converter is completely free to use and requires no downloads or installations. Give it a try today and see how it can simplify your work!. 
    `,
  },
  {
    title: "JSON to String",
    link: SCREENS.JSON_TO_STRING,
    heading: "Online JSON to String Converter & Stringify Tool",
    content:
      "Just load your JSON, System will automatically convert JSON string or text",
    metaTitle: seoData.jsonToString.title,
    metaDescription: seoData.jsonToString.description,
    list: true,
    key: ToolKeys.JSONtostring,
    toolDescription: `Instantly convert your JSON data to a string or stringify JSON data with our online JSON to String converter. It's fast, easy to use, and accurate. Try it now and see how quickly you can generate a string from your JSON data.
    \nOur online JSON to string converter is a powerful tool that allows you to easily convert any JSON data into its corresponding string format. Whether you're a developer, data analyst, or just someone who needs to work with JSON data on a regular basis, our tool can help streamline your workflow. Simply enter the JSON data into the tool, and it will instantly generate the corresponding string format for you. 
    \nThis tool is particularly useful for tasks such as parsing and formatting JSON data for use in web applications or APIs. Best of all, our online JSON to string converter is completely free to use and requires no downloads or installations. Give it a try today and see how it can simplify your work!. 
    `,
  },
  {
    title: "JSON parser",
    link: SCREENS.JSON_PARSER,
    heading: "Online JSON Formatter, Parser, Beautifier & Validator",
    content:
      "Just load your JSON, and the system will validate, parse, and format it automatically.",
    metaTitle: seoData.jsonParser.title,
    metaDescription: seoData.jsonParser.description,
    list: true,
    key: ToolKeys.JSONParser,
    toolDescription: `Easily parse, beautify and Validate JSON data with our reliable and secure online JSON formatter. Validate JSON effortlessly for seamless integration. Get instant results from large or complex JSON data sets.
      \nJSON parser is available as a free online tool.It offers a simple and user-friendly interface that allows you to enter your JSON code and instantly format it for readability. The tool also validates your JSON code and alerts you to any errors or syntax issues that need to be corrected.
      \nYou can easily copy your formatted or validated JSON code into an email or chat message.`,
  },
  {
    title: "Text to Uppercase",
    link: SCREENS.TEXT_TO_UPPERCASE,
    heading: "Easily Convert Text & Strings to Uppercase Online - Free Tool",
    content:
      "Just load your text, System will automatically convert it to upper case text",
    metaTitle: seoData.toUppercase.title,
    metaDescription: seoData.toUppercase.description,
    list: true,
    key: ToolKeys.UppercaseTextconverter,
    toolDescription: `Instantly convert text or strings to uppercase with Online Converter's easy-to-use tool. Enter your text, and you'll get your results in seconds. Enjoy fast and accurate conversion from lowercase to uppercase
    \nOur online text to uppercase converter is a simple yet powerful tool that allows you to easily convert any text into uppercase format. Whether you're a writer, student, or just someone who needs to convert text to uppercase on a regular basis, our tool can help streamline your workflow. This tool is particularly useful for tasks such as creating titles, headings, or any other text that needs to be in uppercase format. 
    \nBest of all, our online text to uppercase converter is completely free to use and requires no downloads or installations. Give it a try today and see how it can simplify your work!. 
    `,
  },
  {
    title: "Text to Lowercase",
    link: SCREENS.TEXT_TO_LOWERCASE,
    heading: "Easily Convert Text & Strings to Lowercase Online - Free Tool",
    content:
      " Just load your text, System will automatically convert it to lower case text",
    metaTitle: seoData.toLowercase.title,
    metaDescription: seoData.toLowercase.description,
    list: true,
    key: ToolKeys.LowercaseTextconverter,
    toolDescription: `Easily convert text and strings to lowercase using our free online converter. You can quickly and accurately convert any text or string to lowercase with no hassle. Get started now and get your results in no time.
      \nOur online text to lowercase converter is a handy tool that can help you quickly and easily convert any text into lowercase format. Whether you're a student, writer, or just someone who needs to convert text to lowercase on a regular basis, our tool can help streamline your workflow. Simply enter the text into the tool, and it will instantly convert it to lowercase format for you. This tool is particularly useful for tasks such as creating content that requires consistency in formatting, such as blog posts or articles.
      \nBest of all, our online text to lowercase converter is completely free to use and requires no downloads or installations. Give it a try today and see how it can simplify your work. 
      `,
  },
  {
    title: "Word Count",
    link: SCREENS.WORD_COUNTER,
    heading: "Accurate Word and Character Counter Tool - Free to Use",
    content: " Just load your text, System will automatically start counting ",
    metaTitle: seoData.wordCounter.title,
    metaDescription: seoData.wordCounter.description,
    list: true,
    key: ToolKeys.wordCounter,
    toolDescription: `Looking for an easy way to count the number of characters or words in your text? Our free online word & character count tool is the perfect solution. Quickly and accurately calculate character and word counts with this simple and free tool.
    \nOur online word counter is a fast and accurate tool that allows you to count the number of words in your text quickly and easily. Whether you're a writer, editor, or student, our word counter is the perfect solution for all your text counting needs. With a simple and user-friendly interface, you can simply copy and paste your text into the tool, and it will display the total number of words in your text. 
    \nThere's no need to download any software, and the tool is completely free to use. Try our online word counter today and streamline your words, characters and sentences counting process. 
    `,
  },
  {
    title: "Replace Spaces",
    link: SCREENS.REPLACE_SPACES,
    heading: "Replace Spaces Online - Easily Replace Spaces or Any Text ",
    metaTitle: seoData.ReplaceSpaces.title,
    metaDescription: seoData.ReplaceSpaces.description,
    content: `Just load your content or text, By default system will replace all spaces with underscores
      if you need to replace specific character please use below input fields accordingly`,
    list: true,
    key: ToolKeys.ReplaceSpaces,
    toolDescription: `Introducing our versatile and free text replacement tool, designed to simplify the process of modifying your content. With this user-friendly tool, you can effortlessly replace any text with a provided replacement of your choice. Whether you need to update specific keywords, or make extensive changes, our tool offers a seamless solution. Simply enter the text you wish to replace and provide the replacement, and our tool will swiftly perform the necessary modifications. Save time and effort while maintaining the integrity of your content with our powerful text replacement tool. 
    \nReplace Spaces with Underscore is an easy-to-use tool that helps you quickly and accurately replace any text with a provided replacement. It's perfect for replacing spaces with underscores, transforming text into lowercase or uppercase, and more  
    \nAccurately replace any text in your documents. With one click, you can find and replace words, phrases, symbols, and more. Get the perfect result every time - no manual editing required
    `,
  },
  {
    title: "Online string and JSON Tools",
    link: SCREENS.TOOLS,
    heading: "Online string and JSON Tools",
    content:
      " Just load your text, System will automatically convert it to lower case text",
    metaTitle: seoData.toolsList.title,
    metaDescription: seoData.toolsList.description,
    list: false,
    key: ToolKeys.Tools,
    toolDescription: "",
  },
  {
    title: "URL Decode",
    link: SCREENS.URL_DECODE,
    heading: "Url Decode - Decode URL-encoded text",
    content: " Just load your text, System will automatically decode URL",
    metaTitle: seoData.UrlDecode.title,
    metaDescription: seoData.UrlDecode.description,
    list: true,
    key: ToolKeys.UrlDecode,
    toolDescription: `URL decoder offers a safe, secure and reliable URL decoding tool. Decode URLs effortlessly and ensure data integrity with our reliable online URL decoder.
    \nOur decoder is simple to use and guarantees that your data is safe and secure because we never transfer it to a server.`,
  },
  {
    title: "URL Encode",
    link: SCREENS.URL_ENCODE,
    heading: "Url Encode - Encode URL-encoded text",
    content: " Just load your text, System will automatically decode URL",
    metaTitle: seoData.URLEncode.title,
    metaDescription: seoData.URLEncode.description,
    list: true,
    key: ToolKeys.URLEncode,
    toolDescription: `Get your URLs encoded quickly, reliable and safely with our Encode URL tool. We use a secure encryption algorithm to ensure that your data is safe and private. You can easily encode your URLs in no time.
      \nOur encoder is simple to use and guarantees that your data is safe and secure because we never transfer it to a server.
      `,
  },
  {
    title: "UUID generator",
    link: SCREENS.UUID_GENERATOR,
    heading: "UUID generator",
    content: "UUID generator",
    metaTitle: seoData.URLEncode.title,
    metaDescription: seoData.URLEncode.description,
    list: true,
    key: ToolKeys.UUIDGenerator,
    toolDescription: `UUID generator.
      `,
  },
];

toolsListData.forEach((element) => {
  element.toolDescription = `${element.toolDescription}\nThe tool's Share option allows you to create a special URL that you may share with others.`;
});
