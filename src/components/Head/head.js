import Head from 'next/head'
import { get } from "lodash";
import React, { useEffect, useState } from "react";

export default function AppHead(props) {

    const [author, setAuthor] = useState('Jimmy Point, Jitendra');

    const [url, seturl] = useState('http://www.jimmypoint.com');

    const [title, setTitle] = useState('Jimmy Point');


    useEffect(() => {
        let name = author;
        if(get(props, 'data.author.firstName')) {
            name = get(props, 'data.author.firstName');
        }
        if (get(props, 'data.author.firstName') && get(props, 'data.author.lastName')) {
            name += ' ' + get(props, 'data.author.lastName');
        }

        seturl(window.location.href);
        setAuthor(name);

        if(/login|register/.test(url)) {
            setTitle('Jimmy Point - Log In or Sign Up')
        }

        if(/reset-password/.test(url)) {
            setTitle('Reset Your Password | Jimmy Point')
        }

        if(props.data.title || props.data.meta_keywords) {
            setTitle(props.data.meta_keywords || props.data.title)
        }

    }, []);

    const description = () => {
        const defaultDescription = "Jimmy Point is the largest, most trusted open platform where you can learn and share knowledge.";
        return get(props, 'data.meta_description', defaultDescription);
    }


    return <Head>
        <title>{title}</title>

        <meta charSet="utf-8" />

        <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
            key="viewport" />
        <meta
            property="og:type"
            content="website"
            key="viewport"
             />
        <meta
            property="og:site_name"
            content="Jimmy Point"
            key="viewport"/>
        <meta
            property="og:image"
            itemProp="image primaryImageOfPage"
            content="https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/master/Jimmypoint.png"
            key="viewport" />
        <meta
            property="og:type"
            content="article"
            key="viewport"/>

        <meta
            property="og:url"
            content={url }
            key="viewport"/>

        <meta
            property="og:title"
            content={props.data.meta_keywords || "Jimmypoint"}
            key="viewport" />

        <meta
            name="title"
            content={props.data.meta_keywords || "Jimmypoint"}
            key="viewport" />
        <meta
            name="description"
            content={description()}
            key="viewport"/>

        <meta
            property="twitter:title"
            content={props.data.meta_keywords || "Jimmypoint"}
            key="viewport" />
        <meta
            property="twitter:description"
            content={description()}
            key="viewport"/>

        <meta
            property="al:web:url"
            content={props.data.url || "Jimmypoint"}
            key="viewport" />

        <meta
            name="author"
            content={author}
            key="viewport"/>


    </Head>;
}