import { AntdRegistry } from "@ant-design/nextjs-registry";
import {
  GoogleAnalytics,
  MainFooter,
  MainHeader,
  MonetagAds,
} from "@ft/components";
import { Analytics } from "@vercel/analytics/react";
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
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </head>
      <StoreProvider>
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
      </StoreProvider>
      <GoogleAnalytics />
      <MonetagAds />
      <Analytics mode={"production"} />
    </html>
  );
}
