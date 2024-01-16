import { jsonrepair } from "jsonrepair";

export function repairJSON(jsonString: string) {
  try {
    const repaired = jsonrepair(jsonString);
    return repaired;
  } catch (err) {
    return null;
  }
}
