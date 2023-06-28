import Link from "next/link";
import { useRouter } from "next/router";
import { NoMatchFound } from "./NoMatchFound";
import { ITools } from "./toolsListingData";

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
    <div className="row">
      {toolsList.map((item, i) => {
        return (
          <div
            className="col-lg-4 cursor-pointer"
            key={i}
            onClick={() => {
              handleClick(item);
            }}
            style={{ marginTop: "25px" }}
          >
            <div className="listing border">
              <div className="home-page-title" style={{ textAlign: "center" }}>
                <Link href={item.link}>{item.title}</Link>
              </div>
            </div>
          </div>
        );
      })}
      {textInput && toolsList.length === 0 && <NoMatchFound />}
    </div>
  );
}
