import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import { useToolListData } from "../../../common/hooks/useToolListData";
import { STRING_CONSTANTS } from "../../../constants";
import { useGetUrlPath } from "../../../hooks";
import { OfflineMetaTags, WhyUs } from "../../common";
import { SearchBar } from "../../common/SearchBar";
import ToolDescriptionStyles from "../helper/ToolOverview/ToolDescription.module.css";
import { RenderToolsList } from "./RenderToolsList";
import styles from "./ToolsList.module.css";
import { ITools, ToolKeys, toolsListData } from "./toolsListingData";

const Reasons = () => {
  const reasons = [
    `Our tools ensures that your data is 100% secure through its use of
    advanced encryption and secure data handling protocols.`,

    `We process data locally in most cases without sending it to external servers.`,
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
  const { toolData } = useToolListData(ToolKeys.HOME);
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
      {isHome && <OfflineMetaTags tagData={toolData} />}
      <div className={`row`}>
        <h1 className={`${ToolDescriptionStyles.heading} ${styles.heading}`}>
          Empower Your Work with Our Tools
        </h1>
        <SearchBar
          placeholder={placeholder}
          onSearch={onSearch}
          autoFocus={false}
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
