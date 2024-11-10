import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";
import Link from "next/dist/client/link";
import { useRouter } from "next/navigation";
import NoMatchFound from "./NoMatchFound";
import { ToolKeys } from "./ToolKeys";
import { ITools } from "./toolsListingData";

function RenderToolLink({
  item,
  skipToolFromList,
}: {
  item: ITools;
  skipToolFromList?: ToolKeys;
}) {
  if (skipToolFromList) {
    return <b style={{ color: "blue", cursor: "pointer" }}>{item.title + 1}</b>;
  }
  return (
    <Link
      href={item.link}
      style={{
        color: "blue",
        fontSize: "17px",
        fontWeight: "bold",
      }}
    >
      {item.title}
    </Link>
  );
}

function RenderToolsList({
  toolsList,
  textInput,
  skipToolFromList,
}: {
  toolsList: ITools[];
  textInput: string | undefined;
  skipToolFromList?: ToolKeys;
}) {
  const router = useRouter();

  const handleClick = (item: ITools) => {
    router.push(item.link);
  };

  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {toolsList.map((item, i) => {
        return (
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={6}
            key={item.key}
            onClick={() => {
              handleClick(item);
            }}
            style={{
              backgroundColor: "whitesmoke",
              textAlign: "center",
              borderRadius: "5px",
              marginTop: "15px",
              padding: "10px",
            }}
          >
            <RenderToolLink item={item} skipToolFromList={skipToolFromList} />
          </Col>
        );
      })}
      {textInput && toolsList.length === 0 && <NoMatchFound />}
    </Row>
  );
}

export default RenderToolsList;
