import { Login } from "../../src/components"

function LoginPage() {
    return <Login data = {{title: 'Jimmypoint - Log In or Sign Up'}}/>
}

export async function getStaticProps() {
    return {
        props: {}
    }
}

export default LoginPage;
