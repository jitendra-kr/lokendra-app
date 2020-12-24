import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/antd.css';

import React, { useState } from 'react';
import { useRouter } from 'next/router'

import axios from "axios";
import { sample } from "lodash";
import { LoadingOutlined } from '@ant-design/icons';
import { UserContext } from '../src/contexts/UserContext'
import { getUser } from '../src/utils'
import { messageDestroy } from "../src/utils"
import Config from '../src/config/env';
import { Layout, Spin } from "antd";

import { MainHeader, MainFooter } from "../src/components"

const antIcon = <LoadingOutlined style={{ fontSize: 70 }} spin />;
const baseUrls = Config.getData().default.baseUrl;

export default function MyApp({ Component, pageProps }) {

  const router = useRouter();
  let isLoading = 0;
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState(getUser());

  const startStopLoader = (value) => {
      setLoader(value);
  }

  axios.interceptors.request.use(config => {
    config.baseURL = sample(baseUrls);
    if (config.method === 'get') {
      if (!loader) {
        startStopLoader(true);
        isLoading++;
      }
    }
    return config;
  });

  axios.interceptors.response.use(config => {
    if (loader || isLoading) {
      startStopLoader(false);
      isLoading--;
    }
    messageDestroy();
    return config;
  }, (err) => {

    messageDestroy();
    if (loader) {
      startStopLoader(false);
    }
    return Promise.reject(err);

  });

  Router.events.on('routeChangeStart', () => {
    if (!loader) {
      startStopLoader(true);
    }
  });
  Router.events.on('routeChangeComplete', () => {
    if (loader) {
      startStopLoader(false);
    }
  });
  Router.events.on('routeChangeError', () => {
    startStopLoader(false);
  });

  return (

    <Layout>
      <Spin indicator={antIcon} className="center-loader" spinning={loader} />
      <UserContext.Provider value={[user, setUser]}>

        <MainHeader />
        <Component {...pageProps} />

      </UserContext.Provider>
      <MainFooter />
    </Layout>

  )
}
