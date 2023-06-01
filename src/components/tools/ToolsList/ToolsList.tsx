import Link from "next/link";
import { useRouter } from "next/router";
import { useGetUrlPath } from "../../../hooks";
import { OfflineMetaTags } from "../../common";
import styles from "./ToolsList.module.css";
import { ITools, toolsListData } from "./toolsListingData";

export const ToolsList = () => {
  const { isHome, pathname } = useGetUrlPath();
  const data = toolsListData.filter((tool) => tool.list);

  const router = useRouter();
  const handleClick = (item: ITools) => {
    router.push(item.link);
  };

  return (
    <>
      {pathname === "/" && <OfflineMetaTags />}

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
      </div>
    </>
  );
};
