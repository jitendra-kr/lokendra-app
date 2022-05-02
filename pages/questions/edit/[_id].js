import { NewQuestion } from "../../../src/components"

function NewQuestionPage() {
  
    return <NewQuestion fetchCompaniesData = {true}/>
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

  export default NewQuestionPage;
