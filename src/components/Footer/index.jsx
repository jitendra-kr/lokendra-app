import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;




const MainFooter = ({ appName }) => {

    return (
        <Footer className = "site-footer" style={{ textAlign: 'center',  position: "relative", bottom: "0"}}>Jimmy Point ©2018</Footer>
  )
};

export default MainFooter;
