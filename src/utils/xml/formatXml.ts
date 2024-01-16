import { get } from "lodash";
import xmlFormat from "xml-formatter";

export const formatXml = (
  xml: string,
): {
  data: string;
  msg: string;
} => {
  const result = { data: "", msg: "" };

  try {
    const data = xmlFormat(xml, {
      indentation: "  ",
      filter: (node) => node.type !== "Comment",
      collapseContent: true,
      lineSeparator: "\n",
    });
    result.data = data;
    return result;
  } catch (error) {
    const msg = `${get(error, "name") + " \n" + get(error, "message")}  `;
    result.msg = msg;
    return result;
  }
};
