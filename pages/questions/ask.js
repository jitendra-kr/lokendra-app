import { NewQuestion } from "../../src/components"

function AskNewQuestionPage() {
    return <NewQuestion />
  }

  export async function getStaticProps() {

    return {
        props: {}
    }
}

  export default AskNewQuestionPage;
