import Head from 'next/head'
import { get } from "lodash";
import React, { useEffect, useState } from "react";

export default function AppHead(props) {

    const [author, setAuthor] = useState('Jimmypoint, Jitendra');

    const [url, seturl] = useState('http://www.jimmypoint.com');

    const [title, setTitle] = useState('Jimmypoint');

    const defaultImage = "https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/master/Jimmypoint-m.png"

    const image = get(props, 'data.image', defaultImage);

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
            setTitle('Jimmypoint - Log In or Sign Up')
        }

        if(/reset-password/.test(url)) {
            setTitle('Reset Your Password | Jimmypoint')
        }

        if(props.data.title || props.data.meta_keywords) {
            setTitle(props.data.meta_keywords || props.data.title)
        }

    }, []);

    const description = () => {
        const defaultDescription = "Jimmypoint is the largest, most trusted open platform where you can learn and share knowledge.";
        return get(props, 'data.meta_description', defaultDescription);
    }

    const metaKeywords = () => {
        return get(props, 'data.meta_keywords', title);
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
            key="og:type"
             />
        <meta
            name="robots"
            content="index, follow" />
        <meta
            property="og:site_name"
            content="Jimmypoint"
            key="og:site_name"/>
        <meta
            property="og:image"
            content={image}
            key="og:image" />
        <meta
            property="og:type"
            content="article"
            key="og:type"/>

        <meta
            property="og:url"
            content={url }
            key="og:url"/>

        <meta
            property="og:title"
            content={metaKeywords()}
            key="og:title" />

        <meta
            name="title"
            content={metaKeywords()}
            key="title" />
        <meta
            name="description"
            content={description()}
            key="description"/>

        <meta
            property="twitter:title"
            content={metaKeywords()}
            key="twitter:title" />
        <meta
            property="twitter:description"
            content={description()}
            key="twitter:description"/>

        <meta
            property="al:web:url"
            content={props.data.url || "Jimmypoint"}
            key="al:web:url" />

        <meta
            name="author"
            content={author}
            key="author"/>


    </Head>;
}