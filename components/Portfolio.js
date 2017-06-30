import React, { Component } from "react";
import Head from "react-helmet";
import Layout from "./Layout.js";
import { Link } from "react-router";
import Paper from "material-ui/Paper";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const style = {
  height: 40,
  width: 40,
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#3F51B5",
  color: "white"
};
var reactStyle = Object.assign({}, style);
reactStyle["backgroundColor"] = "#222";
reactStyle["color"] = "#00d8ff";

var reactNativeStyle = Object.assign({}, style);
reactNativeStyle["backgroundColor"] = "#222";

const Portfolio = props => {
  return (
    <MuiThemeProvider>
      <Layout>
        <div className="content">
          <h1> Portfolio </h1>

          <div className="row">
            <div className="row-item">
              <Card>
                <CardHeader
                  title="Learning with LaForest"
                  subtitle="My Teacher Website"
                >
                  <Paper style={style} zDepth={1} circle={true}>
                    <h4>PWA</h4>
                  </Paper>
                </CardHeader>
                <CardMedia
                  overlay={<CardTitle title="Learning with LaForest" />}
                >

                  <img
                    src="/learn-with-laforest.png"
                    alt="Learn with LaForest screenshot"
                  />

                </CardMedia>
                <CardText>
                  I created this site in order to communicate with parents about
                  what is happening in my classroom. This site is a progressive
                  web app (lighthouse score = 100) and
                  it contains recent assignments and other class information.
                  See it{" "}
                  <a
                    href="https://learn-with-laforest.firebaseapp.com/"
                    target="_blank"
                  >
                    here
                  </a>
                </CardText>

              </Card>
            </div>
            <div className="row-item">
              <Card>
                <CardHeader
                  title="React-Tac-Toe"
                  subtitle="Upgrade of the Facebook tic-tac-toe tutorial."
                >
                  <Paper style={reactStyle} zDepth={1} circle={true}>
                    <h4>React</h4>
                  </Paper>
                </CardHeader>
                <CardMedia overlay={<CardTitle title="React-Tac-Toe" />}>

                  <img
                    src="/react-tac-toe.png"
                    alt="React-Tac-Toe screenshot"
                  />

                </CardMedia>
                <CardText>
                  I started learning React via the Facebook{" "}
                  <a href="https://facebook.github.io/react/tutorial/tutorial.html">
                    tic-tac-toe tutorial
                  </a>. I improved it by following the
                  suggestions at the end to allow for ascending and descending
                  game moves, highlighting the winning
                  moves, and updated the layout.
                </CardText>

              </Card>

            </div>

          </div>
        </div>

      </Layout>
    </MuiThemeProvider>
  );
};

export default Portfolio;
