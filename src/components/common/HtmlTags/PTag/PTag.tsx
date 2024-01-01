import PTagStyles from "./PTag.module.css";

export function PTag({
  text,
  linkText,
  linkUrl,
}: {
  text: string;
  linkUrl?: string;
  linkText?: string;
}) {
  const modifiedText = linkText
    ? text.replace(linkText, `<a href="${linkUrl}">${linkText}</a>`)
    : text;
  return <p className={PTagStyles.text}>{modifiedText}</p>;
}
