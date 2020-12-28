import { QuestionList } from "../../src/components"
import Config from '../../src/config/env';
import { sample } from "lodash";
const baseUrls = Config.getData().default.baseUrl;

const limit = 10;

function QuestionListPage({data}) {
  return <QuestionList
  questionData={data.questionData}
  limit={limit}
  totalRecords={data.totalRecords}
  loadMore={data.loadMore}/>
}

export async function getStaticProps() {


  const url = `${sample(baseUrls)}question/question-list?skip=${0}&limit=${limit}`;
  let response = await fetch(url);
  response = await response.json();
  return {
    props: {
      data: {
        questionData: response.result,
        totalRecords: response.totalRecords,
        loadMore:
        response.result.length && limit === response.result.length
          ? 1
          : 0
      }
    },
    revalidate: 300
  }
}

export default QuestionListPage;
