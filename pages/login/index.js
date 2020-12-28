import { Login } from "../../src/components"

function LoginPage() {
    return <Login />
}

export async function getStaticProps() {
    return {
        props: {}
    }
}

export default LoginPage;
