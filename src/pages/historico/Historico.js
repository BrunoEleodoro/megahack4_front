import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CustomToolbar from "../../components/CustomToolbar";
import CustomFab from "../../components/CustomFab";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "JANEIRO/2020",
    null,
    "R$ 267,45",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "FEVEREIRO/2020",
    null,
    "R$ 280,23",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "MARÇO/2020",
    null,
    "R$ 250,12",
    "MC ⠀•••• 1253",
    100.81
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  root: {
    padding: "16px",
  },
}));

export default function Historico() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CustomToolbar showBackButton={true} />
      <div className={classes.root}>
        <h2 style={{ color: "#0177A4", marginBottom: 1 }}>
          Histórico de economias
        </h2>
        <Divider style={{ backgroundColor: "#0177A4", marginBottom: 20 }} />
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  style={{ color: "#f79735", fontSize: 18, fontWeight: "bold" }}
                  gutterBottom
                >
                  Mês/Ano
                </Typography>
              </TableCell>
              <TableCell><Typography
                  style={{ color: "#f79735", fontSize: 18, fontWeight: "bold" }}
                  gutterBottom
                >
                  Economias
                </Typography></TableCell>
              <TableCell><Typography
                  style={{ color: "#f79735", fontSize: 18, fontWeight: "bold" }}
                  gutterBottom
                >
                  Faturas
                </Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow style={{color:"#000"}} key={row.id}>
                <TableCell>
                <Typography
                  style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}
                  gutterBottom
                >
                  {row.date}
                </Typography>
                </TableCell>
                <TableCell>{row.name}
                <Typography
                  style={{ color: "#929292", fontSize: 12, fontWeight: "bold" }}
                  gutterBottom
                >
                  {row.name === null ? ("Sem economias"):(row.name)}
                </Typography>
                </TableCell>
                <TableCell>
                <Typography
                  style={{ color: "#000", fontSize: 14, fontWeight: "bold" }}
                  gutterBottom
                >
                  {row.shipTo}
                </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Divider style={{ backgroundColor: "#0177A4", marginBottom: 20 }} />
        <h3 style={{ color: "#0177A4", marginBottom: 1 }}>
          Média: R$ 410,00
        </h3>      
        <CustomFab />
      </div>
    </React.Fragment>
  );
}
