import { Skeleton } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { NoMatchFound } from "./NoMatchFound";
import { ITools } from "./toolsListingData";

function LoadingToolsList() {
  const skeleton = [
    "ljnv5yzi9o5d9",
    "ljnv5yzia7141",
    "ljnv5yzi0edff",
    "ljnv5yzib31ow",
    "ljnv5yzi5o6yj",
    "ljnv5yziz3eov",
    "ljnv5yzikzww6",
    "ljnv5yzi6oz93",
    "ljnv5yzifz6pq",
    "ljnv5yzit2yjo",
    "ljnv5yzipd2n9",
    "ljnv5yzi9i4ty",
  ];
  return (
    <div className="row" style={{ minHeight: "40vh" }}>
      {skeleton.map((v) => (
        <div className="col-lg-3" key={v}>
          <div className="home-page-title" style={{ textAlign: "center" }}>
            <Skeleton.Button
              active={true}
              size={"large"}
              shape={"round"}
              block={false}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function RenderToolsList({
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
    <>
      <div className="row">
        {toolsList.map((item, i) => {
          return (
            <div
              className="col-lg-3 cursor-pointer"
              key={item.key}
              onClick={() => {
                handleClick(item);
              }}
              style={{ marginTop: "25px" }}
            >
              <div
                className="listing border"
                style={{ backgroundColor: "white" }}
              >
                <div className="home-page-title text-align-center">
                  <Link href={item.link}>{item.title}</Link>
                </div>
              </div>
            </div>
          );
        })}
        {textInput && toolsList.length === 0 && <NoMatchFound />}
      </div>
      {!textInput && toolsList.length === 0 && <LoadingToolsList />}
    </>
  );
}
