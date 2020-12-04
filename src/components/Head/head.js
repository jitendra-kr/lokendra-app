import Head from 'next/head'

export default function AppHead(props) {

    return <Head>
        <title>{props.data.title || "Jimmypoint"}</title>

        <meta charSet="utf-8" />

        <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta
            property="og:site_name"
            content="Jimmypoint"/>
        <meta
            property="og:type"
            content="article"/>

        <meta
            property="og:url"
            content={props.data.url || "Jimmypoint"}/>

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
            content={props.data.author || "Jimmypoint"} />


    </Head>;
}