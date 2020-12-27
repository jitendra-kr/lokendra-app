import { Image, Layout } from 'antd';
import Link from "next/link";
import { AppHead } from "../src/components";

const { Content } = Layout;

import styles from "../styles/aboutUs.module.css";

function aboutUs() {
    return (
        <Content style={{ padding: "50px 50px" }}  >
            <AppHead data={{}} />
            <div className="row" >
                <div className="col-lg-2" />
                <div className="col-lg-8">
                    <h1 style={{ textAlign: 'center' }}>About me</h1>
                    <p>
                        For new readers, I’m <strong> Jitendra Kumar </strong>  Founder of <Link href="/">Jimmy Point. </Link>
                I’m <strong> Software Engineer, Professional Blogger, Investor and Trader </strong>. Getting back to my educational background,  I completed <strong> MCA </strong> (2019)
                </p>

                    <div style={{ marginTop: '50px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <Image
                                width="35%"
                                placeholder={true}
                                alt="jimmypoint"
                                src="https://github.com/jitendra-kr/jimmy-point-images/blob/master/jimmypoint-jitendra-about-me-2.jpeg?raw=true"
                            />

                        </div>
                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <h2 style={{ textAlign: 'center' }}>Connect With Me</h2>
                        <div style={{ textAlign: 'center' }}>
                            <a href="https://www.facebook.com/jimmypoint2019" target="_blank">
                                <img className={styles.img} src="https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/8c7afb9b1fac76c3f1abe6011b04a2f42604e112/facebook-jimmypoint.svg" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCsHL8zvBpc0AZs891BdPwdA" target="_blank">
                                <img className={styles.img} src="https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/master/youtube-jimmypoint.png" />
                            </a>
                            <a href="/" target="_blank" >
                                <img className={styles.img} src="https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/master/instagram-jimmypoint.png" />
                            </a>
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

export default aboutUs;