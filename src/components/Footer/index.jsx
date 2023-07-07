import { Layout } from "antd";
import Link from "next/link";
import styles from "../../../styles/MainFooter.module.css";
import { STRING_CONSTANTS } from "../../constants";
const { Footer } = Layout;

const MainFooter = () => {
  return (
    <Footer className={styles.footer}>
      <div className="row">
        {/* <div className="col-lg-3">
          <Link href="/about-me">
            <span style={{ color: "#ffffff", cursor: "pointer" }}>
              About Me
            </span>
          </Link>
        </div> */}
        {/* <div className="col-lg-3">
          <Link href="/donate">
            <span style={{ color: "#ffffff", cursor: "pointer" }}>Donate</span>
          </Link>
        </div> */}
        <div className="col-lg-3">
          <Link href="/fireboxtools-privacy-policy">
            <span style={{ color: "#ffffff", cursor: "pointer" }}>
              Privacy Policy
            </span>
          </Link>
        </div>
      </div>
      <div className="m-top-30">
        {STRING_CONSTANTS.global.appName} © {new Date().getFullYear()}. All
        Rights Reserved
      </div>
    </Footer>
  );
};

export default MainFooter;
