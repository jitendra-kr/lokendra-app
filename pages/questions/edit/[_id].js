import { NewQuestion } from "../../../src/components"
import Config from '../../../src/config/env';
import { sample } from "lodash";
const baseUrls = Config.getData().default.baseUrl;

function NewQuestionPage() {
  
    return <NewQuestion fetchCompaniesData = {true}/>
}

  export default NewQuestionPage;
