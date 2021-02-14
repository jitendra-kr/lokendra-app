import { NewQuestion } from "../../../src/components"
import Config from '../../../src/config/env';
import { sample } from "lodash";
const baseUrls = Config.getData().default.baseUrl;

function NewQuestionPage({companiesData}) {
    return <NewQuestion companiesData={companiesData}/>
}

export async function getStaticProps() {

  const url = `${sample(baseUrls)}companies/data`;
  let response = await fetch(url);
  response = await response.json();
  return {
    props: {
      companiesData: response.result
    },
    revalidate: 10
  }
}

  export default NewQuestionPage;
