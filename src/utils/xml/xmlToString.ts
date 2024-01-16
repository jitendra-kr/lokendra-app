import { XMLParser } from "fast-xml-parser";
import { get } from "lodash";

export const xmlToString = (
  xml: string,
): {
  data: string;
  msg: string;
} => {
  const result = { data: "", msg: "" };

  try {
    const parser = new XMLParser();
    let jObj = parser.parse(xml);
    result.data = jObj;
    return result;
  } catch (error) {
    const msg = `${get(error, "name") + " \n" + get(error, "message")}  `;
    result.msg = msg;
    return result;
  }
};
