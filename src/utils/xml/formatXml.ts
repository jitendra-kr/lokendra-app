export const formatXml = async (
  xml: string,
): Promise<{
  data: string;
  msg: string;
}> => {
  const result = { data: "", msg: "" };

  try {
    const xmlFormat = await import("xml-formatter");
    const data = xmlFormat.default(xml, {
      indentation: "  ",
      filter: (node) => node.type !== "Comment",
      collapseContent: true,
      lineSeparator: "\n",
    });
    result.data = data;
    return result;
  } catch (error) {
    const get = (await import("lodash")).get;
    const msg = `${get(error, "name") + " \n" + get(error, "message")}  `;
    result.msg = msg;
    return result;
  }
};
