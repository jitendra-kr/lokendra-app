import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;




const MainFooter = ({ appName }) => {

    return (
        <Footer className = "site-footer" style={{
          textAlign: 'center',
          position: "relative",
          bottom: "0",
          color: "#ffffff"}}>
        {/* Lokendra © 2019. All Rights Reserved */}
          </Footer>
  )
};

export default MainFooter;
