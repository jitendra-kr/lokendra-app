
'use client'
import { useToolListData } from "../../common/hooks/useToolListData";
import MainHeader from "../Header";
import { OfflineMetaTags } from "../common";
import { ToolKeys, ToolsList } from "../tools";
import ToolDescriptionStyles from "../tools/helper/ToolOverview/ToolDescription.module.css";

export function HomePage() {
  const { toolData } = useToolListData(ToolKeys.HOME);
  return (
    <>
       

      <OfflineMetaTags tagData={toolData} />

      <ToolsList />
      <div style={{ marginBottom: "80px" }}>
        <h2 className={`${ToolDescriptionStyles.heading} `}>
          What is FireboxTools?
        </h2>
        <p style={{ fontSize: "19px", marginTop: "20px" }}>
          FireboxTools is a powerful and secure online platform which comes with
          such tools as code formatter, minifier, beautifier, UUID generate,
          converter, and many more. Discover a suite of time-saving tools for
          both technical and non-technical users on this platform. Access
          various tools easily through our{" "}
          <a href="#heading">search functionality</a> to find the best tools for
          your needs.
        </p>
      </div>
    </>
  );
}
