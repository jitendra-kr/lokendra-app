import Head from 'next/head'
import { get } from "lodash";

export default function AppHead(props) {

    let name;
    if(get(props, 'data.author.firstName')) {
        name = get(props, 'data.author.firstName');
    }
    if (get(props, 'data.author.firstName') && get(props, 'data.author.lastName')) {
        name += ' ' + get(props, 'data.author.lastName');
    }

    const author = name || 'Fireboxtools';

    const title = get(props, 'data.title', 'Fireboxtools');

    const image = get(props, 'data.image', "https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/master/Jimmypoint-m.png");
    const description = get(props, 'data.meta_description', `Boost productivity, skills with our versatile platform, offering a collection of useful utilities. Unlock your potential and streamline your work effortlessly`);

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
            content="Fireboxtools"
            key="og:site_name"/>
        <meta
            property="og:image"
            content={image}
            key="og:image" />
        <meta
            property="og:image:secure_url"
            content={image}
            key="og:image:secure_url" /> 
        <meta 
            property="og:image:width" 
            content="720" />
        <meta
            property="og:image:height" 
            content="404" /> 
        <meta
            property="og:type"
            content="article"
            key="og:type"/>
        <meta property="article:author" 
            content="https://www.facebook.com/jimmypoint2019"
            key="article:author"/ >

        <meta
            property="og:url"
            content={`${props.data.url}/` }
            key="og:url"/>

        <meta
            property="og:title"
            content={title}
            key="og:title" />

        <meta 
            property="fb:app_id" 
            content="184066903055457"
            key="fb:app_id"/>            

        <meta
            name="title"
            content={title}
            key="title" />
        <meta
            property="og:description"
            content={description}
            key="og:description"/>
        <meta
            name="description"
            content={description}
            key="description"/>            

        <meta
            property="twitter:title"
            content={title}
            key="twitter:title" />
        <meta
            property="twitter:description"
            content={description}
            key="twitter:description"/>

        <meta
            property="al:web:url"
            content={props.data.url}
            key="al:web:url" />

        <meta
            name="author"
            content={author}
            key="author"/>


    </Head>;
}