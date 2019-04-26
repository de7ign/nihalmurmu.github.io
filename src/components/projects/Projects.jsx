import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
  withStyles
} from "@material-ui/core";
import { Language } from "@material-ui/icons";
import background from "./project-background.jpeg";

const styles = theme => ({
  root: {
    backgroundColor: "#212734",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#ffffff"
  },
  project: {
    width: "100%",
    maxWidth: "800px",
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5
  },
  projectContent: {
    margin: theme.spacing.unit * 5,
    [theme.breakpoints.down("xs")]: {
      fontSize: 42 / 16 + "rem"
    }
  },
  card: {
    margin: theme.spacing.unit * 2,
    minWidth: 275,
    textAlign: "left"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  projectTitle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 20 / 16 + "rem"
    }
  }
});

class Projects extends Component {
  parseTags = tags => {
    const bull = " • ";
    return tags.join(bull);
  };

  parseAction = (website, github) => {
    return (
      <div>
        {website ? (
          <Tooltip title="website">
            <a target="_blank" rel="noopener noreferrer" href={website}>
              <IconButton style={{ margin: "0px 4px" }}>
                <Language />
              </IconButton>
            </a>
          </Tooltip>
        ) : null}
        {github ? (
          <Tooltip title="github repository">
            <a target="_blank" rel="noopener noreferrer" href={github}>
              <IconButton style={{ margin: "0px 4px" }}>
                <ion-icon name="logo-github" />
              </IconButton>
            </a>
          </Tooltip>
        ) : null}
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    const projects = [
      {
        title: "Distributed Smart Contract Manager",
        tags: ["Blockchain", "BigChaindb", "IPFS", "MERN Stack"],
        note: "",
        content:
          "Smartly manage the contacts of one user so that there will be no loss of contact lists, even if the user loses his/her physical device/storage in a complete trustless and distributed environment.",
        website: "",
        github: ""
      },
      {
        title: "Automata",
        tags: ["Education", "ReactJS", "finite-state-machine"],
        note: "Project is in active development phase",
        content:
          "Automata is a web application built for playing and interacting with finite state machines with complete hackability and visualization of state machines algorithms.",
        website: "https://nihalmurmu.me/automata",
        github: "https://github.com/nihalmurmu/automata"
      },
      {
        title: "Algorithms",
        tags: ["Education", "ReactJS", "DAA"],
        note: "Project is in early design phase",
        content:
          "Web Application to simulate step-by-step working of dynamic programming algorithms, which will make user easy to visualise and understand various dynamic programming algorithms.",
        website: "",
        github: "https://github.com/nihalmurmu/algorithms"
      },
      {
        title: "Goofy-Coin",
        tags: ["Education", "Blockchain", "Cryptocurrency"],
        note: "Project is in active development phase",
        content:
          "It is a simple web application to show how cryptocurrency wallet and blockchain works for dummies.",
        website: "",
        github: "https://github.com/nihalmurmu/goofy-coin"
      },
      {
        title: "Type-Master",
        tags: ["Typing", "Utilities", "GUI", "Python"],
        note: "",
        content:
          "It is a simple cross-platform GUI desktop application, which will help in improving user typing speed",
        website: "",
        github: "https://github.com/nihalmurmu/type-master"
      },
      {
        title: "Hangman-Game",
        tags: ["Word-game", "GUI", "Python"],
        note: "",
        content:
          "PyHangman is a GUI desktop application for a word guessing game in python, in which the player has to guess the name of a country/movie, provided with some hint about that particular country/movie or movie-song.",
        website: "",
        github: ""
      }
    ];

    return (
      <div className={classes.root}>
        <div className={classes.project}>
          <Typography
            variant="h2"
            color="inherit"
            gutterBottom
            className={classes.projectContent}
          >
            Projects
            <hr />
          </Typography>

          {projects.map(value => (
            <Card className={classes.card} raised>
              <CardHeader
                classes={{ title: classes.projectTitle }}
                action={this.parseAction(value.website, value.github)}
                title={value.title}
                subheader={this.parseTags(value.tags)}
              />
              <CardContent>
                <Typography variant="caption">{value.note}</Typography>
                <Typography variant="body1">{value.content}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Projects);
