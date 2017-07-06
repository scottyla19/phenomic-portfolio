import React, { Component } from "react";
import Head from "react-helmet";
import Header from "./Header.js";
import Footer from "./Footer.js";

class Layout extends Component {
  componentDidMount() {
    (function() {
      "use strict";
      if (!("serviceWorker" in navigator)) {
        console.log("Service worker not supported");
        return;
      }
      navigator.serviceWorker
        .register("service-worker.js")
        .then(function(registration) {
          console.log("Registered at scope:", registration.scope);
        })
        .catch(function(error) {
          console.log("Registration failed:", error);
        });
    })();
  }
  render() {
    return (
      <div>
        <Head>
          <html lang="en" /> {/* this is valid react-helmet usage! */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title> Scott LaForest</title>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossorigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link rel="stylesheet" type="text/css" href="styles.css" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#3F51B5" />
          <meta name="msapplication-TileColor" content="#3F51B5" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="PSK" />
          <link rel="icon" sizes="192x192" href="img/icon-192.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta
            name="apple-mobile-web-app-title"
            content="Polymer Starter Kit"
          />
          <link rel="apple-touch-icon" href="img/icon-192.png" />
          <meta name="msapplication-TileImage" content="img/icon-192.png" />
        </Head>
        <header>
          <Header />
        </header>
        <div className="main-container">
          {this.props.children}
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
export default Layout;
