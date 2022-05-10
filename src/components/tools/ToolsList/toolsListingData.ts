
export interface ITools {
    title: string;
    link: string
}

interface IToolsArray extends Array<ITools> { }

export const toolsListData: IToolsArray = [{
    title: "String to ASCII",
    link: "/tools/string-to-ascii"
},
{
    title: "ASCII to String",
    link: "/tools/ascii-to-string"
},
{
    title: "JSON to String",
    link: "/tools/json-to-string"
},
{
    title: "JSON parser",
    link: "/tools/json-parser"
},
{
    title: "Text to Uppercase",
    link: "/tools/text-to-uppercase"
},
{
    title: "Text to Lowercase",
    link: "/tools/text-to-lowercase"
}
]