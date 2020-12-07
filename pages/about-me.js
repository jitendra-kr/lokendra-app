import { Image } from 'antd';
import Link from "next/link";

import styles from "../styles/aboutUs.module.css";

function aboutUs() {
    return (
        <div className="row" style={{ padding: "50px 50px" }}>
            <div className="col-lg-2" />
            <div className="col-lg-8">
                <h1 style={{ textAlign: 'center' }}>About me</h1>
                <p>
                    For new readers, I’m <strong> Jitendra Kumar </strong>  Founder of <Link href="/">Jimmy Point. </Link>
                I’m <strong> Software Engineer, professional blogger and Youtuber </strong>. Getting back to my educational background,  I completed <strong> MCA </strong> (2019)
                </p>

            <div style={{ marginTop: '50px' }}>
                <div style={{ textAlign: 'center' }}>
                    <Image
                        width="50%"
                        src="images/paytmqr.jpeg"
                    />
                </div>
            </div>
                <hr></hr>
                <div>

                    <h2 style={{ textAlign: 'center' }}>Connect With Me On Social Media</h2>
                    <div style={{ textAlign: 'center' }}>
                        <a href="/" target="_blank">
                            <img className={styles.img} src="https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/8c7afb9b1fac76c3f1abe6011b04a2f42604e112/facebook-jimmypoint.svg" />
                        </a>
                        <a href="/" target="_blank">
                            <img className={styles.img} src="https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/master/youtube-jimmypoint.png" />
                        </a>
                        <a href="/" target="_blank" >
                            <img className={styles.img} src="https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/master/instagram-jimmypoint.png" />
                        </a>


                    </div>
                </div>

            </div>
            <div className="col-lg-2" />
        </div>)
}

export default aboutUs;