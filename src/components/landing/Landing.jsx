import React, { Component } from "react";
import { Typography, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import background from "./landing-background.jpeg";

const styles = theme => ({
  root: {
    backgroundColor: "#31394C"
  },
  header: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    color: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
  landingContent: {
    textAlign: "left"
  },
  content1: {
    [theme.breakpoints.down("md")]: {
      fontSize: 48 / 16 + "rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 34 / 16 + "rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 30 / 16 + "rem"
    }
  },
  content2: {
    [theme.breakpoints.down("md")]: {
      fontSize: 34 / 16 + "rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24 / 16 + "rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20 / 16 + "rem"
    }
  }
});

class Landing extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <header className={classes.header}>
          <div className="landingContent">
            <Typography
              variant="h2"
              color="inherit"
              className={classes.content1}
            >
              Hello, I'm Nihal Murmu
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              color="inherit"
              align="left"
              className={classes.content2}
            >
              Full Stack Developer
            </Typography>
          </div>
        </header>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Landing);
