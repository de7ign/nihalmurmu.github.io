import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Button
} from "@material-ui/core";
import background from "./project-background.jpeg";

const styles = theme => ({
  root: {
    backgroundColor: "#31394C",
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
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
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

          <Card className={classes.card} raised>
            <CardContent>
              <Typography variant="h5">Project Name 1</Typography>
              <Typography className={classes.pos} color="textSecondary">
                Tag1 {bull} Tag2 {bull} Tag3
              </Typography>
              <Typography component="p">
                Brief Introduction about the project
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card className={classes.card} raised>
            <CardContent>
              <Typography variant="h5">Project Name 2</Typography>
              <Typography className={classes.pos} color="textSecondary">
                Tag1 {bull} Tag2 {bull} Tag3
              </Typography>
              <Typography component="p">
                Brief Introduction about the project
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Projects);
