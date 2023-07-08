import { Col, Layout, Row } from "antd";
import Link from "next/link";
import router from "next/router";
import { useEffect } from "react";
import { resetInput } from "../../common/state/tools";
import { STRING_CONSTANTS } from "../../constants";
import { useAppDispatch } from "../../hooks";

const { Header } = Layout;

function MainHeader() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleRouteChange = () => {
      // Dispatch reset action when the route changes
      dispatch(resetInput());
    };

    // Add event listener for route change
    router.events.on("routeChangeComplete", handleRouteChange);

    // Clean up the event listener on component unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <Header>
      <Row>
        <Col span={24}>
          <Link
            href="/"
            style={{
              color: "#ffffff",
              fontSize: "x-large",
              fontFamily: "math",
              cursor: "pointer",
            }}
          >
            {STRING_CONSTANTS.global.appName}
          </Link>
        </Col>
      </Row>
    </Header>
  );
}

export default MainHeader;
