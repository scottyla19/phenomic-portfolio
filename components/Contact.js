import React, { Component } from "react";
import Head from "react-helmet";
import Layout from "./Layout.js";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    var value = event.target.value;
    const eventName = event.target.name;
    this.setState(function() {
      return {
        [eventName]: value
      };
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <Layout>
          <div className="content">
            <form
              className="column"
              action="https://formspree.io/scott.w.laforest@gmail.com"
              method="POST"
            >
              <TextField hintText="Your Name" floatingLabelText="Name" />
              <br />
              <TextField hintText="Your Email" floatingLabelText="Email" />
              <br />
              <TextField
                hintText="Your Message"
                floatingLabelText="Message"
                multiLine={true}
                rows={4}
                fullWidth={true}
              />
              <br />
              <RaisedButton className="button" type="submit">
                Submit
              </RaisedButton>
            </form>.
          </div>
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default Contact;
