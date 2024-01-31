import React from "react";
import { JsonParser, ToolKeys } from "../../src/components";

function JsonValidatorPage() {
  return <JsonParser toolKey={ToolKeys.JSON_VALIDATOR} />;
}

export default JsonValidatorPage;
