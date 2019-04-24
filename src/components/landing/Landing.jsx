import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

let imgUrl =
  "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
const styles = theme => ({
  root: {
    backgroundColor: "#31394C"
  },
  header: {
    backgroundImage: `url(${imgUrl})`,
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
