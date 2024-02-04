import React from "react";
import { JsonParser, ToolKeys } from "@ft/components";

function JsonValidatorPage() {
  return <JsonParser toolKey={ToolKeys.JSON_VALIDATOR} />;
}

export default JsonValidatorPage;
