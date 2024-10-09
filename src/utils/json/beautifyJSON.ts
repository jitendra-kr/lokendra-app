import { STRING_CONSTANTS } from "@ft/constants/stringConstants";
import { get } from "lodash";
import { jsonlint } from "../../externalLib/jsonLint";

export const beautifyJSON = (
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
    result.beautifiedData = JSON.stringify(parsedJSON, null, "\t");
  } catch (error: unknown) {
    result.msg = `${get(error, "name") + " \n" + get(error, "message")}  `;
  }
  return result;
};
