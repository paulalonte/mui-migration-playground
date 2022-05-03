import {
  Typography,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

import { Theme } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";
import withThemeProvider from "./withThemeProvider";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.main,
  },
  logoTitle: {
    color: theme.palette.primary.light,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <CameraAltIcon />
          <Typography className={classes.logoTitle}>Photo Album</Typography>
          <Button variant="contained" color="secondary">
            toggle
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography variant="subtitle1" align="center" paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              expedita commodi dolores sapiente earum alias illo temporibus hic.
              Nulla aliquid pariatur officia eligendi quas ducimus? Aliquam,
              ipsam. Et, porro veritatis.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained">See My Photos</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Secondary Action</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}

export default withThemeProvider(App);
