import BackButtonIcon from "@material-ui/icons/ArrowBack";
import logoCpfl from "../images/cpfl-logo.png";
import logoRge from "../images/rge-logo.png";
import { AppBar, Toolbar, Grid, IconButton } from "@material-ui/core";

export default function CustomToolbar({ showBackButton = false }) {
  return (
    <AppBar position="relative" style={{ height:'70px' }}>
      <Toolbar>
        {showBackButton === true ? (
          <IconButton color="secondary" aria-label="icone de voltar">
            <BackButtonIcon />
          </IconButton>
        ) : (
          ""
        )}
        <Grid container alignItems="center" justify="center">
          <img src={logoCpfl} width="50px" alt="logo cpfl" />
          <img src={logoRge} width="50px" alt="logo rge" />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
