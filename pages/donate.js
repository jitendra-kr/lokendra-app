import { Image, Layout } from 'antd';
import {AppHead} from "../src/components";

const { Content } = Layout;

function DonatePage() {
    return (<Content style={{ padding: "50px 50px" }}  >
        <AppHead data={{}}/>
        <div className="row" >
        <div className="col-lg-2" />
        <div className="col-lg-8">
            <h1 style={{ textAlign: 'center' }}>Help us do more</h1>
            <p>
                Thanks for your interest in supporting my work.
                I don’t charge for the content on this site
                This work takes a lot of time,
                and your donation will allow me to spend even more time creating the content people
                enjoy and working on open source projects that help people do their jobs.
                Jimmy Point is a highly efficient education nonprofit.
                When you donate to Jimmy Point, you help people learn new skills.
            </p>
            <div style={{ marginTop: '50px' }} >
                <h5 style={{ textAlign: 'center' }}>Support by UPI id </h5>
                <h6 style={{ textAlign: 'center' }}>Jitendrarajput588@okaxis </h6>
            </div>
            <hr></hr>
            <div style={{ marginTop: '50px' }}>
                <h5 style={{ textAlign: 'center' }}>Support by deposit to account</h5>
                <h6 style={{ textAlign: 'center' }}>Name: Jitendra Kumar </h6>
                <h6 style={{ textAlign: 'center' }}>Bank Name: Axis Bank</h6>
                <h6 style={{ textAlign: 'center' }}>Account No: 915010028640077</h6>
                <h6 style={{ textAlign: 'center' }}>IFSC: UTIB0002501 </h6>
            </div>
            <hr></hr>
            <div style={{ marginTop: '50px' }}>
                <h5 style={{ textAlign: 'center' }}>Support by QR code</h5>
                <div style={{ textAlign: 'center' }}>

                    <Image
                        src="images/paytmqr.jpeg"
                    />
                </div>
            </div>
        </div>
        <div className="col-lg-2" />
    </div>
    </Content>)
}

export async function getStaticProps() {

    return {
        props: {}
    }
}

export default DonatePage