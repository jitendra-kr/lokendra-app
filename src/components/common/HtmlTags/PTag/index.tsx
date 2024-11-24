import PTagStyles from "./PTag.module.css";

export function PTag({
  text,
  linkText,
  linkUrl,
  styles,
}: {
  text: string;
  linkUrl?: string;
  linkText?: string;
  styles?: React.CSSProperties;
}) {
  const modifiedText = linkText
    ? text.replace(linkText, `<a href="${linkUrl}">${linkText}</a>`)
    : text;
  return (
    <p className={PTagStyles.text} style={styles}>
      {modifiedText}
    </p>
  );
}
