import BackButtonIcon from "@material-ui/icons/ArrowBack";
import Menu from "@material-ui/icons/Menu";
import logoCpfl from "../images/cpfl-logo.png";
import logoRge from "../images/rge-logo.png";
import { AppBar, Toolbar, Grid, IconButton } from "@material-ui/core";
import {useHistory} from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nova_leitura: {
    background: "linear-gradient(135deg, #006c9d 20%, #00b3c7 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 55,
  },
}));

export default function CustomToolbar({ showBackButton = false }) {
  const history = useHistory();
  const classes = useStyles();
  return (
    <AppBar position="relative" className={classes.nova_leitura}>
      <Toolbar>
        {showBackButton === true ? (
          <IconButton color="secondary" aria-label="icone de voltar" onClick={() => history.goBack()}>
            <BackButtonIcon />
          </IconButton>
        ) : (
          <IconButton color="secondary" aria-label="icone de voltar">
            <Menu />
          </IconButton>
        )}
        <Grid container alignItems="center" justify="center">
          <img src={logoCpfl} width="50px" alt="logo cpfl" />
          <img src={logoRge} width="50px" alt="logo rge" />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
