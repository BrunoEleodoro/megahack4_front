import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CustomFab from "../../components/CustomFab";
import CustomToolbar from "../../components/CustomToolbar";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function NovaLeitura() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CustomToolbar showBackButton={true} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Atualize a leitura do seu medidor de energia
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="numero"
              label="Insira aqui o número do contador "
            />
            <Link href="#" variant="body2">
              Não encontrei o número
            </Link>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Calcular
            </Button>
          </form>
        </div>
        <CustomFab />
      </Container>
    </React.Fragment>
  );
}