import { ReadBlog } from "../../src/components"
import { sample, get } from "lodash";
import Config from '../../src/config/env';
const baseUrls = Config.getData().default.baseUrl;

function readlog({ posts }) {

    console.log('readlog', posts)

    return <ReadBlog data={posts} />
}

export async function getStaticPaths() {
    const url = `${sample(baseUrls)}blog-management/blogs?staticPaths=true`;
    let response = await fetch(url);
    response = await response.json()
    const paths = response.result.map((data) => ({
        params: { slug: data.slug },
    }))

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {

    const url = `${sample(baseUrls)}blog-management/blog-detail/${params.slug}`;


    let response = await fetch(url);

    response = await response.json()
    console.log(url,  response.statusCode, Object.keys(get(response, 'result')))

    return {
        props: {
            posts: response
        },
        revalidate: 60
    }
}

export default readlog
