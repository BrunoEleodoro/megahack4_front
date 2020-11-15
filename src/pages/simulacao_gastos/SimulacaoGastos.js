import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CustomFab from "../../components/CustomFab";
import CustomToolbar from "../../components/CustomToolbar";
import { Table, TableCell, TableBody, TableRow, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
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
  button: {
    background: "linear-gradient(135deg, #006c9d 20%, #00b3c7 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    fontWeight: "bold",
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
      <Container component="main">
        <CssBaseline />
        <div className={classes.paper}>
          <h2 style={{ color: "#0177A4", marginBottom: 1 }}>
            Simulação de gastos
          </h2>
          <Divider style={{ backgroundColor: "#0177A4", marginBottom: 10 }} />

          <h2 style={{ color: "#000", marginBottom: 20 }}>
            Seus eletrodomésticos:
          </h2>
          <Table size="small">
            <TableBody>
              {ultimasLeituras.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Box border={1}>
                      <center> {item.data}</center>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      style={{
                        fontSize: 16,
                        color: "#f79735",
                        fontWeight: "bold",
                      }}
                      gutterBottom
                    >
                      {item.consumo}
                    </Typography>
                  </TableCell>
                  <TableCell>{item.valor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <br />
          <Grid container alignItems="right" justify="flex-end" spacing={2}>
            <Grid item sm={12} xs={6}>
              <Button
                variant="contained"
                fullWidth
                className={classes.button}
                onClick={() => history.push("/adicionar_eletrodomestico")}
              >
                Adicionar
              </Button>
            </Grid>
            <Grid item sm={12} xs={6}>
              <Button variant="contained"  fullWidth className={classes.button} onClick={()=>history.push(
            "/simulacao"
          )}>
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
