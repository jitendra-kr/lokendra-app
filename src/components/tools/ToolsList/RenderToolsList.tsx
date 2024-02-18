import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ITools } from "./toolsListingData";

const NoMatchFound = dynamic(() => import("./NoMatchFound"));

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
                  backgroundColor: "#4096FF",
                  textAlign: "center",
                  borderRadius: "8px",
                  border: "1px solid rgb(211, 211, 211)",
                }}
              >
                <Link href={item.link}>
                  <b style={{ color: "white", fontSize: "17px" }}>
                    {item.title}
                  </b>
                </Link>
              </div>
            </div>
          );
        })}
        {textInput && toolsList.length === 0 && <NoMatchFound />}
      </div>
    </>
  );
}
