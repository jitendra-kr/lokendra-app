import { SCREENS } from "@ft/common/enums/screens";
import jsonTypeData from "./json-to-typescript-interface.json";
import jsonValidatorData from "./json-validator.json";

import { ShowCodeBlock } from "../ShowCodeBlock/ShowCodeBlock";
import jsonData from "./sample.json";

const xmldata = `<?xml version="1.0" encoding="UTF-8"?>
<store>
  <storeName>Fictional Electronics</storeName>
  <location>New York</location>
  <contact>
    <email>contact@fictionalelectronics.com</email>
    <phone>(123) 456-7890</phone>
  </contact>
  <products>
    <product>
      <id>001</id>
      <name>Smartphone</name>
      <brand>FictoPhone</brand>
      <price>499.99</price>
      <description>A feature-rich smartphone with a powerful processor and stunning display.</description>
      <inStock>true</inStock>
      <colors>
        <color>Black</color>
        <color>White</color>
        <color>Blue</color>
      </colors>
      <specs>
        <screenSize>6.4 inches</screenSize>
        <battery>4000 mAh</battery>
        <storage>128GB</storage>
        <camera>48 MP</camera>
        <operatingSystem>Android 11</operatingSystem>
      </specs>
    </product>
  </products>
</store>`;

type Example = "json" | "xml";

export function SampleData({ pathname }: { pathname: SCREENS }) {
  const data: Record<string, Example> = {
    "json-tools": "json",
    "xml-tools": "xml",
  };
  const category = pathname && pathname.split("/")[1];
  const example = data[category];

  const decideJSONData = () => {
    switch (pathname) {
      case SCREENS.JSON_PARSER:
        return jsonData;
      case SCREENS.JSON_VALIDATOR:
        return jsonValidatorData;
      case SCREENS.JSON_TO_TYPESCRIPT:
        return jsonTypeData;
      default:
        return jsonData;
    }
  };

  if (!example) {
    return <></>;
  }
  return (
    <>
      <h2 className="heading">
        A Simple and Concise {example && example.toUpperCase()} Example{" "}
      </h2>

      <div style={{ marginBottom: "80px" }}>
        {example === "xml" && <ShowCodeBlock code={xmldata} language="xml" />}
        {example === "json" && (
          <ShowCodeBlock
            code={`${JSON.stringify(decideJSONData(), null, 2)}`}
            language="json"
          />
        )}
      </div>
    </>
  );
}
