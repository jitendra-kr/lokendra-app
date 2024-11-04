import Link from "next/link";
import { H2Tag } from "../common/HtmlTags/H2Tag";

export default function WhatIsFireboxTools() {
  return (
    <div style={{ marginBottom: "80px" }}>
      <H2Tag heading="What is FireboxTools?" />
      <p style={{ fontSize: "22px", marginTop: "20px" }}>
        FireboxTools is a powerful and secure online platform which comes with
        such tools as code formatter, minifier, beautifier, UUID generate,
        converter, and many more. Discover a suite of time-saving tools for both
        technical and non-technical users on this platform. Access various tools
        easily through our
        <Link href={"#heading"} style={{ color: "#2962ff" }}>
          {" "}
          search functionality{" "}
        </Link>
        to find the best tools for your needs.
      </p>
    </div>
  );
}
