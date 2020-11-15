import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CustomToolbar from "../../components/CustomToolbar";
import CustomFab from "../../components/CustomFab";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Divider from "@material-ui/core/Divider";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { IconButton } from "@material-ui/core";
import menu1 from "../../images/menu1.png";
import menu2 from "../../images/menu2.png";
import menu3 from "../../images/menu3.png";
import menu4 from "../../images/menu4.png";
import menu5 from "../../images/menu5.png";
import menu6 from "../../images/menu6.png";
import menu7 from "../../images/menu7.png";
import menu8 from "../../images/menu8.png";
import menu9 from "../../images/menu9.png";
import menu10 from "../../images/menu10.png";
import Add from "@material-ui/icons/Add";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "#444A4E" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#62e060",
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    background: "#f5f5f5",
    padding: "16px",
    flexGrow: 1,
  },
  root: {
    padding: "16px",
    flexGrow: 1,
  },
  center: {
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
  },
  card: {
    marginTop: "20px",
    backgroundColor: "#5c8794",
    color: "#fff",
  },
  box_azul: {
    background: "linear-gradient(135deg, #297b93 10%, #8eddf4 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
  },
  box_verde: {
    background: "linear-gradient(135deg, #aaf886 10%, #8da683 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
  },
  box: {
    margin: 0,
    padding: 5,
    borderRadius: 5,
    height: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CustomToolbar showBackButton={false} />
      <div className={classes.root}>
        <h2 style={{ color: "#0177A4", marginBottom: 1 }}>
          Simulação de fatura
        </h2>
        <Divider style={{ backgroundColor: "#0177A4", marginBottom: 20 }} />

          <div className={classes.box_azul}>
          <center>
            <h2 style={{ color: "#fff", marginBottom: 1, padding: 10 }}>
              NOVEMBRO
            </h2>
          </center>
          </div>
          <div style={{ backgroundColor: "#f8f8f9",padding:0,margin:0}}>
            <Grid container style={{paddingTop:50,marginBottom:0}} justify="center">
                <Grid item md={12} xs={12} sm={12} className={classes.center}  justify="center">
                    <Typography className={classes.title} gutterBottom>
                        VALOR
                    </Typography>
                </Grid>
                <Grid item md={12} xs={12} sm={12} className={classes.center}  justify="center">
                    <h1 style={{margin: 0, padding: 0 }}>
                        R$ 197,13
                    </h1>
                </Grid>
                <Grid item md={12} xs={12} sm={12} className={classes.center}  justify="center">
                    <Typography style={{color:"#929292",fontSize: 14}} gutterBottom>
                        R$ 2,32/dia
                    </Typography>
                </Grid>
                <Grid item md={6} xs={6} sm={6} className={classes.center}  justify="center">
                    <Typography style={{color:"#000",fontSize: 14, fontWeight:"bold"}} gutterBottom>
                       Vencimento
                    </Typography>
                </Grid>
                <Grid item md={6} xs={6} sm={6} className={classes.center}  justify="center">
                    <Typography style={{color:"#000",fontSize: 14, fontWeight:"bold"}} gutterBottom>
                       Consumo
                    </Typography>
                </Grid>
                <Grid item md={6} xs={6} sm={6} className={classes.center}  justify="left">
                    <Typography style={{color:"#000",fontSize: 20, fontWeight:"bold"}} gutterBottom>
                       31/11/2020
                    </Typography>
                </Grid>
                <Grid item md={6} xs={6} sm={6} className={classes.center} justify="center">
                    <Typography style={{color:"#000",fontSize: 20, fontWeight:"bold"}} gutterBottom>
                        243 kWh
                    </Typography>
                </Grid>
                <Grid item md={6} xs={6} sm={6} className={classes.center}  justify="left">
                    <Typography style={{color:"#000",fontSize: 20, fontWeight:"bold"}} gutterBottom>
                      
                    </Typography>
                </Grid>
                <Grid item md={6} xs={6} sm={6} className={classes.center}  justify="center">
                    <Typography style={{color:"#929292",fontSize: 14}} gutterBottom>
                        8,6kWh/dia
                    </Typography>
                </Grid>
                <Grid item md={6} xs={6} sm={6} className={classes.center} style={{marginTop:20}}  justify="center">
                    <Typography style={{color:"#000",fontSize: 14, fontWeight:"bold"}} gutterBottom>
                       Bandeira
                    </Typography>
                </Grid>
                <Grid item md={6} xs={6} sm={6} className={classes.center} style={{marginTop:20}} justify="center">
                    <Typography style={{color:"#000",fontSize: 14, fontWeight:"bold"}} gutterBottom>
                       Situação
                    </Typography>
                </Grid>
                <Grid item md={6} xs={6} sm={6} className={classes.center} style={{paddingBottom:40,marginBottom:0}} justify="center">
                    <Typography style={{color:"#57c754",fontSize: 14, fontWeight:"bold"}} gutterBottom>
                       VERDE
                    </Typography>
                </Grid>
                <Grid item md={6} xs={6} sm={6} className={classes.center} style={{paddingBottom:40,marginBottom:0}} justify="center">
                    <Typography style={{color:"#de9245",fontSize: 14, fontWeight:"bold"}} gutterBottom>
                       Em aberto
                    </Typography>
                </Grid>
            </Grid>
          </div>
          <div className={classes.box_verde}>
            <Typography style={{color:"#000",fontSize: 12, padding:20}} gutterBottom>
            Parabéns! O valor da sua simulação está 10,4% menor do que a sua meta de R$ 220,00 
            </Typography>
            <Grid container justify="center">
            <Grid item md={8} xs={8} sm={8} className={classes.center} style={{paddingBottom:10,margin:0}} justify="center">
                    <Typography style={{color:"#de9245",fontSize: 14, fontWeight:"bold"}} gutterBottom>
                       
                    </Typography>
            </Grid>
            <Grid item md={4} xs={4} sm={4} className={classes.center} style={{paddingBottom:10,margin:0}} justify="center">
            <Button variant="contained" alignContent="left" style={{color:"#358133",backgroundColor:"#fff",fontWeight:"bold",fontSize:12}}>
                Mudar meta
            </Button>
            </Grid>
            </Grid>
          </div>
          <Typography style={{color:"#777777",fontSize: 12,paddingTop:10,textDecoration:"underline"}} gutterBottom>
            Parabéns! O valor da sua simulação está 10,4% menor do que a sua meta de R$ 220,00 
            </Typography>

        <CustomFab />
      </div>
    </React.Fragment>
  );
}
