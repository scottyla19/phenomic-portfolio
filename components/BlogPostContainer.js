import React from "react";
import Head from "react-helmet";
import Layout from "./Layout.js";
import {
  createContainer,
  query,
  BodyRenderer
} from "@phenomic/preset-react-app/lib/client";

const BlogPost = ({ page }) =>
  <Layout>
    <div>
      {page.node &&
        <article>
          <h1>{page.node.title}</h1>
          <BodyRenderer>{page.node.body}</BodyRenderer>
        </article>}
    </div>
  </Layout>;

const BlogPostContainer = createContainer(BlogPost, props => ({
  page: query({ collection: "posts", id: props.params.splat })
}));
export default BlogPostContainer;
