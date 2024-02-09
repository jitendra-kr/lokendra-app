import { AntdRegistry } from "@ant-design/nextjs-registry";
import { GoogleAnalytics, MainFooter, MainHeader } from "@ft/components";
import { Analytics } from "@vercel/analytics/react";
import "bootstrap/dist/css/bootstrap-grid.css";
import { Inter } from "next/font/google";
import StoreProvider from "./StoreProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <AntdRegistry>
          <body className={inter.className}>
            <MainHeader />
            <div className="row" style={{ marginTop: "50px" }}>
              <div className="col-lg-1 col-md-2 col-sm-12 col-12"></div>
              <div className="col-lg-10 col-md-8 col-sm-12 col-12">
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  {children}
                </div>
              </div>
              <div className="col-lg-1 col-md-2 col-sm-12 col-12"></div>
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
