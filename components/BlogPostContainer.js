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
    <div className="content">
      {page.node &&
        <article>
          <h1>{page.node.title}</h1>
          <h3>Author: {page.node.author}</h3>
          <BodyRenderer style={{ width: "100%" }}>
            {page.node.body}
          </BodyRenderer>
        </article>}
    </div>
  </Layout>;

const BlogPostContainer = createContainer(BlogPost, props => ({
  page: query({ collection: "posts", id: props.params.splat })
}));
export default BlogPostContainer;
