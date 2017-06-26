import React, { Component } from "react";
import Head from "react-helmet";
import Layout from "./Layout.js";

class Blog extends Component {
  render() {
    return (
      <Layout>
        <div>
          Here is my blog lets import a list of blog posts in md
        </div>
      </Layout>
    );
  }
}

export default Blog;
