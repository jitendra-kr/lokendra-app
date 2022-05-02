import { ResetPassword } from "../../src/components";

function ResetPasswordPage() {
    return <ResetPassword data = {{title: 'Reset Your Password | Jimmypoint'}} />
}

export async function getStaticProps() {

    return {
        props: {}
    }
}

export default ResetPasswordPage;
