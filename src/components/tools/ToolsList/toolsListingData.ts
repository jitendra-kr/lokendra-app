import { SCREENS } from "@ft/common/enums/screens";
import { FaqProps } from "@ft/components/common/Faq";
import { SeoTags } from "../../../seo/seo.interface";
import seoData from "../../../seo/tools/tools.json";
import asciiTpStringFaqData from "../AsciiConversion/AsciiToString/asciiToStringFaqData";
import stringToAsciiFaqData from "../AsciiConversion/StringToAscii/stringToAsciiFaqData";
import jsonParserFaqData from "../JsonParser/jsonParserFaqData";
import jsonValidatorFaqData from "../JsonParser/jsonValidatorFaqData";
import jsonMinifierFaqData from "../JsonTools/JSONMinify/JSONMinifyFAQ";
import numbersToWordsFaqData from "../NumbersTools/NumbersToWords/numbersToWordsFaqData";
import SalaryHikePercentageCalculatorFaq from "../SalaryHikePercentageCalculator/SalaryHikePercentageCalculatorFaq";
import RandomStringGeneratorFaq from "../TextTools/RandomStringGenerator/randomStringGeneratorFaqData";
import ToLowercaseFaqData from "../ToLowercase/ToLowercaseFaqData";
import textToUppercaseFaqData from "../ToUppercase/ToUppercaseFaqData";
import URLDecoderFaqData from "../URLDecode/URLDecoderFaqData";
import UUIDGeneratorFaqData from "../UUIDGenerator/UUIDGeneratorFaqData";
import XmlFormatterFaqData from "../XmlTools/XmlFormatter/XmlFormatterFaqData";
import { ToolKeys } from "./ToolKeys";

export type ITools = SeoTags & {
  title: string;
  link: SCREENS;
  heading: string;
  content: string;
  list: boolean;
  key: ToolKeys;
  toolDescription: string;
  keyFeatures?: string[];
  faq: FaqProps[];
};

export const toolsListData: Array<ITools> = [
  {
    title: "Text to ASCII",
    faq: stringToAsciiFaqData,
    link: SCREENS.STRING_TO_ASCII,
    heading: "Convert Text to ASCII Online",
    content: "",
    metaTitle: seoData.stringToAscii.title,
    metaDescription: seoData.stringToAscii.description,
    list: true,
    key: ToolKeys.StringToASCII,
    toolDescription: `Are you tired of spending hours converting text to ASCII codes by hand? Our tool is the perfect solution for creating ASCII art from your text. With a user-friendly interface designed for ASCII conversion, you can easily enter and translate your content without any hassle. Quickly and accurately convert text using our free online tool, saving you both time and effort. Our online ASCII converter is a powerful resource that allows you to transform any string of text into its corresponding ASCII code effortlessly. Whether you need to convert a single word, a paragraph, or an entire document, it can handle it all with ease. Just enter your text or upload a text file, and the tool will instantly generate the ASCII code for each character. This tool is invaluable for anyone who needs to work with ASCII codes. Best of all, our online ASCII converter is completely free to use and requires no downloads or installations.`,
    keyFeatures: [
      "Create impressive ASCII art in just seconds.",
      "No coding experience is needed—simply input your text and receive the output right away.",
      "Effortlessly transform any string into its ASCII codes in real time.",
      "Our intuitive and easy-to-navigate interface ensures a seamless experience for users of all technical levels",
      "Access the online tool seamlessly from your desktop, laptop, tablet, or smartphone.",
      " The tool guarantees accurate results, ensuring your ASCII codes are generated correctly and your data remains consistent.",
      "You can trust that your information is handled with the highest level of care. ",
      "Download the converted ASCII codes for offline use or additional processing, and easily save the results as a text file for quick access and sharing.",
    ],
  },
  {
    title: "ASCII to Text",
    faq: asciiTpStringFaqData,
    link: SCREENS.ASCII_TO_STRING,
    heading: "Convert ASCII to Text: Online with Ease and Accuracy",
    content: "",
    metaTitle: seoData.asciiToString.title,
    metaDescription: seoData.asciiToString.description,
    list: true,
    key: ToolKeys.ASCIItoString,
    toolDescription: `
With our advanced ASCII code converter, you can easily turn your ASCII-encoded data into readable text. This tool is designed to be efficient, accurate, and user-friendly, perfect for anyone needing to process large amounts of data quickly.
One of the key features of our ASCII codes to String converter is its speed. We recognize how important time is, especially when handling large volumes of data. Our converter is optimized for quick processing, so you can convert your ASCII-encoded data into readable strings without any unnecessary delays.
Accuracy is another vital aspect of our converter. We have integrated advanced algorithms and technologies to ensure that the conversion process is precise. You can rely on the resulting strings to accurately reflect the original ASCII-encoded data. This level of accuracy is essential, especially in situations where data integrity is critical.
The user-friendly design of our converter distinguishes it from others available. We have created an intuitive and straightforward interface, making it accessible for users of all experience levels. Whether you are an expert or a beginner, you can easily navigate our converter. The clear instructions and prompts throughout the conversion process further improve the user experience, allowing you to achieve the results you want with minimal effort.`,
    keyFeatures: [
      "Easy ASCII Decoding: Transform ASCII codes back into readable text quickly and effortlessly. Our technology handles the decoding for you, eliminating the need for manual work.",
      "User-Friendly Interface: Enjoy a seamless experience with our intuitive interface, designed for users of all skill levels. Simply input your ASCII codes to instantly receive the corresponding text.",
      "Reliable Accuracy: Rest assured that your ASCII codes will be translated accurately and precisely into their original text format.",
      "Safe and Secure: We prioritize the protection of your data. Our platform employs robust security measures to ensure your input and output are safeguarded, providing a private and secure ASCII conversion experience.",
      "Speed and Efficiency: Benefit from our tool's rapid decoding capabilities for quick results.",
      "Download Converted Output: Take control of your data by downloading the decoded text as a file. Save your results and access them offline whenever you need.",
    ],
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
    faq: [],
    toolDescription: `Are you looking for a fast, easy-to-use, and accurate tool that can convert JSON object to strings? Look no further! Our cutting-edge converter is the perfect solution for developers and data analysts who need to process JSON data quickly and efficiently.
    \nOne of the standout features of our converter is its speed. We understand the importance of time, especially in the fast-paced world of software development and data analysis. Our tool is optimized to convert JSON to a string in the blink of an eye, allowing you to save precious minutes and focus on other critical tasks.
    \nAccuracy is another key aspect of our tool. We have implemented advanced algorithms and validation techniques to ensure that the conversion process is highly precise. Before converting, our tool validates the JSON data, ensuring that it is well-formed and error-free. This level of accuracy is crucial, particularly when working with large datasets or when data integrity is of the utmost importance.
    \nIt is designed with user-friendliness in mind. We understand that not everyone has extensive programming knowledge, which is why we have created an intuitive and straightforward interface. Whether you are a seasoned developer or a beginner, you can navigate our tool with ease. The clear instructions and prompts provided throughout the conversion process further enhance the user experience, ensuring that you can achieve the desired results effortlessly.
    \nFurthermore, our converter is constantly updated to ensure compatibility with the latest JSON standards and industry practices. We strive to stay ahead of the curve and provide our users with a reliable and up-to-date solution. This commitment to continuous improvement sets us apart as a trusted provider of JSON to String conversion tools.
    \nIn conclusion, our it is a fast, easy-to-use, and accurate tool that is indispensable for developers and data analysts. With its efficient processing capabilities, precise conversion algorithms, and user-friendly interface, it simplifies the process of converting JSON data to a string. Experience the convenience and reliability of our converter today and unlock the full potential of your JSON data.`,
  },
  {
    title: "JSON Formatter",
    faq: jsonParserFaqData,
    link: SCREENS.JSON_PARSER,
    heading: "Online JSON Formatter",
    content: "",
    metaTitle: seoData.jsonParser.title,
    metaDescription: seoData.jsonParser.description,
    list: true,
    key: ToolKeys.JSONParser,
    toolDescription: `Are you in need of a secure JSON tool to beautify JSON that ensures the integrity and safety of your data? 
    \nLook no further! Our advanced JSON data formatter is designed to provide a fast, easy-to-use, and accurate solution for developers and data analysts who value data security and precision.    
    \nOne of the key features of our JSON validator is its robust validation process. Before formatting, our tool thoroughly validates the provided JSON data, ensuring that it is well-formed and free of errors. This validation step is crucial, as it guarantees that the resulting formatted JSON will be accurate and reliable.     
    \nIn addition to its validation capabilities, it is incredibly fast. We understand that time is of the essence, especially when dealing with large datasets. Our tool is optimized to process JSON formatting swiftly, allowing you to save valuable time and increase productivity.  
    \nUser-friendliness is another standout aspect of our JSON parser. We have designed the interface to be intuitive and straightforward, catering to users of all skill levels. Whether you are a seasoned developer or a beginner, you can easily navigate our tool with ease. Following beautifying, you may easily download a json file..
    \nIt goes beyond basic formatting, offering additional features to enhance the overall functionality. For instance, if the provided JSON has minor issues like trailing commas, wrap key and values to double quotes, fix incorrect quotes, or unnecessary comments, our tool can automatically repair them. This feature saves you the hassle of manually fixing these small errors, allowing you to focus on more critical aspects of your work.     
    \nMoreover, our JSON tool prioritizes data security. We understand the importance of protecting sensitive information, which is why our tool operates in a secure environment, giving you peace of mind to know that your data is safe throughout the formatting process without sending to external servers.      
    `,

    keyFeatures: [
      "Easy JSON Formatting: Easily format your JSON data so that it is well-organized and easy to read and understand, improving code comprehension and data analysis.",
      "User-Friendly Interface: Our tool has a user-friendly interface that allows users of all technical levels to access JSON formatting. You can instantly get the formatted version by entering your JSON data.",
      "Safe and Secure: The security of your JSON data, which your aiming to formar is our primary concern. To protect your input and outcomes, the JSON parser uses powerful security techniques, resulting in a risk-free formatting procedure.",
      `Download Formatted Output: Take advantage of the choice to obtain the formatted JSON as a downloadable file by clicking Download button`,
      "Support for Repair JSON: In addition to regular formatting, our tool has a special Repair JSON capability. It instantly finds and fixes syntax mistakes in JSON objects to ensure accurate and error-free output.",
    ],
  },
  {
    title: "JSON Validator",
    link: SCREENS.JSON_VALIDATOR,
    heading: "Online JSON Validator",
    content: "",
    metaTitle: seoData.JSON_VALIDATOR.title,
    metaDescription: seoData.JSON_VALIDATOR.description,
    list: true,
    key: ToolKeys.JSON_VALIDATOR,
    toolDescription: "",
    keyFeatures: [],
    faq: jsonValidatorFaqData,
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
    toolDescription: `Are you tired of dealing with large, unwieldy JSON files that slow down your website? Do you wish there was an easy and secure way to compress and optimize your JSON data for better performance and faster load times? Look no further than our JSON Minifier!
    \nWith our tool, you can effortlessly minify and compress your JSON data, reducing its size by up to 80% while still maintaining its original quality and data structure. It uses advanced compression algorithms to ensure that your data remains secure throughout the process, protecting your sensitive information from prying eyes and data breaches.
    `,
    keyFeatures: [
      "Effortless JSON Minification: Minify your JSON data quickly and easily, decreasing its size and optimising its structure for improve performance and data transmission efficiency.",
      "User-Friendly Interface: Our tool features an easy-to-use interface that makes JSON minification accessible to users of all technical backgrounds. Simply enter your JSON data and it will be minified in no time.",
      "Safe and Secure: Your data security is our top priority. The JSON Minify Tool applies reliable security techniques to protect your input and results, assuring a safe and secure minification procedure.",
      "Faster Data Transfer: With compressed JSON data, you can transfer data more quickly, allowing for faster data transfers and quicker communication between the server and client.",
      "Easy to use: Our tool is easy to use and can be quickly minify JSON data, Just after typing data tool starts compressing and minifying your JSON data right away.",
      "Repair JSON Support: Our tool has a one-of-a-kind Repair JSON feature. It recognizes and fixes syntax problems and inconsistencies within JSON objects, ensuring valid and error-free data.",
      "Download Minified Output: Use the option to download the minified JSON as a downloaded file.",
    ],
    faq: jsonMinifierFaqData,
  },
  {
    title: "JSON to Typescript",
    link: SCREENS.JSON_TO_TYPESCRIPT,
    heading: "JSON to Typescript",
    content:
      "Simply load your JSON, and the system will automatically generate a typescript from JSON",
    metaTitle: seoData.jsonToTypescript.title,
    metaDescription: seoData.jsonToTypescript.description,
    list: true,
    key: ToolKeys.JSON_TO_TYPESCRIPT,
    toolDescription: `Are you tired of manually converting JSON data to TypeScript interfaces? Look no further! Introducing our online JSON to TypeScript Conversion tool, our online Conversion tool is here to save you time and effort. With our secure and fast conversion process, you can effortlessly transform your JSON data into TypeScript interfaces.
Our first emphasis is security. We recognize the importance of safeguarding sensitive material, so you can be confident that your JSON files will be handled with the utmost care and confidentiality during the conversion process. Our tool analyzes the structure and content of your data and automatically generates the corresponding TypeScript code.
Whether you're a seasoned developer or just starting out, our tool is suitable for all skill levels. You don't have to be a TypeScript expert to benefit from the power of strong typing. Our user-friendly interface simplifies and intuitively converts your code, allowing you to focus on what matters most: creating outstanding software. Say goodbye to manual coding.`,
    keyFeatures: [
      "Effortlessly convert JSON data into TypeScript interfaces and types, saving time and ensuring compatibility with TypeScript projects.",
      "The security of your data is very important. Strong methods of security are used by the JSON to Typescript Tool to protect your input and output, guaranteeing a secure conversion procedure.",
      "With the option to download your TypeScript output as a downloaded file.",
      "In addition to Typescript transformation, our tool has a special Repair JSON capability that detects and corrects syntax mistakes in JSON automatically to make sure the JSON data is error-free.",
      "Before the transformation, you can format JSON data using our tool to give it a well-organized, readable manner.",
    ],
    faq: [],
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
    toolDescription: `Introducing our secure JSON Diff tool, a powerful solution that not only performs JSON comparisons but also validates the provided JSON data. With its lightning-fast speed, user-friendly interface, and unparalleled accuracy, this tool is a must-have for developers, data analysts, and anyone working with JSON files.

One of the key features of our JSON Diff tool is its ability to perform quick and accurate JSON comparisons. It highlights the differences between two JSON files, making it easy to identify additions, modifications, and deletions. This functionality is crucial for debugging code, identifying changes in data structures, and ensuring data integrity.
    
In addition to performing comparisons, our tool goes the extra mile by validating JSON data. It checks the provided JSON against the JSON schema standard, ensuring that it adheres to the specified structure, data types, and constraints. This validation feature is particularly useful in scenarios where data quality and consistency are of utmost importance.
    
Speed is another highlight of our JSON Diff tool. Thanks to its optimized algorithms and efficient processing capabilities, it can handle even the most complex JSON files in a matter of seconds. This allows users to save valuable time and focus on more critical tasks rather than waiting for lengthy comparisons to complete.
    
The user-friendly interface makes it accessible to both novice and experienced users. The intuitive design guides users through the diffing and validation process with ease. Even those without a technical background can navigate through the tool effortlessly and make use of its powerful functionality.
    
Moreover, our JSON Diff tool offers an additional benefit by allowing users to repair JSON files with minor issues. It gives a repair JSON feature to fix common problems such as trailing commas, corrects inconsistent quote usage, and removes unnecessary whitespace, comments. This feature saves users from the hassle of manually editing JSON files and ensures that the resulting JSON is error-free.
    
When it comes to security, our JSON Diff tool prioritizes the protection of user data. We have implemented robust security measures to safeguard the confidentiality and integrity of the JSON files processed through our tool. Users can have peace of mind knowing that their sensitive data is protected at all times.
    
In summary, our secure JSON Diff tool combines the functionalities of performing comparisons, validating JSON, and repairing minor issues, all while offering speed, user-friendliness, and accuracy. Whether you're a developer, data analyst, or someone working with JSON files, this tool is an invaluable resource for enhancing productivity and ensuring data quality.`,
    keyFeatures: [
      "Effortless JSON Comparison: JSON comparisons are simple to do, making it easy to spot discrepancies between two JSON objects and saving time and effort during data processing.",
      "User-Friendly Interface: Our tool offers an intuitive layout that is simple to understand and use, making JSON comparison available to users of all levels of expertise.",
      "Safe and Secure: The safety and confidentiality of your data is very important. To protect your input and results and to provide a secure comparison procedure, the JSON Diff Tool uses powerful safeguards techniques.",
      "Download Comparison Output: Take complete control over your JSON diff results with the option to download them as a downloadable file.",
      "Repair JSON Support: Our tool contains a special Repair JSON function that, prior to comparison, automatically finds and fixes syntax errors that occur inside JSON objects to ensure precise and error-free data.",
      "JSON Formatting: Our technology also enables you to format JSON data during comparison, providing it with a clear framework and making it simpler to understand for improved data evaluation.",
    ],
    faq: [],
  },
  {
    title: "JSON to XML",
    faq: [],
    link: SCREENS.JSON_TO_XML,
    heading: "JSON to XML Converter",
    metaTitle: seoData.JSON_TO_XML.title,
    metaDescription: seoData.JSON_TO_XML.description,
    content:
      "Just load your JSON, and the system will automatically convert it to XML.",
    list: true,
    key: ToolKeys.JSON_TO_XML,
    toolDescription: `We are pleased to welcome you to our cutting-edge Online JSON to XML Converter, the best choice for seamless data transformation. It has never been simpler or more effective to convert JSON to XML than it is with our user-friendly tool.
    \nDiscover the power of automation as you quickly and easily convert your JSON data to XML format. The days of labor-intensive conversions and manual coding are long gone thanks to our converter, which automates the entire process and saves you a lot of time.`,
    keyFeatures: [
      "Simple and user-friendly interface: The JSON to XML Converter presents a simple, intuitive interface to make it simple for users to convert their JSON data into XML format.",
      `Easy conversion process: By just pasting or uploading their JSON data into the tool's editor, users can instantly convert JSON to XML. There is no need for intricate configurations or settings.`,
      `Repair JSON: Our tool has a capability that will automatically fix any input that is incomplete or improperly formed. It finds and fixes problems with the JSON structure to produce more precise conversion outcomes.`,
      `Reliable and accurate conversion: The JSON to XML Converter ensures reliable and accurate conversion from JSON to XML.`,
      `Download converted output:  Users have the option to download the transformed XML output as a file.
      `,
    ],
  },
  {
    title: "Text to Uppercase",
    faq: textToUppercaseFaqData,
    link: SCREENS.TEXT_TO_UPPERCASE,
    heading: "Easily Convert Text to Uppercase Online",
    content:
      "Just load your text, System will automatically convert it to uppercase",
    metaTitle: seoData.toUppercase.title,
    metaDescription: seoData.toUppercase.description,
    list: true,
    key: ToolKeys.UppercaseTextConverter,
    toolDescription: `Introducing our revolutionary tool to capitalize text online, the ultimate solution for effortless capitalization. Are you tired of spending precious time manually capitalizing text? Look no further! our tool will transform your experience and make sure your words stand out with just a click.

Whether you're a professional writer, a student, or simply someone dealing with the text on a daily basis, our uppercase converter is the ultimate choice. Gone are the days of painstaking capitalizing words by word or sentence by sentence. With our tool, you can capitalize an entire document.
    
Imagine the time and effort saved by eliminating the need to manually capitalize multiple documents. Our tool streamlines the capitalization process, allowing you to focus on more important tasks. Whether it's a lengthy report for work, an essay for school, or simply a text message that needs a touch of emphasis, our tool will make sure your text stands out effortlessly.
    
Additionally, it is web-based, which means you can access it anytime, anywhere with an internet connection. Whether you're working from your desktop computer, laptop, tablet, or even your smartphone, our tool will be at your fingertips whenever you need it. No need to worry about compatibility issues or downloading and installing software – simply open your internet browser and get started!
    
We also understand that cost can be a concern for many users. That's why we offer our Convert Text to Uppercase tool completely free of charge! We believe that everyone should have access to efficient and convenient tools, regardless of their budget or financial resources. By offering our tool for free, we ensure that you can supercharge your text capitalization without any cost barriers.
    
Don't waste another minute manually capitalizing text. Try our Convert Text to Uppercase tool and experience the convenience and efficiency it brings to your life. Elevate your written communication, save time, and effortlessly make your words stand out with our irresistible tool
    `,
    keyFeatures: [
      "Text Conversion Made Simple: Convert lowercase to UPPERCASE format quickly even without clicking.",
      "User-Friendly Design: Our application has an intuitive and simple design that allows users of all professional levels to convert text to UPPERCASE.",
      "Download Converted Output: Take pleasure in the convenience of obtaining the converted output as a downloadable file. Save and access your uppercase text offline for later use or sharing in a moment.",
    ],
  },
  {
    title: "Text to Lowercase",
    faq: ToLowercaseFaqData,
    link: SCREENS.TEXT_TO_LOWERCASE,
    heading: "Easily Convert Text to Lowercase Online",
    content:
      " Just load your text, System will automatically convert it to lowercase",
    metaTitle: seoData.toLowercase.title,
    metaDescription: seoData.toLowercase.description,
    list: true,
    key: ToolKeys.LowercaseTextconverter,
    toolDescription: `Introducing our most secure UPPERCASE to lowercase converter, a powerful online tool that allows you to effortlessly convert any text or strings to lowercase format. With its exceptional speed, user-friendly interface, and unmatched accuracy, this tool is a game-changer for anyone who needs to change case to lowercase letters quickly and efficiently.

Our case converter is designed to save you valuable time and effort. Instead of manually converting each letter or word to lowercase, simply type, paste, or upload your text document into the tool and watch it instantly converts to lowercase. People who routinely work with a lot of text, like writers, editors, or data analysts, will particularly benefit from this. By using it, you can avoid the tedious and time-consuming process of converting text by hand.
    
Speed is a standout feature of our tool. It quickly processes your text and provides the converted lowercase text in a matter of seconds. It ensures that you can convert text to lowercase format with remarkable efficiency.
    
In addition to its speed, our free lowercase tool boasts a user-friendly interface. The tool is designed to be intuitive and straightforward, allowing users of all levels of technical proficiency to easily navigate and utilize its functionality. You don't need to download or install any software - simply access the tool online and start converting your text hassle-free.
    
Accuracy is paramount when it comes to converting uppercase to lowercase, and our tool delivers exceptional results. It ensures that every letter and character in your text is properly converted to lowercase, leaving no room for errors or inconsistencies. This is particularly crucial for maintaining consistency in text formatting, adhering to specific style guidelines, or ensuring compatibility in coding.
    
By using our tool, you can enjoy a multitude of benefits. Firstly, it saves you time and energy by automating the conversion process. Secondly, it guarantees consistency and accuracy, eliminating the risk of manual errors. Lastly, it enhances productivity, allowing you to focus on other important tasks instead of spending valuable time converting text.
    `,
    keyFeatures: [
      "Seamless Conversion: Just after typing or loading a local file, you will see your text transform to lowercase.",
      "Improve Readability: Because lowercase making is easier to read, your message will reach your audience with optimum clarity.",
      "Downloadable Output: Gain the flexibility to store your converted text as a downloadable document, which makes it easier to bring it into your projects.",
    ],
  },
  {
    title: "Word Counter",
    faq: [],
    link: SCREENS.WORD_COUNTER,
    heading: "Accurate Word Counter Tool",
    content: " Just load your text, System will automatically count words ",
    metaTitle: seoData.wordCounter.title,
    metaDescription: seoData.wordCounter.description,
    list: true,
    key: ToolKeys.wordCounter,
    toolDescription: `Introducing our Word Counter tool, a fast, user-friendly, and accurate online tool designed to help you effortlessly count the words, characters, and sentences in your content. Whether you're a writer, editor, student, or anyone who frequently deals with textual content, our Word Counter is an invaluable resource that simplifies the process of analyzing and understanding your text.

Speed is a standout feature of our Word Counter tool. With its advanced algorithms, it swiftly scans your content and provides you with precise word, character, and sentence counts in a matter of seconds. It ensures that you can analyze your content efficiently and effectively.
    
User-friendliness is at the core of our Word Counter tool. The interface is designed to be intuitive and straightforward, making it easy for users of all levels of technical proficiency to navigate and utilize its functionality. Simply type, paste, or upload your content into the tool, and instantly receive accurate and detailed word, character, and sentence counts. No downloads or installations are required.
    
Accuracy is paramount when it comes to analyzing and understanding your content, and our Word Counter tool delivers exceptional results. It ensures that every word, character, and sentence is properly counted, without leaving room for errors or inconsistencies. This is particularly crucial for writers, editors, and students who rely on accurate data for various purposes such as meeting word count requirements, tracking progress, or analyzing text patterns.`,
  },
  {
    title: "Replace Space with Underscore",
    faq: [],
    link: SCREENS.REPLACE_SPACES,
    heading: "Replace Space with Underscore",
    metaTitle: seoData.ReplaceSpaces.title,
    metaDescription: seoData.ReplaceSpaces.description,
    content: `Just load your content or text, By default system will replace all spaces with underscore
      if you need to replace specific character please use below input fields accordingly`,
    list: true,
    key: ToolKeys.ReplaceSpaces,
    toolDescription: `Are you tired of struggling with spaces in your file names or text? Look no further than our Replace Space with Underscore tool! You can effortlessly replace spaces with underscores, making your file names or text more organized and compatible.

Our tool is designed to be fast, user-friendly, and accurate. Delete your need to manually rename files or skim through lengthy papers to replace spaces. With our tool, you can automate the process and save valuable time and effort.
    
But wait, there's more! Our tool goes beyond simple space replacement. We understand that there might be instances where you need to replace specific text with provided characters. Our tool caters to this need as well, providing an additional feature to replace any specific text with the characters of your choice. This versatility sets our tool apart, making it a powerful all-in-one solution.
    
In addition to its speed and accuracy, our Replace Space with Underscore tool is also incredibly user-friendly. With its intuitive interface, you can quickly grasp how to use the tool, regardless of your technical expertise. Whether you're a professional in need of efficient file management or a casual user wanting to tidy up your text documents, our tool ensures a seamless experience for everyone.`,
    keyFeatures: [
      "Simple and efficient: Our application includes an easy-to-use UI that makes the procedure simple for users of all skill levels. Just after typing or pasting, you can rapidly turn spaces into underscores, improving URL readability and compatibility with browsers.",
      "Download Your Results: Take control of your converted text by saving it as a handy file.",
    ],
  },
  {
    title: "Remove Extra Spaces",
    faq: [],
    link: SCREENS.REMOVE_EXTRA_SPACES,
    heading: "Easily Remove Extra Spaces",
    metaTitle: seoData.RemoveExtraSpaces.title,
    metaDescription: seoData.RemoveExtraSpaces.description,
    content: `Just load your content, System will remove all extra spaces automatically `,

    list: true,
    key: ToolKeys.REMOVE_EXTRA_SPACES,
    toolDescription: `Introducing our game-changing solution for removing extra spaces from your content - it's time to experience cleaner and more professional-looking text! Say goodbye to the frustration of uneven spacing and hello to streamlined, polished content with our innovative Remove Extra Spaces tool.
    \nWhether you're a writer, editor, student, or professional, our tool is designed to make your life easier and enhance your work. Gone are the days of laboriously scanning through your text to manually fix those pesky extra spaces. With just a few clicks, our tool intelligently detects and removes all excessive spaces, transforming your content into a polished masterpiece.
    \nDon't let extra spaces diminish the impact of your content. Harness the power of our Remove Extra Spaces tool and unlock a new level of professionalism and efficiency. Try it today and experience the transformation for yourself. Your content deserves to shine with precision and perfection!`,
    keyFeatures: [
      "Enhanced Readability: Extra spaces can disrupt the flow and readability of your content. By eliminating those unnecessary spaces, our tool ensures that your text is easy on the eyes and a joy to read. Impress your readers with clean, well-formatted content that holds their attention from start to finish.",
      "Professional Appearance: Whether it's an important business presentation, a school assignment, or a captivating blog post, the way your content looks matters. Our tool brings professionalism to the forefront by ensuring consistent spacing throughout your text. Stand out from the crowd with content that exudes quality and attention to detail.",
      "Time-saving Efficiency: We understand that time is precious, and manual space removal is a tedious, time-consuming task. Our Remove Extra Spaces tool is lightning-fast, allowing you to quickly process and refine your content without breaking a sweat. Spend less time on formatting and more time on what truly matters - creating exceptional content.",
      "Error Prevention: Extra spaces can often lead to unintended formatting errors or distortions in your content. Our tool eradicates these potential pitfalls, giving you peace of mind that your content will be error-free, professional, and ready to impress your audience.",
      "Seamless Integration: Our Remove Extra Spaces tool seamlessly integrates into your existing workflow. With an intuitive interface and straightforward instructions, it's incredibly user-friendly, even for those with limited technical skills. Simply copy and paste your text, click a button, and watch as our tool works its magic.",
      "Download Results: Our tool allows you to download your converted content.",
    ],
  },
  {
    title: "Remove Spaces",
    faq: [],
    link: SCREENS.REMOVE_SPACES,
    heading: "Easily Remove Spaces",
    metaTitle: seoData.RemoveSpaces.title,
    metaDescription: seoData.RemoveSpaces.description,
    content: `Just load your content, System will remove all spaces automatically `,
    list: true,
    key: ToolKeys.REMOVE_SPACES,
    toolDescription: `Tired of dealing with messy data caused by unnecessary spaces? Our simple, yet powerful Remove Spaces tool is the solution you've been searching for. With just a few clicks, you can eliminate extra spaces and optimize your text for improved readability, easier analysis and sharing.
    Our tool is designed to work seamlessly with text of any length, from small snippets to large datasets. It not only removes spaces, but also eradicates other common whitespace characters, such as tabs or newlines, to leave you with clean and organized text that's easy to use and understand.
    \nOur Remove Spaces tool is available online and is free to use. Don't let inefficient data harm your productivity or reputation - try our Remove Spaces tool today and experience the benefits for yourself!
    `,
    keyFeatures: [
      "Saves Your Time: No more manual editing or complex tools to remove spaces from your text! Our simple solution does the job quickly and easily, allowing you to focus on other important tasks.",
      "Increases Accuracy: Extra spaces and whitespace characters can be a serious distraction, making it harder to spot anomalies or irregularities in your data. By ensuring that your text is clean and properly formatted, our tool helps improve accuracy, reduce errors, and simplify analysis.",
      "Improves Readability: Optimize your content for clear communication and easy comprehension. Remove Spaces can be especially useful as a preparation step before sending or sharing text, such as emails, reports, or articles.",
      "Enhances SEO: Unnecessary spaces in your webpages or blog posts can hurt your SEO efforts by impacting keyword density and readability. By using our Remove Spaces tool, you can ensure that your website's content is properly formatted for optimal SEO rankings.",
      "Download Results: You can use our tool to download your content after removing spaces.",
    ],
  },

  {
    title: "URL Decoder",
    faq: URLDecoderFaqData,
    link: SCREENS.URL_DECODE,
    heading: "URL Decoder",
    content:
      "Just load your text, System will automatically decode it for you.",
    metaTitle: seoData.UrlDecode.title,
    metaDescription: seoData.UrlDecode.description,
    list: true,
    key: ToolKeys.UrlDecode,
    toolDescription: `Are you in search of a secure, fast, user-friendly, and accurate URL decoder tool? Look no further! Our tool is designed to make the decoding process straightforward and efficient, ensuring you get reliable results every time. With this tool, you can easily decode encoded URLs and revert them to their original format. Whether you need to decode special characters, percent-encoded elements, or any other encoded components, our decoder can handle it effortlessly.   
One of the standout features is its impressive speed. We recognize the importance of quick results, and our tool is optimized for just that. Say goodbye to the hassle of manually decoding URLs—our tool offers rapid decoding, allowing you to focus on more important tasks.
Not only is our tool fast, but it is also extremely user-friendly. You don’t need to have advanced technical skills to use it! Our intuitive interface guides you through the decoding process with ease, making it accessible for both beginners and experts alike. Just type, paste, or upload your encoded URL into the designated field, and watch as it transforms back to its original form.
When it comes to privacy and security, we take every precaution to keep your data safe and protected. We prioritize the confidentiality of your information and implement strong security measures to safeguard it. Another key feature of our tool is its accuracy. We understand that precision is crucial when decoding URLs, and our tool ensures accurate results every time. You can trust that the decoded URLs will maintain their original integrity, allowing for seamless integration into your online activities.`,
    keyFeatures: [
      "This tool is designed to decode URL-encoded strings, allowing users to easily convert encoded characters back to their original form.",
      "It features a simple and user-friendly interface that makes it easy for users to input URL-encoded strings and decode them.",
      "Users receive instant decoding results as soon as they start typing or pasting, saving both time and effort.",
      "Additionally, users can download the decoded output as a file, making it convenient to analyze or share with others.",
    ],
  },
  {
    title: "URL Encoder",
    faq: [],
    link: SCREENS.URL_ENCODE,
    heading: "URL Encoder",
    content:
      "Just load your text, System will automatically encode it for you.",
    metaTitle: seoData.URLEncode.title,
    metaDescription: seoData.URLEncode.description,
    list: true,
    key: ToolKeys.URLEncode,
    toolDescription: `Looking for a fast and user-friendly tool to dcode URL? There is no need to look any further! Our tool is meant to give you a smooth experience, making the procedure quick and very easy.

With our tool, you can easily encode your URLs, ensuring their compatibility with various systems and avoiding any potential errors. Whether you need to encode special characters, spaces, or any other elements, Our tool will take care of it.
    
We understand the importance of time, which is why we designed our tool to get results in record time. Say goodbye to waiting around for your URLs to be encoded – our tool ensures a swift encoding process, enabling you to work on more important activities.

Your privacy and security matter to us, and we are committed to maintaining the highest standards in protecting your data. Feel confident in using our URL encoder tool, knowing that your information is handled with the utmost care and security.

It is also incredibly user-friendly and 100% secure. You don't need to be a tech guru to use it! Our intuitive interface guides you through the process, making it accessible for both beginners and experts alike. Simply type, paste, or upload your URL into the tool, and your encoded URL is ready to use.`,
    keyFeatures: [
      "Encode URLs fast and easily: This tool allows users to encode URLs quickly and easily, ensuring that special characters and reserved words are appropriately represented.",
      "User-friendly interface: The application has a simple and straightforward interface that allows users to quickly enter URLs and encode them with a few clicks.",
      "Instant encoding results: Users will get encoded output in an instant, saving time and eliminating the need for manual encoding.",
      "Handling Errors: This tool tackles any encoding issues, delivering accurate and dependable results.",
      "Download converted output: Users can download the encoded output as a file, making it easier to use or share with others.",
    ],
  },
  {
    title: "UUID Generator",
    faq: UUIDGeneratorFaqData,
    link: SCREENS.UUID_GENERATOR,
    heading: "UUID Generator - v4",
    content:
      "Experience the Benefits of Our Fast and Secure UUID Generator.\nEliminate the Risk of Duplicate Identifiers with Our Random UUID Generator",
    metaTitle: seoData.UUIDGenerator.title,
    metaDescription: seoData.UUIDGenerator.description,
    list: true,
    key: ToolKeys.UUIDGenerator,
    toolDescription: `Stop wasting time with manual UUID creation! Our online UUID generator simplifies your workflow by generating thousands of unique identifiers in seconds with a single click. This bulk generation feature is perfect for populating databases, initializing systems, and ensuring uniqueness across applications.  Save time, eliminate errors, and boost your development process with our effortless UUID creation tool.`,
    keyFeatures: [
      "Generate up to 7,000 UUIDs instantly with a single click. This saves time compared to slower generators or manual creation.",
      "Generate industry-standard random UUIDs (Universally Unique Identifiers) suitable for most use cases. These offer a very very low chance of collision with existing UUIDs",
      "User-friendly interface with a single button click for generation. No complex configurations or settings are needed.",
      "Easily copy all generated UUIDs to your clipboard for pasting into applications.",
      "Allow downloading large batches of UUIDs as a text file for further use.",
    ],
  },
  {
    title: "Number To Word",
    faq: numbersToWordsFaqData,
    link: SCREENS.NUMBER_TO_WORDS,
    heading: "Number To Word Converter",
    metaTitle: seoData.NUMBER_TO_WORDS.title,
    metaDescription: seoData.NUMBER_TO_WORDS.description,
    content: "",
    list: true,
    key: ToolKeys.NUMBER_TO_WORDS,
    toolDescription: `We are happy that you have chosen to use our free online Number to Word Converter! Our converter makes the procedure straightforward whether you're working with financial data, instructional materials, or any other scenario where it's needed to translate numbers into English.
    \nHave you ever tried to verbalize a numerical value? Using our Number to Word Converter, you may convert any inputted number into the appropriate word form. When dealing with checks, invoices, legal documents, or anything else where verbalizing numbers is important, this can be quite helpful.`,
    keyFeatures: [
      `Quick and Accurate Conversion: By quickly and accurately converting numbers to words, our converter helps you save time and effort.`,

      `Downloadable Output: You can download the translated words by choosing the download option..`,
    ],
  },
  {
    title: "",
    faq: [],
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
    title: "Salary Hike Calculator",
    faq: SalaryHikePercentageCalculatorFaq,
    link: SCREENS.SALARY_HIKE_PERCENTAGE_CALCULATOR,
    heading: "Online Salary Hike Calculator",
    metaTitle: seoData.salaryHikePercentageCalculator.title,
    metaDescription: seoData.salaryHikePercentageCalculator.description,
    content:
      "Just enter your salary or Percentage and get your updated salary and the percentage increase with our salary hike calculator.",
    list: true,
    key: ToolKeys.SalaryHike,
    keyFeatures: [
      "The Online Salary Hike Percentage Calculator offers an interface that is easy to use.",
      "It is built to be mobile-friendly, making it easy for individuals to access and use the tool on their smartphones or tablets.",
      "With the help of the salary hike calculator, salary hike calculations can be simplified.",
    ],
    toolDescription: `The percentage change calculator is useful for figuring out how much an amount has increased or decreased in relative terms. It allows you to compare the significance of changes in various statistics, such as pay increases or drops.
    \nGet an accurate salary hike percentage calculation with our Salary Hike Percentage Calculator. Quickly enter your wage information and get a personalized salary hike percentage in just one click. Easily compare your wages against industry standards and ensure you're getting the raise you deserve.
    \nCertainly! Salary calculator is a free online tool that allows you to calculate the percentage increase in your salary after a raise or promotion. This tool is especially useful for employees who are negotiating a salary increase or trying to estimate their future earnings. 
    \n To use salary raise calculator, you simply enter your current salary, the amount of the raise, and any other relevant information, such as the frequency of pay periods. The calculator then calculates the percentage increase in your salary and displays the new salary amount.`,
  },
  {
    title: "XML Formatter",
    faq: XmlFormatterFaqData,
    link: SCREENS.XML_FORMATTER,
    heading: "XML Formatter",
    metaTitle: seoData.XML_FORMATTER.title,
    metaDescription: seoData.XML_FORMATTER.description,
    content:
      "Just load your XML, and the system will validate and format it automatically.",
    list: true,
    key: ToolKeys.XML_FORMATTER,
    toolDescription: `Welcome to the XML Formatter, an online tool designed to simplify the process of validating, formatting, and beautifying XML files. With this intuitive and efficient tool, you can transform your messy or unstructured XML code into well-organized, human-readable documents effortlessly. 
    \nIt handles everything, saving you time and guaranteeing that your XML files are easy for you to understand and manage. No more manual indentation or aggravation.
    \nTake advantage of the XML beautifier's simplicity and convenience to speed up your development process. Goodbye to XML formatting hassles and welcome to tidy, presentable XML files
    \nStart formatting your XML files hassle-free with the XML tool now!`,
    keyFeatures: [
      `Simply paste your XML code or upload your file, and our tool gets to work in seconds. No waiting around for complex software to load`,
      ` No downloads or installations required. Use any device with a web browser to access our online tool and format your XML on the go`,
      `Once formatted, you can easily copy the clean XML code directly or download it as a formatted file for future use`,
      `Whether you're working with basic data structures or deeply nested elements, our tool ensures proper formatting and readability for all your XML needs`,
    ],
  },
  {
    title: "XML Minifier",
    faq: [],
    link: SCREENS.XML_MINIFIER,
    heading: "XML Minifier",
    metaTitle: seoData.XML_MINIFIER.title,
    metaDescription: seoData.XML_MINIFIER.description,
    content:
      "Just load your XML, and the system will validate and minify it automatically.",
    list: true,
    key: ToolKeys.XML_MINIFIER,
    toolDescription: `Welcome to the XML Minifier, your go-to online tool for reducing the size of XML documents without sacrificing readability. With our efficient XML minification process, you can optimize your XML files, which will save space and improve performance. Whether you're a web developer or simply working with XML data, our easy-to-use XML Minifier is your key to transforming bloated XML into sleek, streamlined code.
    \nTry it to Experience the power of our user-friendly XML Minifier, designed to compress and optimize your XML documents effortlessly`,
    keyFeatures: [
      `Simple and Intuitive Interface:  Our XML Minifier's user interface is simple and easy to use, enabling anyone to easily minify XML files without the need for complicated configurations or technical knowledge.`,
      `Instant Minification: See results right away as your XML code is effectively compressed and cleared of extraneous elements by the XML Minifier, saving significant development time.`,
      `Optimize SEO:  Quicker website loading times, and a better user experience are all benefits of optimising SEO with minified XML.`,
      `Maintain XML Structure: You may be confident that our XML Minifier keeps your XML structure's integrity, guaranteeing that your data is correct and usable.`,
      `Error-Free Minification: Our programme is made to work with XML files of all complexity levels, offering error-free minification and protecting your data in the process.`,
      `Compatible with a variety of XML Formats: The XML Minifier can handle both simple and complicated XML data.`,
      `Download Minified XML: The XML Minifier is also providing an option to download their minified XML files. After Minifier your XML code to perfection, simply click the "Download" button on top of the output window, and the XML file will be saved instantly to your device.`,
    ],
  },
  {
    title: "XML to JSON",
    faq: [],
    link: SCREENS.XML_TO_JSON,
    heading: "XML to JSON Converter",
    metaTitle: seoData.XML_TO_JSON.title,
    metaDescription: seoData.XML_TO_JSON.description,
    content:
      "Just load your XML, and the system will automatically convert it to JSON.",
    list: true,
    key: ToolKeys.XML_TO_JSON,
    toolDescription: `We are pleased to present our state-of-the-art online XML to JSON Converter, a one-stop solution for simple data transformation! It has never been simpler or more convenient to convert XML to JSON than it is now thanks to our user-friendly tool.
    \nSay goodbye to laborious coding and manual data manipulation. Just after typing or pasting, you can quickly convert XML files into JSON format using our streamlined XML to JSON Converter.
    `,
    keyFeatures: [
      `Ease of Use: Our tool's design prioritize simplicity. It can be used without any technical expertise or programming expertise. Anyone may easily and rapidly convert XML to JSON without effort, from novices to seasoned professionals.`,
      `Seamless Conversion: Easily convert your XML data to JSON format. Our converter guarantees dependability and accuracy while maintaining the integrity of your data.`,
      `Privacy and Security: Data security is a responsibility we take seriously. Your privacy is always secured because your XML files and converted JSON outputs are never stored on our systems. `,
      `Compatible with a variety of XML Formats: We designed our XML to JSON Converter to support a variety of XML formats. Our tool handles XML data with ease, regardless of whether it adheres to a specified standard or has unique tags.`,
      `Downloadable Output: Obtain immediate access to your JSON files after transformation. There is no need to wait; simply download your results and incorporate them right away into your projects.`,
    ],
  },
  {
    title: "Random String Generator",
    faq: RandomStringGeneratorFaq,
    link: SCREENS.GENERATE_RANDOM_STRING,
    heading: "Random String Generator",
    metaTitle: seoData.GENERATE_RANDOM_STRING.title,
    metaDescription: seoData.GENERATE_RANDOM_STRING.description,
    content: "",
    list: true,
    key: ToolKeys.GENERATE_RANDOM_STRING,
    toolDescription: `Random String Generator is an online tool that can help you with various tasks, such as testing your software, creating strong passwords, generating coupon codes, and more. You can easily create strings of any length and type using Random String Generator. You can download the results as a text file or copy them to your clipboard.`,
    keyFeatures: [
      "You can customize the length, charset, and format of the random strings according to your needs.",
      "You can copy the generated strings to your clipboard, or download it as a text file.",
      "You can generate up to ten thousand random text in a single click.",
      "You can generate a text up to seventy characters long with just a single click.",
    ],
  },
  // Keywords: random string generator, online string generator, password generator, secure string, unique string, username generator, API key generator, data masking, text generation, online tool, free
];
