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
        }}
      >
        {STRING_CONSTANTS.global.appName}
      </Link>
      {false && (
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
      )}
    </header>
  );
}

export default MainHeader;
