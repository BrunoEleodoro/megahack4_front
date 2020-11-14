import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CustomFab from "../../components/CustomFab";
import CustomToolbar from "../../components/CustomToolbar";
import { Table, TableCell, TableBody, TableRow, Grid } from "@material-ui/core";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
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

export default function SimulacaoGastos() {
  const classes = useStyles();

  let ultimasLeituras = [
    {
      data: "1",
      consumo: "Geladeira",
      valor: "24h por dia",
    },

    {
      data: "2",
      consumo: "Televisao",
      valor: "8h por dia",
    },

    {
      data: "1",
      consumo: "Ar Condicionado",
      valor: "9h por dia",
    },
  ];
  const history = useHistory();
  return (
    <React.Fragment>
      <CustomToolbar showBackButton={true} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Simulacao de gastos
          </Typography>
          <br />
          <Table size="small">
            <TableBody>
              {ultimasLeituras.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.data}</TableCell>
                  <TableCell>{item.consumo}</TableCell>
                  <TableCell>{item.valor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <br />
          <Grid container alignItems="right" justify="flex-end" spacing={2}>
            <Grid item sm={12} xs={6}>
              <Button variant="contained" fullWidth color="primary" onClick={() => history.push("/adicionar_eletrodomestico")}>
                Adicionar
              </Button>
            </Grid>
            <Grid item sm={12} xs={6}>
              <Button variant="contained" fullWidth color="primary">
                Simular
              </Button>
            </Grid>
          </Grid>
        </div>
        <CustomFab />
      </Container>
    </React.Fragment>
  );
}
