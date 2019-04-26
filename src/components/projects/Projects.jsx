import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip
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
  about: {
    width: "100%",
    maxWidth: "800px",
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5
  },
  aboutContent: {
    margin: theme.spacing.unit * 5
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
  pos: {
    marginBottom: 12
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
        title: "Project title 1",
        tags: ["Tag1", "Tag2", "Tag3"],
        content: "lorem ipsum sit dolor amet",
        website: "https://nihalmurmu.me",
        github: "https://github.com/nihalmurmu"
      },
      {
        title: "Project title 2",
        tags: ["Tag1", "Tag2", "Tag3"],
        content: "lorem ipsum sit dolor amet",
        website: "https://nihalmurmu.me",
        github: "https://github.com/nihalmurmu"
      }
    ];

    return (
      <div className={classes.root}>
        <div className={classes.about}>
          <Typography
            variant="h2"
            color="inherit"
            gutterBottom
            className={classes.aboutContent}
          >
            Projects
            <hr />
          </Typography>

          {projects.map(value => (
            <Card className={classes.card} raised>
              <CardHeader
                action={this.parseAction(value.website, value.github)}
                title={value.title}
                subheader={this.parseTags(value.tags)}
              />
              <CardContent>
                <Typography component="p">{value.content}</Typography>
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
