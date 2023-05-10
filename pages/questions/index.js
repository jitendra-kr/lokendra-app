import { QuestionList } from "../../src/components";
import Config from "../../src/config/env";
import { sample } from "lodash";
import useSWR from "swr";
const baseUrls = Config.getData().default.baseUrl;

const limit = 10;
function url() {
  return `${sample(
    baseUrls
  )}question/question-list?skip=${0}&limit=${limit}`;
  
}


// const fetcher = (...args) => fetch(...args).then((res) => res.json());
function QuestionListPage({ initialData }) {


  return (
    <QuestionList
      questionData={[]}
      limit={limit}
      totalRecords={10}
      loadMore={false}
    />
  );
}

export async function getStaticProps() {
  // let response = await fetcher(url());
  return {
    props: {
      initialData: [],
    },
    revalidate: 2,
  };
}

export default QuestionListPage;
