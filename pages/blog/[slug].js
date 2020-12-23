import { ReadBlog } from "../../src/components"
// import { httpGet } from "../../src/utils/http";

function readlog({posts}) {
    return <ReadBlog blogData={posts} />
}

export async function getStaticPaths() {

    const url = `https://jimmypoint-server-1.herokuapp.com/api/blog-management/blogs?staticPaths=true`;

    let response = await fetch(url);
    response = await response.json()
    const paths = response.result.map((data) => ({
        params: { slug: data.slug },
      }))

    return {
        paths,
        fallback: false
      }
  }

  export async function getStaticProps({ params }) {

    const url = `https://jimmypoint-server-1.herokuapp.com/api/blog-management/blog-detail/${params.slug}`;

    let response = await fetch(url);
    response = await response.json()

    return { props: { posts: response } }
  }

export default readlog
