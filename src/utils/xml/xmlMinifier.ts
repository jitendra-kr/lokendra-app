import { get } from "lodash";

export const xmlMinifier = async (
  xml: string,
): Promise<{
  data: string;
  msg: string;
}> => {
  const result = { data: "", msg: "" };

  try {
    const xmlFormat = await import("xml-formatter");
    const data = xmlFormat.default.minify(xml, {
      filter: (node) => node.type !== "Comment",
      collapseContent: true,
    });
    result.data = data;
    return result;
  } catch (error) {
    const msg = `${get(error, "name") + " \n" + get(error, "message")}  `;
    result.msg = msg;
    return result;
  }
};
