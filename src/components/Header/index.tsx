import { STRING_CONSTANTS } from "@ft/constants/stringConstants";
import styles from "@ft/styles/MainHeader.module.css";
import Link from "next/link";

function MainHeader() {
  return (
    <header className={styles.header} id="heading">
      <Link
        href="/"
        style={{
          color: "#ffffff",
          fontSize: "x-large",
          fontFamily: "math",
          cursor: "pointer",
          textTransform: "capitalize",
        }}
      >
        {STRING_CONSTANTS.global.appName}
      </Link>
      <Link
        href={"#feedback"}
        style={{
          color: "#ffffff",
          fontFamily: "math",
          cursor: "pointer",
          textTransform: "capitalize",
        }}
      >
        Give Feedback
      </Link>
    </header>
  );
}

export default MainHeader;
