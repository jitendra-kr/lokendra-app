import { Answer } from "../../../src/components"
import Config from '../../../src/config/env';
import { sample } from "lodash";
const baseUrls = Config.getData().default.baseUrl;

function AnswerPage({answer, _id}) {
    return <Answer answer={answer} _id={_id} />
}


export async function getServerSideProps(context) {

    const url = `${sample(baseUrls)}question/answer/${context.params._id}`;
    let response = await fetch(url);
    response = await response.json();
    return {
      props: {
        answer: response.result,
        _id: context.params._id
      }
    }
  }

export default AnswerPage
