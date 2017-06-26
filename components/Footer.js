import React, { Component } from "react";
import { Link } from "react-router";
// import logo from "./logo.svg";
// import "./App.css";
var d = new Date();
var year = d.getFullYear();

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          Scott LaForest &copy; {year}
        </div>
        <div>
          Created with &#10084; using &nbsp;
          <a href="https://phenomic.io/" style={{ color: "inherit" }}>
            Phenomic
          </a>
        </div>
        <div>
          Check out the source code &nbsp;
          <a
            href="https://github.com/scottyla19/phenomic-portfolio"
            style={{ color: "inherit" }}
          >
            <i className="fa fa-github" ariaHidden="true" />
          </a>
        </div>

      </div>
    );
  }
}

export default Footer;
