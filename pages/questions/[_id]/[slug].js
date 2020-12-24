import { Answer } from "../../../src/components"
import Config from '../../../src/config/env';
import { sample } from "lodash";
const baseUrls = Config.getData().default.baseUrl;

function AnswerPage({answer}) {
    return <Answer answer={answer} />
}


export async function getServerSideProps(context) {

    console.log(context.query)

    const url = `${sample(baseUrls)}question/answer/${context.params._id}`;
    let response = await fetch(url);
    response = await response.json();
    return {
      props: {
        answer: response.result
      }
    }
  }

export default AnswerPage
