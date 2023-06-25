import Link from "next/link";
import { useRouter } from "next/router";
import { useToolListData } from "../../../common/hooks/useToolListData";
import { STRING_CONSTANTS } from "../../../constants";
import { useGetUrlPath } from "../../../hooks";
import { OfflineMetaTags, WhyUs } from "../../common";
import styles from "./ToolsList.module.css";
import { ITools, ToolKeys, toolsListData } from "./toolsListingData";

const Reasons = () => {
  const reasons = [
    `Our tools ensures that your data is 100% secure through its use of
    advanced encryption and secure data handling protocols.`,

    `We process data locally in most cases without sending it to a server.`,
    `Our tools is lightning-fast because of its powerful algorithms and
    optimized performance, our tools can process and manipulate data much
    faster than other available tools`,

    ` Experience the power of precision with our tool's unbeatable quality and
    reliability. Whether you're a student, data analyst, business owner, or
    developer, our tool's quality and reliability make it the ultimate
    choice.`,

    `We believe that your data is your most valuable asset. That's why we
    never use or sell your data to third parties. So why settle for tools
    that compromise your data? Choose
    ${STRING_CONSTANTS.global.appName} and take control of your data
    today!`,
  ];

  return (
    <ul>
      {reasons.map((r) => (
        <li style={{ fontFamily: "Inter", padding: "4px" }}>{r}</li>
      ))}
    </ul>
  );
};

export const ToolsList = () => {
  const router = useRouter();
  const { toolData } = useToolListData(ToolKeys.HOME);

  const { isHome, pathname } = useGetUrlPath();
  const data = toolsListData.filter((tool) => tool.list);

  const handleClick = (item: ITools) => {
    router.push(item.link);
  };

  return (
    <>
      {isHome && <OfflineMetaTags tagData={toolData} />}
      <div
        className={`${
          isHome || pathname === "/tools" ? styles.home : styles.otherTools
        } row content-padding-left`}
      >
        {!isHome && (
          <h3 className="text-align-center mainHeadingfontFamily">
            Other tools
          </h3>
        )}
        <div className="row">
          {data.map((item, i) => {
            return (
              <div
                className="col-lg-3 cursor-pointer"
                key={i}
                onClick={() => {
                  handleClick(item);
                }}
                style={{ marginTop: "25px" }}
              >
                <div className="listing border">
                  <div
                    className="home-page-title"
                    style={{ textAlign: "center" }}
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <WhyUs
          heading="5 Reasons Why Our Suite of Online Tools is a Must-Have"
          content={<Reasons />}
        />
      </div>
    </>
  );
};
