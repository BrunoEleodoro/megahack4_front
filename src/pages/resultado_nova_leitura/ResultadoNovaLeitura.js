import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CustomFab from "../../components/CustomFab";
import CustomToolbar from "../../components/CustomToolbar";
import {Table, TableHead, TableCell, TableBody, TableRow} from "@material-ui/core";

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

export default function ResultadoNovaLeitura() {
  const classes = useStyles();

  let ultimasLeituras = [
    {
      data: "20/11/2020",
      consumo: "172kWh",
      valor: '146,82'
    },

    {
      data: "20/11/2020",
      consumo: "172kWh",
      valor: '146,82'
    },

    {
      data: "20/11/2020",
      consumo: "172kWh",
      valor: '146,82'
    },

    {
      data: "20/11/2020",
      consumo: "172kWh",
      valor: '146,82'
    },

  ];

  return (
    <React.Fragment>
      <CustomToolbar showBackButton={true} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Resultado da nova leitura
          </Typography>
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
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Mês/Ano</TableCell>
              <TableCell>Economias</TableCell>
              <TableCell>Faturas</TableCell>
            </TableRow>
          </TableHead>
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
        <div className={classes.seeMore}>
          <Link color="primary" href="#">
            See more 
          </Link>
        </div>
        </div>
        <CustomFab />
      </Container>
    </React.Fragment>
  );
}
