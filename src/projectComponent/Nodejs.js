import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    //margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "0",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default function Nodejs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item>
            <a href="https://hojin9622.github.io/web1/">
              <ButtonBase className={classes.image}>
                <img
                  id="mainImg"
                  className={classes.img}
                  alt="web1"
                  src={require("../images/web1.png")}
                />
              </ButtonBase>
            </a>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Nodejs
                </Typography>
                <Typography variant="body2" gutterBottom>
                  생활코딩
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Node
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  <a href="https://github.com/HoJin9622/web1">
                    <img
                      id="gitImg"
                      className={classes.img}
                      alt="web1"
                      src={require("../images/git.png")}
                      style={{ cursor: "pointer" }}
                    />
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
