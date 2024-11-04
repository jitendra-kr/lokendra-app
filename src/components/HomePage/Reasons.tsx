import { STRING_CONSTANTS } from "@ft/constants/stringConstants";
import { H2Tag } from "../common/HtmlTags/H2Tag";

export default function Reasons() {
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
    <>
      <div style={{ marginTop: "100px" }}>
        <H2Tag heading="5 Reasons Why Our Suite of Online Tools is a Must-Have"></H2Tag>
      </div>
      <ul>
        {reasons.map((r, i) => (
          <li
            key={i}
            style={{
              padding: "4px",
              color: "#000",
              fontSize: "22px",
            }}
          >
            {r}
          </li>
        ))}
      </ul>
    </>
  );
}
