import h3TagStyles from "./H3Tag.module.css";

export function H3Tag({
  heading,
  link = true,
}: {
  heading: string;
  link?: boolean;
}) {
  return <h3 className={h3TagStyles.heading}>{heading}</h3>;
}
