"use client";
import { H1Tag } from "@ft/components/common";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import RenderToolsList from "./RenderToolsList";
import { ITools, toolsListData } from "./toolsListingData";

const SearchBar = dynamic(
  () => import("@ft/components/common/SearchBar/SearchBar"),
);

const ToolsList = () => {
  const listData = useMemo(() => toolsListData.filter((tool) => tool.list), []);
  const [toolsList, setToolsList] = useState<ITools[]>();
  const [textInput, setTextInput] = useState<string | undefined>();

  const handleSearch = async (searchInput: string) => {
    const Fuse = await import("fuse.js");
    const searchOptions = {
      keys: ["title"],
    };
    const fuse = new Fuse.default(listData, searchOptions);
    const results = fuse.search(searchInput);
    setToolsList(results.map((result) => result.item));
  };

  const onSearch = (searchInput: string | undefined) => {
    setTextInput(searchInput);
    if (!searchInput) {
      setToolsList(listData);
      return;
    }
    handleSearch(searchInput);
  };

  return (
    <>
      <div style={{ marginBottom: "50px" }}>
        <H1Tag heading="Empower Your Work with Our Tools" />
      </div>
      <SearchBar onSearch={onSearch} autoFocus={false} allowClear={true} />
      <RenderToolsList
        toolsList={toolsList ?? listData}
        textInput={textInput}
      />
    </>
  );
};

export default ToolsList;
