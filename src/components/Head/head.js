import Head from 'next/head'
import React, { useEffect, useState } from "react";

export default function AppHead(props) {

    const [author, setAuthor] = useState('Jimmypoint');

    const [url, seturl] = useState('http://www.jimmypoint.com');
    useEffect(() => {
        let name = author;
        if(props.data.author.firstName) {
            name = props.data.author.firstName;
        }
        if (props.data.author.firstName && props.data.author.lastName) {
            name += ' ' + props.data.author.lastName;
        }
        seturl(window.location.href);
        setAuthor(name)
      }, []);


    return <Head>
        <title>{props.data.title || "Jimmypoint"}</title>

        <meta charSet="utf-8" />

        <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta
            property="og:type"
            content="website" />
        <meta
            property="og:site_name"
            content="Jimmy Point"/>
        <meta
            property="og:image"
            itemprop="image primaryImageOfPage"
            content="https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/master/Jimmypoint.png" />
        <meta
            property="og:type"
            content="article"/>

        <meta
            property="og:url"
            content={url }/>

        <meta
            property="og:title"
            content={props.data.meta_keywords || "Jimmypoint"} />

        <meta
            name="title"
            content={props.data.meta_keywords || "Jimmypoint"} />
        <meta
            name="description"
            content={props.data.meta_description || "Jimmypoint"} />

        <meta
            property="twitter:title"
            content={props.data.meta_keywords || "Jimmypoint"} />
        <meta
            property="twitter:description"
            content={props.data.meta_description || "Jimmypoint"}/>

        <meta
            property="al:web:url"
            content={props.data.url || "Jimmypoint"} />

        <meta
            name="author"
            content={author} />


    </Head>;
}