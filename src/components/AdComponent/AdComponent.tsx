import { useEffect } from "react";

export function AdComponent() {
  useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {},
        );
      } catch (e) {}
    }
  }, []);

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4375413214168925"
        data-ad-slot="6157382493"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4375413214168925"
        data-ad-slot="6157382493"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4375413214168925"
        data-ad-slot="6157382493"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}
