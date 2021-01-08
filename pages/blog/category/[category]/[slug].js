import { CategoryList } from "../../../../src/components"
import Config from '../../../../src/config/env';
import { sample } from "lodash";
const baseUrls = Config.getData().default.baseUrl;

function CategoryListPage({data}) {
  return <CategoryList data = {data}/>
  }

  export async function getStaticPaths() {
    const url = `${sample(baseUrls)}blog-management/category-list`;
    let response = await fetch(url);
    response = await response.json()
    const paths = response.result.map((data) => ({
        params: { category: data._id, slug: data.slug },
    }))

    return {
        paths,
        fallback: true
    }
}

  export async function getStaticProps({ params }) {

    const url = `${sample(baseUrls)}blog-management/categorized-blog/${params.category}`;
    let response = await fetch(url);
    response = await response.json();
    return {
      props: {
        data: response.result
      },
      revalidate: 21600
    }
  }

  export default CategoryListPage;
