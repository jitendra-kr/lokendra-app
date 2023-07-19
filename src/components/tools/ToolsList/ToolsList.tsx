import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import { STRING_CONSTANTS } from "../../../constants";
import { useGetUrlPath } from "../../../hooks";
import { WhyUs } from "../../common";
import { SearchBar } from "../../common/SearchBar";
import ToolDescriptionStyles from "../helper/ToolOverview/ToolDescription.module.css";
import { RenderToolsList } from "./RenderToolsList";
import styles from "./ToolsList.module.css";
import { ITools, toolsListData } from "./toolsListingData";

const Reasons = () => {
  const reasons = [
    `Our tools use cutting-edge encryption and safe data processing algorithms to guarantee that your data is completely secure.`,
    `Data is processed locally rather than being sent to external servers.`,
    `It analyse and alter data significantly more quickly than other solutions on the market because to their strong algorithms and optimised speed.`,
    `Discover the power of precision with the unrivalled quality and dependability of ${STRING_CONSTANTS.global.domain}. Our tools is the best option regardless of whether you're a student, data analyst, business owner, or developer because of its superiority and dependability.`,
    `Your data, in our opinion, is your most significant asset. We never use or sell your information to outside parties because of this. Therefore, why use tools that compromise your data?? Choose
    ${STRING_CONSTANTS.global.domain} and take control of your data
    today!`,
  ];

  return (
    <ul>
      {reasons.map((r, i) => (
        <li key={i} style={{ fontFamily: "Inter", padding: "4px" }}>
          {r}
        </li>
      ))}
    </ul>
  );
};

export const ToolsList = () => {
  const [toolsList, setToolsList] = useState<ITools[]>([]);
  const [textInput, setTextInput] = useState<string | undefined>();
  const { isHome } = useGetUrlPath();
  const [placeholder, setPlaceholder] = useState<string>("Search...");

  const onSearch = (searchInput: string | undefined) => {
    setTextInput(searchInput);
    if (!searchInput) {
      const data = toolsListData.filter((tool) => tool.list);
      setToolsList(data);
      return;
    }
    handleSearch(searchInput);
  };

  const handleSearch = (searchInput: string) => {
    const searchOptions: Fuse.IFuseOptions<ITools> = {
      keys: ["title"],
    };
    const fuse = new Fuse(toolsList, searchOptions);
    const results = fuse.search(searchInput);
    setToolsList(results.map((result) => result.item));
  };

  useEffect(() => {
    const data = toolsListData.filter((tool) => tool.list);
    const randomTool = data[Math.floor(Math.random() * data.length)];
    setPlaceholder(`Search... ( Ex- ${randomTool.title})`);
    setToolsList(data);
  }, [toolsListData]);

  return (
    <>
      <div
        id="tool-list"
        className={"row"}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {isHome && (
          <h1 className={`${ToolDescriptionStyles.heading} ${styles.heading}`}>
            Empower Your Work with Our Tools
          </h1>
        )}
        {!isHome && (
          <h3 className={`${ToolDescriptionStyles.heading} ${styles.heading}`}>
            Other Tools
          </h3>
        )}
        <SearchBar
          placeholder={placeholder}
          onSearch={onSearch}
          autoFocus={false}
          allowClear={true}
        />
        <RenderToolsList toolsList={toolsList} textInput={textInput} />
        <div className={styles.whyUsContainer}>
          <WhyUs
            heading="5 Reasons Why Our Suite of Online Tools is a Must-Have"
            content={<Reasons />}
          />
        </div>
      </div>
    </>
  );
};
