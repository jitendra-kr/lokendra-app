import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ITools } from "./toolsListingData";

const NoMatchFound = dynamic(() => import("./NoMatchFound"));

function RenderToolsList({
  toolsList,
  textInput,
}: {
  toolsList: ITools[];
  textInput: string | undefined;
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
            <span>
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
            </span>
          </Col>
        );
      })}
      {textInput && toolsList.length === 0 && <NoMatchFound />}
    </Row>
  );
}

export default RenderToolsList;
