import { Button } from "antd";
import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";
import { SCREENS } from "../../../common/enums";
import { toolsListData } from "../../tools";
import RelevantToolsStyles from "./RelevantTools.module.css";
import { releventTools } from "./releventTools";

export function RelevantTools({ toolLink }: { toolLink: SCREENS }) {
  const getTool = (link: SCREENS) => {
    return toolsListData.find((obj) => {
      return obj.link === link;
    });
  };

  if (!releventTools[toolLink].length) {
    return <></>;
  }

  return (
    <div style={{ marginBottom: "3px" }}>
      <span style={{ marginRight: "5px" }}>
        <b>
          Relevant Tools <BiSolidRightArrow />
        </b>
      </span>
      {releventTools[toolLink].map((tool) => (
        <Button
          type="default"
          style={{ marginRight: "5px" }}
          key={getTool(tool)?.link}
        >
          <span>
            <Link href={getTool(tool)?.link ?? "/"}>
              {getTool(tool)?.title}
            </Link>
          </span>
        </Button>
      ))}
      <Link
        className={RelevantToolsStyles["changing-text-color"]}
        href="#tool-list"
        scroll={false}
      >
        <b>Explore Other Tools</b>
      </Link>
    </div>
  );
}
