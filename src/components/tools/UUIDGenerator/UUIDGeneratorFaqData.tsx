import { FaqProps } from "@ft/components/common/Faq";
import Link from "next/link";

function WhatIsUUID() {
  return (
    <>
      UUIDs ({" "}
      <Link
        href={"https://en.wikipedia.org/wiki/Universally_unique_identifier"}
      >
        Universally Unique Identifiers
      </Link>{" "}
      ) are special codes used to uniquely identify data in computer systems.
      They ensure no two pieces of information have the same identifier, which
      is crucial for database management and application development.
    </>
  );
}

const UUIDGeneratorFaqData: FaqProps[] = [
  {
    question: "What are UUIDs and why are they important?",
    ans: <WhatIsUUID />,
  },
  {
    question: "Are the generated UUIDs truly unique?",
    ans: "Yes, our generator produces Version 4 UUIDs, which are created using random numbers. This significantly minimizes the chance of collisions with existing UUIDs.",
  },
  {
    question: "Is this online tool safe to use?",
    ans: "Absolutely! Our generator operates entirely online and does not require software downloads. It focuses solely on creating unique identifiers without accessing your data.",
  },
  {
    question: "How do I use the generated UUIDs?",
    ans: "It's easy! Simply copy the generated UUIDs from your screen or download them as a text file.",
  },
];
export default UUIDGeneratorFaqData;
