import { Layout, Button } from 'antd';


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
                    Go to home page
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