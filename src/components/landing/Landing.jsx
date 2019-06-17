import React, { Component } from "react";
import { Typography, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
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
    flexWrap: "wrap",
    color: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
  content1: {
    [theme.breakpoints.down("md")]: {
      fontSize: 48 / 16 + "rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 34 / 16 + "rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 30 / 16 + "rem",
      marginBottom: theme.spacing.unit * 2
    }
  },
  content2: {
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: 34 / 16 + "rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24 / 16 + "rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 20 / 16 + "rem"
    }
  },
  animate2: {
    borderRight: ".40em solid #FFF",
    animation: "caret 0.7s steps(1) infinite"
  },
  "@keyframes caret": {
    "from, to": { borderRightColor: "transparent" },
    "50%": { borderRightColor: "#FFF" }
  }
});

class Landing extends Component {
  state = {
    removeAnimation1: false,
    removeAnimation2: true
  };

  componentDidMount() {
    setTimeout(() => {
      const dialogue_ = '["Hello, I is Nihal Murmu"]';
      var elements = document.getElementById("dynamicContent1");
      var period = 2000;
      var c1TxType = new TxtType(elements, JSON.parse(dialogue_), period);
      setTimeout(
        () => {
          this.setState({ removeAnimation1: true, removeAnimation2: false });
          c1TxType.remove = true;
          // delete its references, hope JS garbage collects it lol.
          delete c1TxType.toRotate;
          delete c1TxType.el;
          delete c1TxType.loopNum;
          delete c1TxType.period;
          delete c1TxType.txt;
          delete c1TxType.tick;
          delete c1TxType.isDeleting;
          delete c1TxType.remove;
          setTimeout(() => {
            const dialogue =
              '["I is Creative. ", "Me &hearts; to Design.", "Me &hearts; to Develop.", "Me make computer go beep boop beep beep boop. &#128568;"]';
            var elements = document.getElementById("dynamicContent2");
            var period = 2000;
            new TxtType(elements, JSON.parse(dialogue), period);
          }, 1300);
        },
        4300,
        c1TxType
      );
    }, 1000);

    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
      this.remove = false;
    };

    TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        if (fullTxt.charAt(this.txt.length - 1) === ";") {
          this.txt = fullTxt.substring(0, this.txt.length - 9);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        }
      } else {
        if (fullTxt.charAt(this.txt.length + 1) === "&") {
          this.txt = fullTxt.substring(0, this.txt.length + 9);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      }

      this.el.innerHTML = this.txt;

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(
        () => {
          if (this.remove === false) {
            that.tick();
          }
        },
        delta,
        this.remove
      );
    };
  }

  render() {
    const { classes } = this.props;
    const { removeAnimation1, removeAnimation2 } = this.state;
    return (
      <div className={classes.root}>
        <header className={classes.header}>
          <div>
            <Typography
              variant="h2"
              color="inherit"
              className={classes.content1}
            >
              <span
                className={removeAnimation1 ? null : classes.animate2}
                id="dynamicContent1"
              >
                &nbsp;
              </span>
            </Typography>
          </div>
          <Typography variant="h4" color="inherit" className={classes.content2}>
            <span
              className={removeAnimation2 ? null : classes.animate2}
              id="dynamicContent2"
            >
              &nbsp;
            </span>
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
