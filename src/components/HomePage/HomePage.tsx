import dynamic from "next/dynamic";
const ToolsList = dynamic(() => import("../tools/ToolsList/ToolsList"));
const Reasons = dynamic(() => import("./Reasons"));
const WhatIsFireboxTools = dynamic(() => import("./WhatIsFireboxTools"));

export function HomePage() {
  return (
    <>
      <ToolsList />
      <Reasons />
      <WhatIsFireboxTools />
    </>
  );
}
