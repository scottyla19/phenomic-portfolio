import React, { Component } from "react";
import Head from "react-helmet";
import Header from "./Header.js";
import Footer from "./Footer.js";

class Layout extends Component {
  render() {
    return (
      <div>
        <Head>
          <html lang="en" /> {/* this is valid react-helmet usage! */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossorigin="anonymous"
          />
        </Head>
        <header>
          <Header />
        </header>
        <div className="main-container">{this.props.children}</div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
export default Layout;
