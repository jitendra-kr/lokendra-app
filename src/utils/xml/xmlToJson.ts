import { XMLParser } from "fast-xml-parser";
export const xmlToJson = (xml: string) => {
  const parser = new XMLParser();
  let jObj = parser.parse(xml);
  console.log(jObj);
};
