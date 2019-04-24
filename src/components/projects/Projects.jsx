import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import background from "./project-background.jpeg";

//"https://images.unsplash.com/photo-1555852224-2a3e675fc47e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

// https://images.unsplash.com/photo-1524721696987-b9527df9e512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80

//https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80

// https://images.unsplash.com/photo-1535370976884-f4376736ab06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: "#31394C"
//   },
//   project: {
//     //backgroundImage: `url(${imgUrl})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     backgroundPosition: "50%",

//     // display: "flex",
//     // flexDirection: "column",

//     alignItems: "center",
//     justifyContent: "center",
//     textAlign: "center",
//   },
//   projectHeader: {
//     marginTop: theme.spacing.unit * 5,

//    // maxWidth: "800px",
//     color: "#ffffff"
//   },
//   projectContent: {
//     margin: theme.spacing.unit * 2,
//     maxWidth: "800px"
//     // width: "800px",
//     // color: "#ffffff"

//   },
//   card: {
//    // maxWidth: "800px",
//     textAlign: "left",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)"
//   },
//   title: {
//     fontSize: 14
//   },
//   pos: {
//     marginBottom: 12
//   }
// });

/*
=====
*/

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: "#31394C",
//     //backgroundImage: `url(${imgUrl})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     backgroundPosition: "50%",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     textAlign: "center"
//   },
//   project: {
//     maxWidth: "800px"
//   },
//   projectHeader: {
//     marginTop: theme.spacing.unit * 5,
//     color: "#ffffff"
//   },
//   projectContent: {},
// card: {
//   margin: theme.spacing.unit * 2,
//   minWidth: 275,
//   textAlign: "left"
// },
// bullet: {
//   display: "inline-block",
//   margin: "0 2px",
//   transform: "scale(0.8)"
// },
// pos: {
//   marginBottom: 12
// }
// });

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
