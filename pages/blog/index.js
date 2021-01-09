import { CategoryList } from "../../src/components"
import Config from '../../src/config/env';
import { sample } from "lodash";
const baseUrls = Config.getData().default.baseUrl;

function CategoryListPage({data}) {
  return <CategoryList data = {data}/>
  }

  export async function getStaticProps() {

    const url = `${sample(baseUrls)}blog-management/category-list`;
    let response = await fetch(url);
    response = await response.json();
    return {
      props: {
        data: response.result
      },
      revalidate: 60
    }
  }

  export default CategoryListPage;
