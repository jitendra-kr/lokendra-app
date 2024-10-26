"use client";
import { H3Tag } from "@ft/components/common/HtmlTags/H3Tag";
import { Image } from "antd";

export function CalculationFormula({
  alt,
  src,
  heading,
}: {
  alt: string;
  src: string;
  heading: string;
}) {
  return (
    <div>
      <H3Tag heading={heading}></H3Tag>
      <Image alt={alt} src={src}></Image>
    </div>
  );
}
