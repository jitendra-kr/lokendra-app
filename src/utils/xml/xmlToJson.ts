import { XMLParser } from "fast-xml-parser";
import { get } from "lodash";

export const xmlToJson = (xml: string) => {
  const result = { data: "", msg: "" };
  try {
    const parser = new XMLParser();
    result.data = parser.parse(xml);
  } catch (error) {
    const msg = `${get(error, "name") + " \n" + get(error, "message")}  `;
    result.msg = msg;
  }
  return result;
};
