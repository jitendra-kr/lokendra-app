import Link from "next/link";

export function HowThisToolIsConvertingNumberToWords() {
  return (
    <p>
      We are utilizing the fantastic{" "}
      <Link href={"https://www.npmjs.com/package/to-words"}>to-words</Link> npm
      package for all our number-to-word conversion needs.
    </p>
  );
}
