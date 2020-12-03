import '../src/index.css'
import '../styles/BlogList.module.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/antd.css';
import React, { useState } from 'react';

import axios from "axios";
import { UserContext } from '../src/contexts/UserContext'
import { getUser } from '../src/utils'
import { messageDestroy } from "../src/utils"
import Config from '../src/config/env';

import { MainHeader } from "../src/components"

export default function MyApp({ Component, pageProps }) {

  axios.interceptors.request.use(config => {

    config.baseURL = Config.getData().default.baseUrl;
    // if (config.method === 'get') {
    //   isLoading++;
    //   setLoader(true);
    // }

    return config;

  });

  axios.interceptors.response.use(config => {

    // isLoading--;
    // if (isLoading <= 0 ) {
    //   setLoader(false);
    // }
    messageDestroy();
    return config;
  }, (err) => {

    messageDestroy();
    // setLoader(false);
    return Promise.reject(err);

  });


  const [user, setUser] = useState(getUser());

    return (


        <UserContext.Provider value={[user, setUser]}>

        <MainHeader />
        <Component {...pageProps} />

        </UserContext.Provider>


      )
  }
