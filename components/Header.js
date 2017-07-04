import React, { Component } from "react";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui/svg-icons/navigation/menu";
import FontIcon from "material-ui/FontIcon";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Link } from "react-router";
// import logo from "./logo.svg";
// import "./App.css";
const iconStyles = { fontSize: "36px" };
const Header = props => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-icon">
          <img src="/laforest-icon-144.png" />

        </div>
        <h4 className="header-name">
          Scott LaForest
        </h4>
        <p>
          Web Developer
        </p>
      </div>
      <div className="header-right">
        <MuiThemeProvider>
          <IconMenu
            iconButtonElement={
              <IconButton>
                <FontIcon
                  className="material-icons md-36"
                  color={"#FF5722"}
                  fontSize="36px"
                  style={iconStyles}
                >
                  menu
                </FontIcon>
              </IconButton>
            }
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
            targetOrigin={{ horizontal: "right", vertical: "top" }}
          >
            <MenuItem>
              <Link
                to="/"
                style={{
                  color: "inherit",
                  textDecoration: "none"
                }}
              >
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/about"
                style={{
                  color: "inherit",
                  textDecoration: "none"
                }}
              >
                About
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/portfolio"
                style={{
                  color: "inherit",
                  textDecoration: "none"
                }}
              >
                Portfolio
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/blog"
                style={{
                  color: "inherit",
                  textDecoration: "none"
                }}
              >
                Blog
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/contact"
                style={{
                  color: "inherit",
                  textDecoration: "none"
                }}
              >
                Contact
              </Link>
            </MenuItem>
          </IconMenu>
        </MuiThemeProvider>
      </div>
    </div>
  );
};

export default Header;
