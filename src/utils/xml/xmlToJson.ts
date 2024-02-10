import { get } from "lodash";

export const xmlToJson = async (xml: string) => {
  const { XMLParser } = await import("fast-xml-parser");
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
