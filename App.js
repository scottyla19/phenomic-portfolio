import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp } from "@phenomic/preset-react-app/lib/client";
import Home from "./components/Home.js";
import About from "./components/About.js";
import BlogContainer from "./components/Blog.js";
import BlogPostContainer from "./components/BlogPostContainer.js";
import Contact from "./components/Contact.js";
import Portfolio from "./components/Portfolio.js";
import "./App.css";
import injectTapEventPlugin from "react-tap-event-plugin";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
export default createApp(() =>
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/blog" component={BlogContainer} />
    <Route path="/after/:after" component={BlogContainer} />
    <Route path="/blog/*" component={BlogPostContainer} collection="posts" />
    <Route path="/contact" component={Contact} />
  </Router>
);
