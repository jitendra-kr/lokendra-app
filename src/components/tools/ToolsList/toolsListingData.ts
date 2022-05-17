
export interface ITools {
    title: string;
    link: string;
    heading: string;
    content: string
}

interface IToolsArray extends Array<ITools> { }

export const toolsListData: IToolsArray = [{
    title: "String to ASCII",
    link: "/tools/string-to-ascii",
    heading: " String to ASCII converter",
    content: "Just load your text, System will automatically convert it to ASCII codes"
},
{
    title: "ASCII to String",
    link: "/tools/ascii-to-string",
    heading: " ASCII to String converter",
    content: "Just load your ASCII code, System will automatically convert it to text"
},
{
    title: "JSON to String",
    link: "/tools/json-to-string",
    heading: "  JSON to string converter",
    content: "Just load your JSON, System will automatically it to JSON string or text"
},
{
    title: "JSON parser",
    link: "/tools/json-parser",
    heading: "JSON Parser Online",
    content: "Just load your JSON, System will automatically parse it"

},
{
    title: "Text to Uppercase",
    link: "/tools/text-to-uppercase",
    heading: "Uppercase Text converter",
    content: "Just load your text, System will automatically convert it to upper case text"
},
{
    title: "Text to Lowercase",
    link: "/tools/text-to-lowercase"    ,
    heading: "Lowercase Text converter",
    content: " Just load your text, System will automatically convert it to lower case text"
}
]