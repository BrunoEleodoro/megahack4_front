import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CustomFab from "../../components/CustomFab";
import CustomToolbar from "../../components/CustomToolbar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
  },
  button: {
    background: "linear-gradient(135deg, #c36402 20%, #ffcc99 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    marginTop: 20,
    fontWeight: "bold",
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

export default function ResultadoNovaLeitura() {
  const classes = useStyles();
  const history = useHistory();

  let ultimasLeituras = [
    {
      data: "20/11/2020",
      consumo: "172kWh",
      valor: "146,82",
    },

    {
      data: "20/11/2020",
      consumo: "172kWh",
      valor: "146,82",
    },

    {
      data: "20/11/2020",
      consumo: "172kWh",
      valor: "146,82",
    },

    {
      data: "20/11/2020",
      consumo: "172kWh",
      valor: "146,82",
    },
  ];

  return (
    <React.Fragment>
      <CustomToolbar showBackButton={true} />
      <Container component="main">
        <CssBaseline />
        <div className={classes.paper}>
          <h2 style={{ color: "#0177A4", marginBottom: 1 }}>
            Resultado da nova leitura
          </h2>
          <Divider style={{ backgroundColor: "#0177A4", marginBottom: 20 }} />
          <form className={classes.form} noValidate>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="numero"
              label="CONSUMO EM kWh:"
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="numero"
              label="CONSUMO EM REAIS:"
            />
          </form>
          <h2 style={{ color: "#f79735", marginBottom: 1 }}>
            Últimas leituras:
          </h2>
          <Divider style={{ backgroundColor: "#f79735", marginBottom: 20 }} />
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography
                    style={{
                      fontSize: 14,
                      color: "#f79735",
                      fontWeight: "bold",
                    }}
                    gutterBottom
                  >
                    Data
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    style={{
                      fontSize: 14,
                      color: "#f79735",
                      fontWeight: "bold",
                    }}
                    gutterBottom
                  >
                    Consumo
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    style={{
                      fontSize: 14,
                      color: "#f79735",
                      fontWeight: "bold",
                    }}
                    gutterBottom
                  >
                    Valor
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ultimasLeituras.map((item, index) => (
                <TableRow key={index}>
                  <TableCell><b>{item.data}</b></TableCell>
                  <TableCell><b>{item.consumo}</b></TableCell>
                  <TableCell><b>{item.valor}</b></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
              fullWidth
              variant="contained"
              onClick={()=>history.push(
                "/home"
              )}
              className={(classes.submit, classes.button)}
            >
              Menu inicial
            </Button>
        </div>
        <CustomFab />
      </Container>
    </React.Fragment>
  );
}
