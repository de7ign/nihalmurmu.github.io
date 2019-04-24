import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    backgroundColor: "#d8d8d8",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: "center"
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} square>
          <Typography variant="overline">&copy; Nihal Murmu</Typography>
        </Paper>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Footer);
