"use client";
import { H1Tag } from "@ft/components/common";
import { SearchBar } from "@ft/components/common/SearchBar";
import { useState } from "react";
import { RenderToolsList } from "./RenderToolsList";
import { ITools, toolsListData } from "./toolsListingData";

const ToolsList = () => {
  const [toolsList, setToolsList] = useState<ITools[]>(
    toolsListData.filter((tool) => tool.list),
  );
  const [textInput, setTextInput] = useState<string | undefined>();

  const onSearch = (searchInput: string | undefined) => {
    setTextInput(searchInput);
    if (!searchInput) {
      const data = toolsListData.filter((tool) => tool.list);
      setToolsList(data);
      return;
    }
    handleSearch(searchInput);
  };

  const handleSearch = async (searchInput: string) => {
    const Fuse = await import("fuse.js");
    const searchOptions = {
      keys: ["title"],
    };
    const fuse = new Fuse.default(toolsList, searchOptions);
    const results = fuse.search(searchInput);
    setToolsList(results.map((result) => result.item));
  };

  return (
    <>
      <div style={{ marginBottom: "50px" }}>
        <H1Tag heading="Empower Your Work with Our Tools" />
      </div>
      <SearchBar onSearch={onSearch} autoFocus={false} allowClear={true} />
      <RenderToolsList toolsList={toolsList} textInput={textInput} />
    </>
  );
};

export default ToolsList;
