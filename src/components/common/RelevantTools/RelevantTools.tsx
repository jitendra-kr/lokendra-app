"use client";
import { Button } from "antd";
import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";
import { SCREENS } from "../../../common/enums";
import { toolsListData } from "../../tools";
import RelevantToolsStyles from "./RelevantTools.module.css";
import { relevantTools } from "./releventTools";

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
    <div className="row justify-content-center">
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
            <Button
              type="default"
              key={data?.link}
              className={RelevantToolsStyles.button}
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
            </Button>
          );
        })}
        {showOtherToolsLink && (
          <Button
            type="default"
            className={RelevantToolsStyles.button}
            onClick={() => {
              const elem = document.getElementById("tool-list");
              elem?.scrollIntoView();
            }}
          >
            <b className={RelevantToolsStyles["changing-text-color"]}>
              View More Tools
            </b>
          </Button>
        )}
      </div>
    </div>
  );
}
