import seoData from "../../seo/privacy-policy/privacy-policy.json";
import { OfflineMetaTags } from "../common";
import styles from "./PrivacyPolicy.module.css";

export function PrivacyPolicy() {
  const privacyPolicyData = [
    {
      h2: "Your Data Security, Our Top Priority",
      p: "At FireboxTools, we believe in safeguarding your privacy and ensuring the security of your data. We understand the importance of maintaining the confidentiality of your information, and we take great care to protect it throughout your experience with our tools. This privacy policy outlines the measures we have in place to ensure the utmost security for your data.",
    },
    {
      h2: "Secure and Local: How Your Data is Handled",
      p: "When you use FireboxTools, you can rest assured that your data is handled with the highest level of security. We are proud to say that our tools do not use http calls with your data. This means that all operations and processing are performed directly in your browser, without any transmission of your data outside of your local machine. We take great pride in the fact that we never send any of your data anywhere, ensuring that it remains within your complete control.",
    },
    {
      h2: "Our Commitment to Data Protection",
      p: `As part of our commitment to data protection and privacy, we have established several security measures to keep your information safe. Our tools utilize state-of-the-art encryption techniques to ensure that your data is secure during transit and storage. We adhere to industry best practices and regularly update our security protocols to stay ahead of potential threats.
We also want to emphasize that we do not collect your data for any purpose. Your privacy is our priority, and we believe in giving you full ownership and control over your information. We do not track, monitor, or store any personal data or usage patterns. Your data is yours alone, and we are dedicated to respecting your privacy by not exploiting it for any purpose.`,
    },
    {
      h2: "Transparent and Trustworthy",
      p: `FireboxTools is committed to transparency and openness. We want you to have complete confidence in our privacy practices. Our privacy policy is easily accessible on our website, providing you with detailed information about how we handle and protect your data.
If you have any questions or concerns regarding our privacy policy or data security practices, please don't hesitate to contact our support team. We are here to address any inquiries you may have and provide you with the peace of mind you deserve.`,
    },
    {
      h2: "Compliance with Regulations",
      p: "In addition to our own commitment to data protection, we also ensure compliance with relevant privacy regulations. We adhere to all applicable laws and regulations regarding data protection and privacy. This includes compliance with the General Data Protection Regulation (GDPR) and other regional data protection laws. We take privacy laws seriously and work diligently to ensure that your data is treated in full accordance with these regulations.",
    },
    {
      h2: "Your Secure Journey Starts Now!",
      p: `We understand the importance of trust and security when it comes to your data. With FireboxTools, you can be confident that your data is 100% secure and protected. Our tools are designed to provide a seamless and secure experience, enabling you to focus on your work without worrying about the safety of your information.
Thank you for choosing FireboxTools. We are committed to delivering a secure and privacy-oriented experience for all our users. Be assured that your data is handled with the utmost care and that we will continually strive to maintain the trust you have placed in us.`,
    },
  ];
  return (
    <div className="row">
      <OfflineMetaTags
        tagData={{
          metaTitle: seoData.title,
          metaDescription: seoData.description,
          link: "",
        }}
      />
      <h1 className={styles.h1tag}>Privacy and Policies</h1>
      <p className={styles.effDate}>Effective date: July 4, 2023</p>
      {privacyPolicyData.map((value) => {
        return (
          <>
            <h2 className={styles.h2tag}>{value.h2}</h2>
            <p className={styles.ptag}>{value.p}</p>
          </>
        );
      })}
    </div>
  );
}
