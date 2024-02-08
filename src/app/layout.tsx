import { AntdRegistry } from "@ant-design/nextjs-registry";
import {
  GoogleAnalytics,
  MainFooter,
  MainHeader,
  MonetagAds,
} from "@ft/components";
import { Analytics } from "@vercel/analytics/react";
import "bootstrap/dist/css/bootstrap.min.css";
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
    <StoreProvider>
      <html lang="en">
        <AntdRegistry>
          <body className={inter.className}>
            <MainHeader />
            <div className="row" style={{ marginTop: "50px" }}>
              <div className="col-lg-1 col-md-2 col-sm-12 col-12"></div>
              <div className="col-lg-10 col-md-8 col-sm-12 col-12">
                {children}
              </div>
              <div className="col-lg-1 col-md-2 col-sm-12 col-12"></div>
            </div>
            <MainFooter />
          </body>
        </AntdRegistry>
        <GoogleAnalytics />
        <MonetagAds />
        <Analytics mode={"production"} />
      </html>
    </StoreProvider>
  );
}
