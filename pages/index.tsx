import { BlogList, ToolsList } from "../src/components"
import Config from '../src/config/env';
import React from "react";

function HomePage({blog}) {
    return <>
    <ToolsList />
    {/* <BlogList data = {blog}/> */}
    </>
}

export async function getStaticProps() {

//   const url = `${sample(baseUrls)}blog-management/blogs`;
//   let response: any = await fetch(url);
//   response = await response.json();
  return {
    props: {
      blog: []
    },
    revalidate: 10
  }
}
export default HomePage