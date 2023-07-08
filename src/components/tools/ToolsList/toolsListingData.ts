import { SCREENS } from "../../../common/enums";
import { SeoTags } from "../../../seo/seo.interface";
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
  HOME = "HOME",
  JSON_DIFF = "JSON_DIFF",
  JSON_MINIFIER = "JSON_MINIFIER",
  REMOVE_EXTRA_SPACES = "REMOVE_EXTRA_SPACES",
  REMOVE_SPACES = "REMOVE_SPACES",
}

export interface ITools extends SeoTags {
  title: string;
  link: SCREENS;
  heading: string;
  content: string;
  list: boolean;
  key: ToolKeys;
  toolDescription: string;
}

export const jsonParser = "json-parser";

export const toolsListData: Array<ITools> = [
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
    toolDescription: `
    With our cutting-edge ASCII to String converter, you can easily convert your ASCII-encoded data into readable strings. Our tool is fast, accurate, and incredibly user-friendly, making it the perfect solution for anyone who needs to process large amounts of data quickly.
    Convert ASCII to string quickly and easily with our free online tool. Simply upload your file, choose the output format, and have your converted text in seconds. Get started now with no signup required and enjoy instant access anytime.
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
    title: "JSON Parser",
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
    title: "JSON Minifier",
    link: SCREENS.JSON_MINIFIER,
    heading: "Online JSON Minifier",
    content:
      "Simply load your JSON, and the system will automatically minify it",
    metaTitle: seoData.jsonMinifier.title,
    metaDescription: seoData.jsonMinifier.description,
    list: true,
    key: ToolKeys.JSON_MINIFIER,
    toolDescription: `Are you tired of dealing with large, unwieldy JSON files that slow down your website? Do you wish there was an easy and secure way to compress and optimize your JSON data for better performance and faster load times? Look no further than our JSON Minify/Compressor tool!
    \nWith our tool, you can effortlessly minify and compress your JSON data, reducing its size by up to 80% while still maintaining its original quality and data structure. Our tool uses advanced compression algorithms to ensure that your data remains secure throughout the process, protecting your sensitive information from prying eyes and data breaches.
    \nBut that's not all - our JSON Minify/Compressor tool offers a range of benefits for your website or application, including:
    \n1. Improved Performance: By reducing the size of your JSON data, our tool can help improve your website or application's overall performance and load times, resulting in a better user experience for your visitors.
    \n2. Cost Savings: Smaller file sizes allow you to cut bandwidth usage and server storage expenses, which over time will save you a lot of money.    .
    \n3. Faster Data Transfer: With compressed JSON data, you can transfer data more quickly, allowing for faster data transfers and quicker communication between the server and client.
    \n4. Easy to use: Our tool is easy to use and can be quickly minify JSON data, Just after typing data tool starts compressing and minifying your JSON data right away.
    \nSo why wait? Try our JSON Minify/Compressor tool today and see the benefits for yourself. Say goodbye to slow load times and hello to optimized JSON data with just a few clicks!
    `,
  },
  {
    title: "JSON Diff",
    link: SCREENS.JSON_DIFF,
    heading: "JSON Diff",
    content:
      "Just load your JSON data, and the system will compare and highlight JSON data differences automatically.",
    metaTitle: seoData.jsonDiff.title,
    metaDescription: seoData.jsonDiff.description,
    list: true,
    key: ToolKeys.JSON_DIFF,
    toolDescription: `JSON Diff is a secure and user-friendly tool designed to compare two sets of JSON data and highlight the differences with ease. This tool streamlines the data comparison process, making it effortless for developers and users to identify changes in their JSON objects. 
    With JSON Diff, you can quickly and accurately pinpoint new, deleted, and modified properties in your JSON files. Whether you are working with large JSON datasets or smaller files, this tool offers advanced features such as formatting options, and editing functionalities to simplify the comparison process. JSON Diff ensures the security of your data by handling it with utmost care and providing a secure environment for performing comparisons. With its intuitive interface and comprehensive set of functionalities, JSON Diff is the go-to tool for developers and individuals looking to simplify the process of comparing and analyzing their JSON data efficiently and securely.`,
  },
  {
    title: "Text to Uppercase",
    link: SCREENS.TEXT_TO_UPPERCASE,
    heading: "Easily Convert Text & Strings to Uppercase Online",
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
    heading: "Easily Convert Text & Strings to Lowercase Online",
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
    title: "Word Counter",
    link: SCREENS.WORD_COUNTER,
    heading: "Accurate Word and Character Counter Tool",
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
    title: "Remove Extra Spaces",
    link: SCREENS.REMOVE_EXTRA_SPACES,
    heading: "Easily Remove Extra Spaces",
    metaTitle: seoData.RemoveExtraSpaces.title,
    metaDescription: seoData.RemoveExtraSpaces.description,
    content: `Just load your content, System will remove all extra spaces automatically `,

    list: true,
    key: ToolKeys.REMOVE_EXTRA_SPACES,
    toolDescription: `Introducing our game-changing solution for removing extra spaces from your content - it's time to experience cleaner and more professional-looking text! Say goodbye to the frustration of uneven spacing and hello to streamlined, polished content with our innovative Remove Extra Spaces tool.
    \nWhether you're a writer, editor, student, or professional, our tool is designed to make your life easier and enhance your work. Gone are the days of laboriously scanning through your text to manually fix those pesky extra spaces. With just a few clicks, our tool intelligently detects and removes all excessive spaces, transforming your content into a polished masterpiece.
    \nHere's why our Remove Extra Spaces tool is an absolute must-have:
    \n1. Enhanced Readability: Extra spaces can disrupt the flow and readability of your content. By eliminating those unnecessary spaces, our tool ensures that your text is easy on the eyes and a joy to read. Impress your readers with clean, well-formatted content that holds their attention from start to finish.
    \n2. Professional Appearance: Whether it's an important business presentation, a school assignment, or a captivating blog post, the way your content looks matters. Our tool brings professionalism to the forefront by ensuring consistent spacing throughout your text. Stand out from the crowd with content that exudes quality and attention to detail.
    \n3. Time-saving Efficiency: We understand that time is precious, and manual space removal is a tedious, time-consuming task. Our Remove Extra Spaces tool is lightning-fast, allowing you to quickly process and refine your content without breaking a sweat. Spend less time on formatting and more time on what truly matters - creating exceptional content.
    \n4. Error Prevention: Extra spaces can often lead to unintended formatting errors or distortions in your content. Our tool eradicates these potential pitfalls, giving you peace of mind that your content will be error-free, professional, and ready to impress your audience.
    \n5. Seamless Integration: Our Remove Extra Spaces tool seamlessly integrates into your existing workflow. With an intuitive interface and straightforward instructions, it's incredibly user-friendly, even for those with limited technical skills. Simply copy and paste your text, click a button, and watch as our tool works its magic.
    \nDon't let extra spaces diminish the impact of your content. Harness the power of our Remove Extra Spaces tool and unlock a new level of professionalism and efficiency. Try it today and experience the transformation for yourself. Your content deserves to shine with precision and perfection!`,
  },
  {
    title: "Remove Spaces",
    link: SCREENS.REMOVE_SPACES,
    heading: "Easily Remove Spaces",
    metaTitle: seoData.RemoveSpaces.title,
    metaDescription: seoData.RemoveSpaces.description,
    content: `Just load your content, System will remove all spaces automatically `,
    list: true,
    key: ToolKeys.REMOVE_SPACES,
    toolDescription: `Tired of dealing with messy data caused by unnecessary spaces? Our simple, yet powerful Remove Spaces tool is the solution you've been searching for. With just a few clicks, you can eliminate extra spaces and optimize your text for improved readability, easier analysis and sharing.
    Our tool is designed to work seamlessly with text of any length, from small snippets to large datasets. It not only removes spaces, but also eradicates other common whitespace characters, such as tabs or newlines, to leave you with clean and organized text that's easy to use and understand.
    Here are some of the key benefits of our Remove Spaces tool:
    \n1. Saves Your Time: No more manual editing or complex tools to remove spaces from your text! Our simple solution does the job quickly and easily, allowing you to focus on other important tasks.
    \n2. Increases Accuracy: Extra spaces and whitespace characters can be a serious distraction, making it harder to spot anomalies or irregularities in your data. By ensuring that your text is clean and properly formatted, our tool helps improve accuracy, reduce errors, and simplify analysis.
    \n3. Improves Readability: Optimize your content for clear communication and easy comprehension. Remove Spaces can be especially useful as a preparation step before sending or sharing text, such as emails, reports, or articles.
    \n4. Enhances SEO: Unnecessary spaces in your webpages or blog posts can hurt your SEO efforts by impacting keyword density and readability. By using our Remove Spaces tool, you can ensure that your website's content is properly formatted for optimal SEO rankings.
    \nOur Remove Spaces tool is available online and is free to use. Don't let inefficient data harm your productivity or reputation - try our Remove Spaces tool today and experience the benefits for yourself!
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
    title: "UUID Generator",
    link: SCREENS.UUID_GENERATOR,
    heading: "UUID Generator - v4",
    content:
      "Experience the Benefits of Our Fast and Secure UUID Generator.\nEliminate the Risk of Duplicate Identifiers with Our Random UUID Generator",
    metaTitle: seoData.UUIDGenerator.title,
    metaDescription: seoData.UUIDGenerator.description,
    list: true,
    key: ToolKeys.UUIDGenerator,
    toolDescription: `A Version 4 UUID is a randomly generated universally unique identification number. This website used a secure random number generator to create the Version 4 UUIDs.
    \nIntroducing our fast and reliable UUID Generator using version 4 - the ultimate tool for generating unique and universal identifiers for your databases and systems. With our tool, you can easily generate random and secure UUIDs in a matter of seconds, ensuring that your data is always protected. 
    \nSay goodbye to the hassle of creating unique identifiers manually and let our tool do the work for you. Our UUID Generator is user-friendly and easy to use, making it perfect for developers and non-technical users alike. Try it now and experience the benefits of having a fast and reliable tool for generating unique and secure identifiers.
      `,
  },
  {
    title: "",
    link: SCREENS.HOME,
    heading: "",
    content: "",
    metaTitle: seoData.homePage.title,
    metaDescription: seoData.homePage.description,
    list: false,
    key: ToolKeys.HOME,
    toolDescription: `Choose our online tools for secure and reliable solutions. 
    Our tools are designed to protect your data while providing you with the efficiency and convenience you need. Whether it's JSON Parser, ASCII to string, or UUID generator, our tools have got you covered. Try them out today and experience peace of mind knowing your information is secure.`,
  },
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
];

toolsListData.forEach((element) => {
  element.toolDescription = `${element.toolDescription}\nThe tool's Share option allows you to create a special URL that you may share with others.`;
});
