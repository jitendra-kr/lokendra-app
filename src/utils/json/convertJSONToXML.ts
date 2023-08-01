import { XMLBuilder } from "fast-xml-parser";
import { get } from "lodash";
import { formatXml } from "../xml";

export const convertJSONToXML = (json: string) => {
  const result = { data: "", msg: "" };
  try {
    const builder = new XMLBuilder();
    const xmlOutput = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <root>
    ${builder.build(JSON.parse(json))}
    </root>
    `;
    const { data, msg } = formatXml(xmlOutput);
    if (msg) {
      result.msg = msg;
      return result;
    }
    result.data = data;
  } catch (error) {
    const msg = `${get(error, "name") + " \n" + get(error, "message")}  `;
    result.msg = msg;
  }
  return result;
};
