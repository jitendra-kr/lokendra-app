"use client";
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";
import Input from "antd/es/input/Input";

export default function SearchBar({
  allowClear = false,
  autoFocus = false,
  onSearch,
}: {
  allowClear?: boolean;
  autoFocus?: boolean;
  onSearch: (value: string | undefined) => void;
}) {
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
          placeholder={"Search... (Ex- UUID Generator)"}
          onChange={(value) => {
            onSearch(value.target.value);
          }}
          allowClear={allowClear}
        />
      </Col>
    </Row>
  );
}
