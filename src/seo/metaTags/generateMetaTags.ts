import { SCREENS } from "@ft/common/enums/screens";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { toolsListData } from "@ft/components/tools/ToolsList/toolsListingData";
import { STRING_CONSTANTS } from "@ft/constants/stringConstants";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

type NonToolPageTags = {
  link: SCREENS;
  title: string;
  description: string;
};

function getTagsData(
  key: ToolKeys,
  page?: NonToolPageTags,
): {
  title: string;
  description: string;
  url: string;
  images: string;
} {
  const images =
    "https://raw.githubusercontent.com/jitendra-kr/jimmy-point-images/master/FireBoxTools-logo-250-250.jpg";
  let url = `${STRING_CONSTANTS.global.websiteURL}`;

  if (page) {
    url += page.link;
    return {
      title: page.title,
      description: page.description,
      url,
      images,
    };
  }
  const tag = toolsListData.find((obj) => {
    return obj.key === ToolKeys[key];
  });

  if (!tag) {
    throw new Error("Meta tags not found");
  }
  const title = tag?.metaTitle;
  const description = tag?.metaDescription;
  url += tag.link;
  return {
    title,
    description,
    url,
    images,
  };
}

export function generateMetaTags(
  key: ToolKeys,
  page?: NonToolPageTags,
): Metadata {
  const { title, description, url, images } = getTagsData(key, page);

  return {
    title,
    description,

    openGraph: {
      type: "website",
      title,
      description,
      siteName: "Fireboxtools",
      images,
      url,
    },
    metadataBase: new URL("https://raw.githubusercontent.com"),
    twitter: {
      title,
      description,
      images,
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      monetag: "3d6165b14aca906aacae0371b102121f",
      "yandex-verification": "31e076ea950a2e9b",
    },
    alternates: {
      canonical: url,
    },
  };
}
