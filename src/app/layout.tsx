import { AntdRegistry } from "@ant-design/nextjs-registry";
import GoogleAnalytics from "@ft/components/Analytics/GoogleAnalytics/GoogleAnalytics";
import MainHeader from "@ft/components/Header";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

import StoreProvider from "./StoreProvider";

const Feedback = dynamic(() => import("@ft/components/Feedback/Feedback"));
const MainFooter = dynamic(() => import("@ft/components/Footer"));
const LazyBootstrapComponentCss = dynamic(
  () => import("./LazyBootstrapComponentCss"),
);

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LazyBootstrapComponentCss />
      <StoreProvider>
        <AntdRegistry>
          <body className={inter.className}>
            <MainHeader />
            <div className="row" style={{ minHeight: "100vh" }}>
              <div className="col-lg-1 col-md-2 col-sm-12 col-12"></div>
              <div className="col-lg-10 col-md-8 col-sm-12 col-12">
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  {children}
                </div>
              </div>
              <div className="col-lg-1 col-md-2 col-sm-12 col-12"></div>
              <Feedback />
            </div>
            <MainFooter />
          </body>
        </AntdRegistry>
      </StoreProvider>
      <GoogleAnalytics />
      {/* <MonetagAds /> */}
      <Analytics mode={"production"} />
    </html>
  );
}
