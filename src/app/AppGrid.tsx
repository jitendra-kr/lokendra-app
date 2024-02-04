import { Col, Row } from "antd";

export default function AppGrid({ children }: React.PropsWithChildren) {
  return (
    <Row style={{ marginTop: "25px", marginLeft: "5px", marginRight: "5px" }}>
      <Col xs={24} sm={24} md={2} lg={2} xl={2} xxl={2}></Col>
      <Col xs={24} sm={24} md={20} lg={20} xl={20} xxl={20}>
        {children}
      </Col>
      <Col xs={24} sm={24} md={2} lg={2} xl={2} xxl={2}></Col>
    </Row>
  );
}
