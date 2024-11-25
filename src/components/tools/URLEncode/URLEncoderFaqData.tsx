import { FaqProps } from "@ft/components/common/Faq";
import Link from "next/link";

function CanIUseYourToolForSocialMediaSharing() {
  return (
    <p>
      Yes, our tool can be used to encode URLs for sharing on platforms like
      <Link href={"https://www.facebook.com"}> Facebook</Link>,{" "}
      <Link href={"https://x.com"}> X</Link>, and{" "}
      <Link href={"https://www.linkedin.com"}> LinkedIn</Link>.
    </p>
  );
}

const URLEncoderFaqData: FaqProps[] = [
  {
    question: "What is a URL encoder?",
    ans: "A URL encoder is a tool that transforms special characters in a URL into a format suitable for transmission over the internet.",
  },
  {
    question: "Why do I need to encode a URL?",
    ans: "URL encoding is crucial for ensuring that URLs are sent accurately, particularly when they include special characters such as spaces, ampersands, or other symbols.",
  },
  {
    question: "How does your URL encoder work?",
    ans: "Input the URL you want to encode, and our tool will automatically convert the special characters into their encoded equivalents.",
  },
  {
    question: "What are common use cases for URL encoding?",
    ans: "URL encoding is commonly used when sending data via query strings, creating safe links, and embedding URLs in HTML or JavaScript.",
  },
  {
    question: "Can I use your tool to encode URLs for social media sharing?",
    ans: <CanIUseYourToolForSocialMediaSharing />,
  },
];

export default URLEncoderFaqData;
