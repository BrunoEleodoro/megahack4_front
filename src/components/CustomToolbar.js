import BackButtonIcon from "@material-ui/icons/ArrowBack";
import Menu from "@material-ui/icons/Menu";
import logoCpfl from "../images/cpfl-logo.png";
import logoRge from "../images/rge-logo.png";
import { AppBar, Toolbar, Grid, IconButton } from "@material-ui/core";
import {useHistory} from "react-router-dom";

export default function CustomToolbar({ showBackButton = false }) {
  const history = useHistory();
  return (
    <AppBar position="relative" style={{ height:'70px' }}>
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
