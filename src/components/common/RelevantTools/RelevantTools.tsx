"use client";
import { CustomButton } from "@ft/common/components/UiComponent/CustomButton";
import { SCREENS } from "@ft/common/enums/screens";
import { toolsListData } from "@ft/components/tools/ToolsList/toolsListingData";
import Link from "next/dist/client/link";
import { useRouter } from "next/navigation";
import RelevantToolsStyles from "./RelevantTools.module.css";
import { relevantTools } from "./relevantTools";

export function RelevantTools({
  toolLink,
  showOtherToolsLink = true,
}: {
  toolLink: SCREENS;
  showOtherToolsLink?: boolean;
}) {
  const router = useRouter();

  const getTool = (link: SCREENS) => {
    return toolsListData.find((obj) => {
      return obj.link === link;
    });
  };

  if (!relevantTools[toolLink]?.length) {
    return <></>;
  }
  return (
    <div className="row">
      <div className="col-auto">
        <b style={{ fontSize: "17px", marginRight: "10px" }}>Relevant Tools:</b>
        {relevantTools[toolLink].map((tool, index) => {
          const data = getTool(tool);
          if (!data) {
            return <></>;
          }
          return (
            <CustomButton
              type="default"
              key={data?.link}
              styles={{
                height: "30px",
                marginRight: "8px",
                marginBottom: "8px",
                backgroundColor: "white",
                borderWidth: 1,
                borderBottomColor: "blue",
              }}
              onClick={() => router.push(data.link)}
              name={""}
            >
              {index <= 1 && (
                <Link href={data?.link}>
                  <b style={{ color: "blue" }}>{data?.title}</b>
                </Link>
              )}
              {index > 1 && <b style={{ color: "blue" }}>{data?.title}</b>}
            </CustomButton>
          );
        })}
        {showOtherToolsLink && (
          <CustomButton
            type="default"
            styles={{ marginRight: "8px", marginBottom: "8px", height: "30px" }}
            onClick={() => {
              const elem = document.getElementById("tool-list");
              elem?.scrollIntoView();
            }}
            name={""}
          >
            <b className={RelevantToolsStyles["changing-text-color"]}>
              View More Tools
            </b>
          </CustomButton>
        )}
      </div>
    </div>
  );
}
