import React, { Component } from "react";
import Head from "react-helmet";
import Layout from "./Layout.js";
import { createContainer, query } from "@phenomic/preset-react-app/lib/client";
import { Link } from "react-router";

const Blog = ({ posts }) =>
  <Layout>
    <div>
      <h1>Blog</h1>
      <ul>
        {posts &&
          posts.node &&
          posts.node.list &&
          posts.node.list.map(post =>
            <li key={post.id}>
              <Link to={`/blog/${post.id}`}>{post.title || post.id}</Link>
            </li>
          )}
      </ul>
    </div>;
  </Layout>;

const BlogContainer = createContainer(Blog, props => ({
  posts: query({ collection: "posts" })
}));

export default BlogContainer;
