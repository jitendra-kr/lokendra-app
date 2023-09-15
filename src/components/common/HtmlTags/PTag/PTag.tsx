import PTagStyles from "./PTag.module.css";

export function PTag({ text }: { text: string }) {
  return <p className={PTagStyles.text}>{text}</p>;
}
