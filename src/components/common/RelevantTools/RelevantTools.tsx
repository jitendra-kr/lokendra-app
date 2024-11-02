import { CustomButton } from "@ft/common/components/UiComponent/CustomButton";
import { SCREENS } from "@ft/common/enums/screens";
import { toolsListData } from "@ft/components/tools/ToolsList/toolsListingData";
import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";
import RelevantToolsStyles from "./RelevantTools.module.css";
import { relevantTools } from "./relevantTools";

export function RelevantTools({
  toolLink,
  showOtherToolsLink = true,
}: {
  toolLink: SCREENS;
  showOtherToolsLink?: boolean;
}) {
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
        <b style={{ fontSize: "17px", marginRight: "10px" }}>
          Relevant Tools <BiSolidRightArrow />
        </b>
        {relevantTools[toolLink].map((tool) => {
          const data = getTool(tool);
          if (!data) {
            return <></>;
          }
          return (
            <CustomButton
              type="default"
              key={data?.link}
              style={{ marginRight: "8px", marginBottom: "8px" }}
              onClick={() => {}}
            >
              <Link
                style={{
                  color: "#1677ff",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
                href={data?.link}
              >
                {data?.title}
              </Link>
            </CustomButton>
          );
        })}
        {showOtherToolsLink && (
          <CustomButton
            type="default"
            style={{ marginRight: "8px", marginBottom: "8px" }}
            onClick={() => {
              const elem = document.getElementById("tool-list");
              elem?.scrollIntoView();
            }}
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
