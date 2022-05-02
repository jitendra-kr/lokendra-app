import { Register } from "../../src/components"

function RegisterPage() {
    return <Register data = {{title: 'Jimmypoint - Log In or Sign Up'}}/>
}

export async function getStaticProps() {

    return {
        props: {}
    }
}

export default RegisterPage;
