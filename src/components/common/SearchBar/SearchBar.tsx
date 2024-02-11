"use client";
import { toolsListData } from "@ft/components/tools/ToolsList";
import { Col, Input, Row } from "antd";
import { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";

export function SearchBar({
  allowClear = false,
  autoFocus = false,
  onSearch,
}: {
  allowClear?: boolean;
  autoFocus?: boolean;
  onSearch: (value: string | undefined) => void;
}) {
  const [placeholder, setPlaceholder] = useState<string>("Search...");

  useEffect(() => {
    const data = toolsListData.filter((tool) => tool.list);
    const randomTool = data[Math.floor(Math.random() * data.length)];
    setPlaceholder(`Search... ( Ex- ${randomTool.title})`);
  }, []);

  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "40px",
      }}
    >
      <Col xs={24} sm={24} md={18} lg={10} xl={10}>
        <Input
          style={{
            borderRadius: "10px",
            border: "2px solid #D3D3D3",
          }}
          size="large"
          autoFocus={autoFocus}
          placeholder={placeholder}
          prefix={<FcSearch />}
          onChange={(value) => {
            onSearch(value.target.value);
          }}
          allowClear={allowClear}
        />
      </Col>
    </Row>
  );
}
