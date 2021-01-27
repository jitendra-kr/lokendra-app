import React, { useEffect, useState } from "react";
import { Alert, Layout } from "antd";
import { httpPut } from "../../src/utils/http";
// import { useRouter } from "next/router";
import { Login } from "../../src/components"
import Page404 from "../404";
const { Content } = Layout;

function emailVerifyPage() {

    const [verified, setVerified] = useState(false);
    const [isPage404, setPage404] = useState(false);

    useEffect(async () => {

        const url = window.location.href.split("?")[1];
        const auth = url ? url.replace("auth=", "") : '';

        if (auth) {
            localStorage.setItem("auth", auth);
            try {
                await httpPut({ url: "user/verify/email" });
                localStorage.removeItem('user');
                localStorage.removeItem('auth');
                setVerified(true);
            } catch (e) {
                setPage404(true)
            }
            localStorage.removeItem("auth");
        }

    }, []);

    return verified ? (
        <Content>

            <Alert
                style={{ textAlign: 'center', width: "50%", margin: 'auto'}}
                 closable message="Email verified successfully" type="success" />

            <Login style={{ marginTop: "30px" }} />

        </Content>
    ) : isPage404 ? <Page404 /> : <Content></Content>
}

export async function getStaticProps() {
    return {
        props: {}
    }
}

export default emailVerifyPage;
