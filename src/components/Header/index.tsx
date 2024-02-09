import styles from "@ft/styles/MainHeader.module.css";
import Link from "next/link";
import { STRING_CONSTANTS } from "../../constants";

function MainHeader() {
  return (
    <header className={styles.header}>
      <Link
        href="/"
        style={{
          color: "#ffffff",
          fontSize: "x-large",
          fontFamily: "math",
          cursor: "pointer",
          textTransform: "capitalize",
          marginLeft: "20px",
        }}
      >
        {STRING_CONSTANTS.global.appName}
      </Link>
    </header>
  );
}

export default MainHeader;
