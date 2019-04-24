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
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#ffffff"
  }
});

class Landing extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <header className={classes.header}>
          <Typography variant="h2" color="inherit">
            Hello, I'm Nihal Murmu
            <Typography variant="h4" gutterBottom color="inherit" align="left">
              Full Stack Developer
            </Typography>
          </Typography>
        </header>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Landing);
