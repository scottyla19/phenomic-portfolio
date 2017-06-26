import React, { Component } from "react";
import Head from "react-helmet";
import Header from "./Header.js";

class Layout extends Component {
  render() {
    return (
      <div>
        <Head>
          <html lang="en" /> {/* this is valid react-helmet usage! */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <header>
          <Header />
        </header>
        <div>{this.props.children}</div>
        <footer>
          My Footer
        </footer>
      </div>
    );
  }
}
export default Layout;
