import Head from 'next/head'
import { get } from "lodash";
import React, { useEffect, useState } from "react";

export default function AppHead(props) {

    const [author, setAuthor] = useState('Jimmypoint, jitendra');

    const [url, seturl] = useState('http://www.jimmypoint.com');


    useEffect(() => {
        let name = author;
        if(get(props, 'data.author.firstName')) {
            name = get(props, 'data.author.firstName');
        }
        if (get(props, 'data.author.firstName') && get(props, 'data.author.lastName')) {
            name += ' ' + get(props, 'data.author.lastName');
        }
        seturl(window.location.href);
        setAuthor(name)
    }, []);

    const description = () => {
        const defaultDescription = "Jimmy Point is the largest, most trusted open platform where you can learn and share knowledge.";
        return get(props, 'data.meta_description', defaultDescription);
    }


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
            itemProp="image primaryImageOfPage"
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
            content={description()} />

        <meta
            property="twitter:title"
            content={props.data.meta_keywords || "Jimmypoint"} />
        <meta
            property="twitter:description"
            content={description()}/>

        <meta
            property="al:web:url"
            content={props.data.url || "Jimmypoint"} />

        <meta
            name="author"
            content={author} />


    </Head>;
}