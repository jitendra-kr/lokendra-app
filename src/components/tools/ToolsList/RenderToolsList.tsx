"use client";
import Skeleton from "antd/es/skeleton/Skeleton";
import { useRouter } from "next/dist/client/components/navigation";
import Link from "next/link";
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
                className="home-page-title text-align-center"
                style={{
                  backgroundColor: "white",
                  textAlign: "center",
                  borderRadius: "8px",
                  border: "1px solid rgb(211, 211, 211)",
                }}
              >
                <Link href={item.link} style={{ color: "rgb(22, 119, 255)" }}>
                  {item.title}
                </Link>
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
