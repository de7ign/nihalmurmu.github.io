import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  IconButton,
  Tooltip,
  Typography,
  SvgIcon,
  withStyles
} from "@material-ui/core";
import { InsertDriveFile } from "@material-ui/icons";

const styles = theme => ({
  root: {},
  aboutHeader: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#000000"
  },
  about: {
    maxWidth: "800px"
  },
  aboutHead: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 42 / 16 + "rem"
    }
  },
  aboutContent: {
    margin: theme.spacing.unit * 5,
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing.unit * 4
    },
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing.unit * 3
    }
  },
  icons: {
    margin: theme.spacing.unit * 3,
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing.unit
    }
  },
  profile: {
    display: "inline-flex",
    justifyContent: "center",
    margin: theme.spacing.unit * 3,
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      padding: 0
    }
  },
  profileSection: {
    width: 300,
    [theme.breakpoints.only("sm")]: {
      width: 200
    }
  },
  "& a": {
    textDecoration: "none"
  }
});

class About extends Component {
  render() {
    const { classes } = this.props;
    const icons = [
      [
        <Tooltip title="twitter">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/developerLaunda"
          >
            <IconButton>
              <ion-icon name="logo-twitter" />
            </IconButton>
          </a>
        </Tooltip>
      ],
      [
        <Tooltip title="telegram">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/nhlmrm"
          >
            <IconButton>
              <SvgIcon>
                <path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
              </SvgIcon>
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
      <div className={classes.root}>
        <div className={classes.aboutHeader}>
          <div className={classes.about}>
            <div className={classes.aboutContent}>
              <Typography
                variant="h2"
                color="inherit"
                gutterBottom
                className={classes.aboutHead}
              >
                About
                <hr />
              </Typography>
            </div>

            <Typography
              variant="body1"
              color="inherit"
              gutterBottom
              className={classes.aboutContent}
            >
              I believe in learning by doing
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              gutterBottom
              className={classes.aboutContent}
            >
              Currently I'm curious about Blockchain and game development.
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              gutterBottom
              className={classes.aboutContent}
            >
              I'm constantly learning on various topics such as user experience,
              marketing, finance and supply chain and etc. That's helping me to
              to broaden my vision and let me able to see within the user
              perspective beyond the technical capabilities.
            </Typography>
            {/* <Typography variant="body2" color="inherit">
              <a href="#Footer">
                Take a tour of my projects
              </a>
            </Typography> */}
          </div>
          <Grid
            container
            justify="center"
            spacing={16}
            className={classes.icons}
          >
            {icons.map(value => (
              <Grid item>{value}</Grid>
            ))}
          </Grid>
          <Grid
            container
            justify="center"
            spacing={16}
            className={classes.profile}
          >
            <Grid item className={classes.profileSection}>
              <Typography variant="body1" color="inherit">
                Education
              </Typography>
              <Typography variant="body1" color="inherit">
                Silicon Institute of Technology
              </Typography>
            </Grid>
            <Grid item className={classes.profileSection}>
              <Typography variant="body1" color="inherit">
                Work
              </Typography>
              <Typography variant="body1" color="inherit">
                Automatic Data Processing
              </Typography>
            </Grid>
            <Grid item className={classes.profileSection}>
              <Typography variant="body1" color="inherit">
                Location
              </Typography>
              <Typography variant="body1" color="inherit">
                Hyderabad, India
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(About);
