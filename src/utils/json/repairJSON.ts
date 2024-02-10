export async function repairJSON(jsonString: string) {
  try {
    const { jsonrepair } = await import("jsonrepair");
    const repaired = jsonrepair(jsonString);
    return repaired;
  } catch (err) {
    return null;
  }
}
