import '../src/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import Router from 'next/router';

import axios from "axios";
import { LoadingOutlined } from '@ant-design/icons';
import { UserContext } from '../src/contexts/UserContext'
import { getUser } from '../src/utils'
import { messageDestroy } from "../src/utils"
import Config from '../src/config/env';
import { Layout, Spin } from "antd";

import { MainHeader } from "../src/components"

const antIcon = <LoadingOutlined style={{ fontSize: 70 }} spin />;

export default function MyApp({ Component, pageProps }) {

  axios.interceptors.request.use(config => {
    config.baseURL = Config.getData().default.baseUrl;
    if (config.method === 'get') {
      isLoading++;
      setLoader(true);
    }
    return config;
  });

  axios.interceptors.response.use(config => {

    isLoading--;
    if (isLoading <= 0 ) {
      setLoader(false);
    }
    messageDestroy();
    return config;
  }, (err) => {

    messageDestroy();
    setLoader(false);
    return Promise.reject(err);

  });

  let isLoading = 0;
  const [loader, setLoader] = useState(false);

  Router.onRouteChangeStart = () => {
    setLoader(true);
  };

  Router.onRouteChangeComplete = () => {
    setLoader(false);
  };

  Router.onRouteChangeError = () => {
    setLoader(false);
  };


  const [user, setUser] = useState(getUser());

    return (

      <Layout>
        <Spin indicator={antIcon} className="center-loader" spinning={ loader } />
        <UserContext.Provider value={[user, setUser]}>

        <MainHeader />
        <Component {...pageProps} />

        </UserContext.Provider>
      </Layout>

      )
  }
