import Head from "next/head";

type AppHeadProps = {
  title: string;
  meta_description: string;
  url: string;
  image?: string;
};
export default function AppHead({
  title,
  meta_description,
  url,
  image,
}: AppHeadProps) {
  const author = "Fireboxtools";
  const description = meta_description;

  image =
    image ??
    "https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/master/FireBoxTools-logo-250-250.jpg";

  return (
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1"
        key="viewport"
      />
      <meta property="og:type" content="website" key="og:type" />
      <meta name="robots" content="index, follow" />
      <meta property="og:site_name" content="Fireboxtools" key="og:site_name" />
      <meta property="og:image" content={image} key="og:image" />
      <meta
        property="og:image:secure_url"
        content={image}
        key="og:image:secure_url"
      />
      <meta property="og:image:width" content="720" />
      <meta property="og:image:height" content="404" />
      <meta property="og:type" content="article" key="og:type" />

      <meta property="og:url" content={`${url}`} key="og:url" />

      <meta property="og:title" content={title} key="og:title" />

      <meta property="fb:app_id" content="184066903055457" key="fb:app_id" />

      <meta name="title" content={title} key="title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta name="description" content={description} key="description" />

      <meta property="twitter:title" content={title} key="twitter:title" />
      <meta
        property="twitter:description"
        content={description}
        key="twitter:description"
      />

      <meta property="al:web:url" content={url} key="al:web:url" />

      <meta name="author" content={author} key="author" />

      <meta name="monetag" content="3d6165b14aca906aacae0371b102121f"></meta>
      <meta name="yandex-verification" content="31e076ea950a2e9b" />
    </Head>
  );
}
