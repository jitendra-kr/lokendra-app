import { STRING_CONSTANTS } from "@ft/constants/stringConstants";

const beautifyJSON = async (
  str: string,
): Promise<{
  beautifiedData: string;
  msg: string;
}> => {
  const result = { beautifiedData: "", msg: "" };
  try {
    const jsonLint = (await import("../../externalLib/jsonLint")).jsonlint;
    const parsedJSON = jsonLint.parse(str);
    if (typeof parsedJSON === "number") {
      result.msg = STRING_CONSTANTS.tools.invalidJson;
      return result;
    }
    result.beautifiedData = JSON.stringify(parsedJSON, null, "\t");
  } catch (error: unknown) {
    const get = (await import("lodash")).get;
    result.msg = `${get(error, "name") + " \n" + get(error, "message")}  `;
  }
  return result;
};

export default beautifyJSON;
