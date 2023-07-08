import { Layout } from "antd";

import React from "react";
import { ToolsList } from "../../src/components";
const { Content } = Layout;

function Tools() {
  return (
    <Content>
      <ToolsList />
    </Content>
  );
}

export default Tools;
