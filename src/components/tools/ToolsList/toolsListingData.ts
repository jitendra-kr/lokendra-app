
import seoData from "../../../seo/tools/tools.json"

export interface ITools {
    title: string;
    link: string;
    heading: string;
    metaTitle: string;
    metaDescription: string;
    content: string;
    list: boolean;
}

interface IToolsArray extends Array<ITools> { }

export const jsonUnstringifyPath = "json-unstringify"

export const toolsListData: IToolsArray = [{
    title: "String to ASCII",
    link: "/tools/string-to-ascii",
    heading: " String to ASCII converter",
    content: "Just load your text, System will automatically convert it to ASCII codes",
    metaTitle: seoData.stringToAscii.title,
    metaDescription: seoData.stringToAscii.description,
    list: true
},
{
    title: "ASCII to String",
    link: "/tools/ascii-to-string",
    heading: " ASCII to String converter",
    content: "Just load your ASCII code, System will automatically convert it to text",
    metaTitle: seoData.asciiToString.title,
    metaDescription: seoData.asciiToString.description,
    list: true
},
{
    title: "JSON to String",
    link: "/tools/json-to-string",
    heading: "  JSON to string converter",
    content: "Just load your JSON, System will automatically it to JSON string or text",
    metaTitle: seoData.jsonToString.title,
    metaDescription: seoData.jsonToString.description,
    list: true
},
{
    title: "JSON parser",
    link: "/tools/json-parser",
    heading: "JSON Parser Online",
    content: "Just load your JSON, System will automatically parse it",
    metaTitle: seoData.jsonParser.title,
    metaDescription: seoData.jsonParser.description,
    list: true
},
{
    title: "JSON Unstringify",
    link: `/tools/${jsonUnstringifyPath}`,
    heading: "JSON Unstringify Online",
    content: "Just load your JSON, System will automatically parse it",
    metaTitle: seoData.jsonParser.title,
    metaDescription: seoData.jsonParser.description,
    list: true
},
{
    title: "Text to Uppercase",
    link: "/tools/text-to-uppercase",
    heading: "Uppercase Text converter",
    content: "Just load your text, System will automatically convert it to upper case text",
    metaTitle: seoData.toUppercase.title,
    metaDescription: seoData.toUppercase.description,
    list: true
},
{
    title: "Text to Lowercase",
    link: "/tools/text-to-lowercase",
    heading: "Lowercase Text converter",
    content: " Just load your text, System will automatically convert it to lower case text",
    metaTitle: seoData.toLowercase.title,
    metaDescription: seoData.toLowercase.description,
    list: true
},
{
    title: "Tools",
    link: "/tools",
    heading: "Tools",
    content: " Just load your text, System will automatically convert it to lower case text",
    metaTitle: seoData.toolsList.title,
    metaDescription: seoData.toolsList.description,
    list: false
}
]