import React from "react";
import PropTypes from "prop-types";
import {
  Paper,
  Typography,
  withStyles,
  Grid,
  Tooltip,
  IconButton
} from "@material-ui/core";
import { Mail, InsertDriveFile } from "@material-ui/icons";

const styles = theme => ({
  root: {
    backgroundColor: "#d8d8d8",
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    textAlign: "center"
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    const icons = [
      [
        <Tooltip title="mail">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:nhlmrm@gmail.com"
          >
            <IconButton>
              <Mail />
            </IconButton>
          </a>
        </Tooltip>
      ],
      [
        <Tooltip title="twitter">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/nihalmurmu"
          >
            <IconButton>
              <ion-icon name="logo-twitter" />
            </IconButton>
          </a>
        </Tooltip>
      ],
      [
        <Tooltip title="linkedin">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/nihalmurmu"
          >
            <IconButton>
              <ion-icon name="logo-linkedin" />
            </IconButton>
          </a>
        </Tooltip>
      ],
      [
        <Tooltip title="github">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nihalmurmu"
          >
            <IconButton>
              <ion-icon name="logo-github" />
            </IconButton>
          </a>
        </Tooltip>
      ],
      [
        <Tooltip title="resume">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nihalmurmu.me/resume.pdf"
          >
            <IconButton>
              <InsertDriveFile />
            </IconButton>
          </a>
        </Tooltip>
      ]
    ];
    return (
      <div>
        <Paper className={classes.root} square>
          <Typography variant="overline">&copy; Nihal Murmu</Typography>
          <Grid container justify="center" spacing={16}>
            {icons.map(value => (
              <Grid item>{value}</Grid>
            ))}
          </Grid>
        </Paper>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Footer);
