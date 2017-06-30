import React, { Component } from "react";
import Head from "react-helmet";
import Layout from "./Layout.js";
import { Link } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FontIcon from "material-ui/FontIcon";
const iconStyles = {
  alignSelf: "center",
  justifySelf: "center",
  margin: 0,
  color: "inherit",
  fontSize: "36px"
};

const Home = props => {
  return (
    <MuiThemeProvider>
      <Layout>
        <div className="content">
          <h1> Hi my name is Scott and I like to make things. </h1>
          <p>
            Lately I have re-invigorated my focus and passion for making
            websites and apps. With over 7 years of
            programming experience I look forward to the opportunity to improve
            my skills and help create useful
            technology.
          </p>
          <div className="row">

            <div className="row-item">
              <Link to="/about">
                <div className="row-div">
                  <FontIcon className="material-icons" style={iconStyles}>
                    person_pin
                  </FontIcon>
                  <h3> About Me</h3>
                </div>
              </Link>
            </div>

            <div className="row-item">
              <Link to="/portfolio">
                <div className="row-div">
                  <FontIcon className="material-icons" style={iconStyles}>
                    apps
                  </FontIcon>
                  <h3>Portfolio</h3>
                </div>
              </Link>
            </div>
            <div className="row-item">
              <Link to="/blog">
                <div className="row-div">
                  <FontIcon className="material-icons" style={iconStyles}>
                    create
                  </FontIcon>
                  <h3> My Blog</h3>
                </div>
              </Link>
            </div>
            <div className="row-item">
              <Link to="/contact">
                <div className="row-div">
                  <FontIcon className="material-icons" style={iconStyles}>
                    contact_mail
                  </FontIcon>
                  <h3> Contact Me</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </Layout>
    </MuiThemeProvider>
  );
};

export default Home;
