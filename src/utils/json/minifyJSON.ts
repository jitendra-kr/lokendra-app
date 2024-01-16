import { get } from "lodash";
import { STRING_CONSTANTS } from "../../constants";
import { jsonlint } from "../../externalLib";

export const minifyJSON = (
  str: string,
): {
  beautifiedData: string;
  msg: string;
} => {
  const result = { beautifiedData: "", msg: "" };
  try {
    const parsedJSON = jsonlint.parse(str);
    if (typeof parsedJSON === "number") {
      result.msg = STRING_CONSTANTS.tools.invalidJson;
      return result;
    }
    result.beautifiedData = JSON.stringify(parsedJSON, null, 0);
  } catch (error: unknown) {
    result.msg = `${get(error, "name") + " \n" + get(error, "message")}  `;
  }
  return result;
};
