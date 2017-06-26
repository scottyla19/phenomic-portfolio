import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp } from "@phenomic/preset-react-app/lib/client";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Blog from "./components/Blog.js";
import Contact from "./components/Contact.js";
import "./App.css";
import injectTapEventPlugin from "react-tap-event-plugin";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
export default createApp(() =>
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/blog" component={Blog} />
    <Route path="/contact" component={Contact} />
  </Router>
);
