import { ReadBlog } from "../../src/components"
import { sample, get } from "lodash";
import Config from '../../src/config/env';
const baseUrls = Config.getData().default.baseUrl;

function readlog({ posts }) {
    return posts ? <ReadBlog data={posts}/> : '';
}

export async function getStaticPaths() {
    // const url = `${sample(baseUrls)}blog-management/blogs?staticPaths=true`;
    // let response = await fetch(url);
    // response = await response.json()
    // const paths = response.result.map((data) => ({
    //     params: { slug: data.slug },
    // }))

    return {
        paths:[],
        fallback: true
    }
}

export async function getStaticProps({ params }) {

    // const url = `${sample(baseUrls)}blog-management/blog-detail/${params.slug}`;


    // let response = await fetch(url);

    // response = await response.json();

    // const result = get(response, 'result');
    // const others = {
    //     url: `https://www.jimmypoint.com/blog/${params.slug}`,
    //     title: result.title
    // }

    return {
        props: {
            posts: []
        },
        revalidate: 10
    }
}


export default readlog
