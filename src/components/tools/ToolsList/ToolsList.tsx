"use client";
import Fuse, { IFuseOptions } from "fuse.js";
import { useEffect, useState } from "react";
import { STRING_CONSTANTS } from "../../../constants";
import { WhyUs } from "../../common";

import dynamic from "next/dynamic";
import ToolDescriptionStyles from "../helper/ToolOverview/ToolDescription.module.css";
import { RenderToolsList } from "./RenderToolsList";
import styles from "./ToolsList.module.css";
import { ITools, toolsListData } from "./toolsListingData";

const SearchBar = dynamic(() =>
  import("../../common/SearchBar").then((mod) => mod.SearchBar),
);

const Reasons = () => {
  const reasons = [
    `Our tools use cutting-edge encryption and safe data processing algorithms to guarantee that your data is completely secure.`,
    `Data is processed locally rather than being sent to external servers.`,
    `It analyze and alter data significantly more quickly than other solutions on the market because to its strong algorithms and optimised speed.`,
    `Discover the power of precision with the unrivalled quality and dependability of ${STRING_CONSTANTS.global.domain}. Our tools is the best option regardless of whether you're a student, data analyst, business owner, or developer because of its superiority and dependability.`,
    `Our opinion is that your most valuable asset is your data. We never make use of or sell your information to third parties. Therefore, why use tools that compromise your data?? Choose
    ${STRING_CONSTANTS.global.domain} and take control of your data
    today.`,
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
    const searchOptions: IFuseOptions<ITools> = {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toolsListData]);

  return (
    <>
      <div>
        <h1 className={`${ToolDescriptionStyles.heading} ${styles.heading}`}>
          Empower Your Work with Our Tools
        </h1>
      </div>
      <SearchBar
        placeholder={placeholder}
        onSearch={onSearch}
        autoFocus={false}
        allowClear={true}
      />
      <div
        id="tool-list"
        className={"row"}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <RenderToolsList toolsList={toolsList} textInput={textInput} />
      </div>
      <div className={styles.whyUsContainer}>
        <WhyUs
          heading="5 Reasons Why Our Suite of Online Tools is a Must-Have"
          content={<Reasons />}
        />
      </div>
    </>
  );
};
