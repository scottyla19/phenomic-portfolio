import React, { Component } from "react";
import Head from "react-helmet";
import Layout from "./Layout.js";

class About extends Component {
  render() {
    return (
      <Layout>
        <div
          className="content"
          style={{
            display: "flex",
            flexFlow: "row wrap",
            alignContent: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              width: "200px",
              alignSelf: "center",
              justifySelf: "center",
              textAlign: "center"
            }}
          >
            <img
              src="/scott.jpg"
              style={{ width: "200px", borderRadius: "50%" }}
            />
          </div>
          <div style={{ maxWidth: "600px", padding: "1em" }}>
            <h3 style={{ textAlign: "center" }}> My Story </h3>
            <p>
              I currently teach high school math, engineering, and 3D design.
              I have a bachelor's in math and a master’s degree in physics
              education. I have always loved learning new topics and using those
              skills and knowledge to solve problems and build concrete, useful
              objects. This love of learning and creating has pushed me toward
              computer programming and specifically web development.'
            </p>
            <p>
              I started out in 2010 by deciding to learn how to make an iPhone
              app. I had an iPod touch for awhile and the iPhone was the coolest
              thing thing since sliced bread. I learned Objective C and created
              a handful of apps and even made a little extra spending cash.
              After a few years it was apparent that mobile apps was not the
              gold mine I was hoping for and my ability to keep up with the
              hardware and software updates led me to web development.
            </p>
            <p>
              I started out making WordPress sites, plugins, and themes. I
              created websites for friends and even hard a part time freelance
              job with a local web design company. I learned a ton about web
              development but kids and career forced me to focus on other things
              instead of web development. I continued to dabble in various forms
              of programming from data analysis, web scraping, raspberry pi,
              Google Apps Scripts, automation, and even some rudimentary machine
              learning. After completing a recent re-introduction to web
              development from a college course I was required to take for my
              teaching license I have found a new obsession with web
              development.
            </p>

          </div>

        </div>
      </Layout>
    );
  }
}

export default About;
