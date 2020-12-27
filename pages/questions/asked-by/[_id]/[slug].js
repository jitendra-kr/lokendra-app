import { sample } from "lodash";
import { Layout } from "antd";
const baseUrls = Config.getData().default.baseUrl;
import Config from '../../../../src/config/env';
import {AppHead} from "../../../../src/components";

const { Content } = Layout;

function AskedByPage({result}) {
    const data = result.where_asked.filter(Boolean);
    return (
        <Content style={{ padding: "50px 50px 59px 56px" }}>
        <AppHead data={{title: result.title}}/>
        <h1>{result.title}</h1>
        <ul>
            {data.map((value, i) => {
                return <li key={i}>
                    {value}
                </li>
            })}
        </ul>
        </Content>
    )
}


export async function getServerSideProps(context) {

    const url = `${sample(baseUrls)}question/get-asked-by-to/${context.params._id}/where_asked`;
    let response = await fetch(url);
    response = await response.json();
    return {
      props: {
        result: response.result
      }
    }
  }

export default AskedByPage
