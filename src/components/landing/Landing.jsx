import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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
  c1: {
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
  c2: {
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
            <Typography variant="h2" color="inherit" className={classes.c1}>
              Hello, I'm Nihal Murmu
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              color="inherit"
              align="left"
              className={classes.c2}
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
