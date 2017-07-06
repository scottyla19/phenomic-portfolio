import React, { Component } from "react";
import Head from "react-helmet";
import Layout from "./Layout.js";
import {
  createContainer,
  query,
  BodyRenderer
} from "@phenomic/preset-react-app/lib/client";
import { Link } from "react-router";
import Divider from "material-ui/Divider";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const Blog = ({ posts }) =>
  <MuiThemeProvider>
    <Layout>
      <div className="content">
        <h1>Web Dev Diary</h1>
        <p>
          I love markdown and I use it as my notetaking document when I am
          learning something new. The best part is that I can then take my
          markdown files and render them as HTML. Thanks to Phenomic and react I
          can now render my markdown files as part of this blog. Each post is it{"'"}s
          own markdown file and is rendered as HTML automatically.
        </p>
        <ul style={{ padding: "0" }}>
          {posts &&
            posts.node &&
            posts.node.list &&
            posts.node.list.map(post =>
              <li key={post.id}>
                <div className="blogListItem">
                  <h3 className="blogListTitle">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <h3 className="blogListDate">
                    {post.posted}
                  </h3>
                  <p className="blogListDesc">
                    {post.desc}
                  </p>
                </div>
                <Divider />
              </li>
            )}
        </ul>
        {posts &&
          posts.node &&
          posts.node.next &&
          <Link to={`/after/${posts.node.next}`}>Older posts</Link>}
      </div>
    </Layout>
  </MuiThemeProvider>;

const BlogContainer = createContainer(Blog, props => ({
  posts: query({
    collection: "posts",
    sortBy: "id",
    limit: "12",
    after: props.params.after
  })
}));

export default BlogContainer;
