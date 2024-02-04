import styles from "@ft/styles/MainFooter.module.css";
import Link from "next/link";
import { STRING_CONSTANTS } from "../../constants";

const MainFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className="row">
        <div className="col-lg-3" style={{ marginTop: "30px" }}>
          <Link href="/fireboxtools-privacy-policy">
            <span style={{ color: "#ffffff", cursor: "pointer" }}>
              Privacy Policy
            </span>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        {STRING_CONSTANTS.global.appName} © {new Date().getFullYear()}. All
        Rights Reserved
      </div>
    </footer>
  );
};

export default MainFooter;
