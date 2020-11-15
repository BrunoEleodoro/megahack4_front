import React, {useEffect} from "react";
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

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import {getAPI} from "../../utils/Api";

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
  dialog: {
    backgroundColor: "#0f5374",
    color: "#98e4ea",
  },
  center_dialog: {
    alignContent: "center",
    justifyContent: "center",
    verticalAlign: "center",
  },
}));

const styles = (theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Home() {
  const classes = useStyles();
  const [profile, setProfile] = React.useState({});
  const [eletrodomesticos, setEletrodomesticos] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [total, setTotal] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  async function getEletrodomesticos() {
    setIsLoading(true);
    try {
      let endpoint = "/auth/eletrodomesticos";
      let res = await getAPI({ endpoint });
      if (res.status === 1) {
        setEletrodomesticos(res.data);
      } else {
        window.alert(res.message);
      }
    } catch (err) {
      window.alert(err);
    }
    setIsLoading(false);
  }
  
  async function getProfile() {
    setIsLoading(true);
    try {
      let endpoint = "/auth/profile";
      let res = await getAPI({ endpoint });
      if (res.status === 1) {
        setProfile(res.data);
        getEletrodomesticos();
      } else {
        window.alert(res.message);
      }
    } catch (err) {
      window.alert(err);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getProfile();
  }, [])

  useEffect(() => {
    let total = 0;
    let i = 0;
    while(i < eletrodomesticos.length) {
      let eletro = eletrodomesticos[i];
      let custoUnit = (((eletro.consumo * 0.85) * eletro.quantidade) * (eletro.horas_dia * 30));
      total += custoUnit;
      i++;
    }
    console.log(total);
    setTotal(total);
  }, [eletrodomesticos]);

  return (
    <React.Fragment>
      <CustomToolbar showBackButton={true} />
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
        <div style={{ backgroundColor: "#f8f8f9", padding: 0, margin: 0 }}>
          <Grid
            container
            style={{ paddingTop: 50, marginBottom: 0 }}
            justify="center"
          >
            <Grid
              item
              md={12}
              xs={12}
              sm={12}
              className={classes.center}
              justify="center"
            >
              <Typography className={classes.title} gutterBottom>
                VALOR
              </Typography>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              sm={12}
              className={classes.center}
              justify="center"
            >
              <h1 style={{ margin: 0, padding: 0 }}>R$ {total}</h1>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              sm={12}
              className={classes.center}
              justify="center"
            >
              <Typography
                style={{ color: "#929292", fontSize: 14 }}
                gutterBottom
              >
                R$ 2,32/dia
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
              sm={6}
              className={classes.center}
              justify="center"
            >
              <Typography
                style={{ color: "#000", fontSize: 14, fontWeight: "bold" }}
                gutterBottom
              >
                Vencimento
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
              sm={6}
              className={classes.center}
              justify="center"
            >
              <Typography
                style={{ color: "#000", fontSize: 14, fontWeight: "bold" }}
                gutterBottom
              >
                Consumo
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
              sm={6}
              className={classes.center}
              justify="left"
            >
              <Typography
                style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}
                gutterBottom
              >
                31/11/2020
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
              sm={6}
              className={classes.center}
              justify="center"
            >
              <Typography
                style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}
                gutterBottom
              >
                243 kWh
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
              sm={6}
              className={classes.center}
              justify="left"
            >
              <Typography
                style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}
                gutterBottom
              ></Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
              sm={6}
              className={classes.center}
              justify="center"
            >
              <Typography
                style={{ color: "#929292", fontSize: 14 }}
                gutterBottom
              >
                8,6kWh/dia
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
              sm={6}
              className={classes.center}
              style={{ marginTop: 20 }}
              justify="center"
            >
              <Typography
                style={{ color: "#000", fontSize: 14, fontWeight: "bold" }}
                gutterBottom
              >
                Bandeira
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
              sm={6}
              className={classes.center}
              style={{ marginTop: 20 }}
              justify="center"
            >
              <Typography
                style={{ color: "#000", fontSize: 14, fontWeight: "bold" }}
                gutterBottom
              >
                Situação
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
              sm={6}
              className={classes.center}
              style={{ paddingBottom: 40, marginBottom: 0 }}
              justify="center"
            >
              <Typography
                style={{ color: "#57c754", fontSize: 14, fontWeight: "bold" }}
                gutterBottom
              >
                VERDE
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
              sm={6}
              className={classes.center}
              style={{ paddingBottom: 40, marginBottom: 0 }}
              justify="center"
            >
              <Typography
                style={{ color: "#de9245", fontSize: 14, fontWeight: "bold" }}
                gutterBottom
              >
                Em aberto
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.box_verde}>
          <Typography
            style={{ color: "#000", fontSize: 12, padding: 20 }}
            gutterBottom
          >
            Parabéns! O valor da sua simulação está 10,4% menor do que a sua
            meta de R$ 220,00
          </Typography>
          <Grid container justify="center">
            <Grid
              item
              md={8}
              xs={8}
              sm={8}
              className={classes.center}
              style={{ paddingBottom: 10, margin: 0 }}
              justify="center"
            >
              <Typography
                style={{ color: "#de9245", fontSize: 14, fontWeight: "bold" }}
                gutterBottom
              ></Typography>
            </Grid>
            <Grid
              item
              md={4}
              xs={4}
              sm={4}
              className={classes.center}
              style={{ paddingBottom: 10, margin: 0 }}
              justify="center"
            >
              <Button
                variant="contained"
                alignContent="left"
                onClick={handleClickOpen}
                style={{
                  color: "#358133",
                  backgroundColor: "#fff",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                Mudar meta
              </Button>
            </Grid>
          </Grid>
        </div>
        <Typography
          style={{
            color: "#777777",
            fontSize: 12,
            paddingTop: 10,
            textDecoration: "underline",
          }}
          gutterBottom
        >
          Parabéns! O valor da sua simulação está 10,4% menor do que a sua meta
          de R$ 220,00
        </Typography>

        <CustomFab />
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers className={classes.dialog}>
          <center>
            <Grid
              container
              spacing={2}
              className={classes.center_dialog}
              alignItems="center"
            >
              <Grid item md={12} xs={12} sm={12}>
                <Typography
                  style={{ fontSize: 22, color: "#FFF", fontWeight: "bold" }}
                  gutterBottom
                >
                  MUDANÇA DE META
                </Typography>
              </Grid>
              <Grid item md={4} xs={4} sm={4}>
                <Typography
                  style={{ fontSize: 18, color: "#98e4ea", fontWeight: "bold" }}
                  gutterBottom
                >
                  Meta antiga:
                </Typography>
              </Grid>
              <Grid item md={8} xs={8} sm={8}>
                <Typography
                  style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}
                  gutterBottom
                >
                  R$ 200,00
                </Typography>
              </Grid>
              <Grid item md={4} xs={4} sm={4}>
                <Typography
                  style={{ fontSize: 18, color: "#98e4ea", fontWeight: "bold" }}
                  gutterBottom
                >
                  Nova meta:
                </Typography>
              </Grid>
              <Grid item md={8} xs={8} sm={8}>
                <TextField
                  id="filled-size-small"
                  style={{backgroundColor:"#3e738d"}}
                  variant="filled"
                  size="small"
                />
              </Grid>
            </Grid>
          </center>
        </DialogContent>
        <DialogActions className={classes.dialog}>
          <Box border={3} style={{ borderColor: "#98e4ea", borderRadius: 20 }}>
            <Button
              autoFocus
              onClick={handleClose}
              style={{ color: "#98e4ea" }}
            >
              <b>MUDAR</b>
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
