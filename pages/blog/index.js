import { BlogList } from "../../src/components"
import Config from '../../src/config/env';
import { sample } from "lodash";
const baseUrls = Config.getData().default.baseUrl;

function HomePage({ blog }) {
  return <BlogList data={blog} />
}

export async function getStaticProps() {

  const url = `${sample(baseUrls)}blog-management/blogs`;
  let response = await fetch(url);
  response = await response.json();
  return {
    props: {
      blog: response.result
    },
    revalidate: 10
  }
}
export default HomePage
