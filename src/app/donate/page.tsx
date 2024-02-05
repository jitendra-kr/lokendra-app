import { STRING_CONSTANTS } from "@ft/constants";
import { Layout } from "antd";
import { Metadata } from "next";
import Link from "next/link";

const { Content } = Layout;

export const metadata: Metadata = {
  title: `Support Our Free Online Tools - Donate to ${STRING_CONSTANTS.global.appName}`,
  description: `Donate to ${STRING_CONSTANTS.global.appName} and support our free online tools. Help us empower developers and enhance the coding experience.`,
};

function DonatePage() {
  return (
    <Content style={{ height: "200vh" }}>
      <h1
        style={{ textAlign: "center", marginBottom: "50px", marginTop: "50px" }}
      >
        Support Our Free Online Tools
      </h1>
      <p style={{ fontSize: "18px" }}>
        At {STRING_CONSTANTS.global.appName}, we are dedicated to providing
        free, user-friendly online tools that empower developers, programmers,
        and tech enthusiasts. Our collection of tools, including JSON parsers,
        JSON minifiers, JSON to XML converters, XML to JSON converters, UUID
        generators, and <Link href={"/"}>more</Link>, are designed to simplify
        your work and enhance your experience.
      </p>
      <h2
        style={{ textAlign: "center", marginBottom: "50px", marginTop: "80px" }}
      >
        Why Donate
      </h2>
      <p style={{ fontSize: "18px" }}>
        Our collection of online tools needs constant upkeep and resources to be
        expanded. You may directly support the creation, enhancement, and
        accessibility of these tools for users all around the world by making
        donations. Your assistance enables us to maintain efficient operations,
        pay for server costs, and create new features to satisfy your changing
        demands.
      </p>

      <h2
        style={{ textAlign: "center", marginBottom: "50px", marginTop: "80px" }}
      >
        How Your Donation Helps:
      </h2>

      <ul style={{ fontSize: "18px" }}>
        <li>
          Infrastructure Maintenance: Donations help us keep our servers up and
          running, providing a smooth experience for all users.
        </li>
        <li>
          Tool Improvements: Your contributions enable us to improve existing
          tools and create new ones in response to user feedback and emerging
          technologies.
        </li>
        <li>
          Accessibility: Donations enable us to keep our tools free and
          available to everyone, regardless of their financial position.
        </li>
      </ul>

      <p style={{ marginTop: "80px", marginBottom: "80px", fontSize: "18px" }}>
        Thank you for being a part of {STRING_CONSTANTS.global.appName} and
        supporting our mission to make coding easier and more efficient for
        developers everywhere. Together, we&apos;re building a stronger, more
        connected tech community.
      </p>
    </Content>
  );
}

export default DonatePage;
