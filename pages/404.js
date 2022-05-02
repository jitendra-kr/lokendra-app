import { Layout, Button } from 'antd';
import Link from "next/link";


const { Content } = Layout;


function Page404() {
    return (
        <Content >
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>Page not found</h1>
            <div style={{ textAlign: "center" }}>
                <Button
                    type="primary"
                    htmlType="submit"
                >
                    <Link href={`/`}>
                    Go to home page
                </Link>
                </Button>
            </div>
        </Content>)
}

export async function getStaticProps() {

    return {
        props: {}
    }
}

export default Page404;