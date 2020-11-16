import React, {useEffect} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CustomFab from "../../components/CustomFab";
import CustomToolbar from "../../components/CustomToolbar";
import Divider from "@material-ui/core/Divider";

import Chat from "@material-ui/icons/Chat";
import Phone from "@material-ui/icons/Phone";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Box } from "@material-ui/core";
import modal1 from "../../images/modal1.png";
import { useHistory } from "react-router-dom";
import {postAPI, getAPI} from "../../utils/Api";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
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
  button: {
    background: "linear-gradient(135deg, #006c9d 20%, #00b3c7 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    marginTop: 20,
    fontWeight: "bold",
  },
  dialog: {
    backgroundColor: "#0f5374",
    color: "#98e4ea",
  },
  center: {
    alignContent: "center",
    justifyContent: "center",
    verticalAlign: "center",
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
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

export default function NovaLeitura() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [leituras, setLeituras] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [numeroContador, setNumeroContador] = React.useState("");
  
  async function getLeituras() {
    setIsLoading(true);
    try {
      let endpoint = "/auth/leituras";
      let res = await getAPI({ endpoint });
      setLeituras(res.data);
    } catch (err) {
      window.alert(err);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getLeituras();
  }, []);

  async function enviarDados() {
    setIsLoading(true);
    try {
      leituras.push({
        data: new Date().toLocaleString(),
        consumo: numeroContador,
        valor: 146.82,
      });
      let endpoint = "/auth/leituras";
      let body = {
        leituras: leituras,
      };
      let res = await postAPI({ endpoint, body });
      if (res.status === 1) {
        handleClickOpen();
      } else {
        window.alert(res.message);
      }
    } catch (err) {
      window.alert(err);
    }
    setIsLoading(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CustomToolbar showBackButton={true} />

      <Container component="main">
        <h2 style={{ color: "#0177A4", marginBottom: 1 }}>
          Atualize a leitura do seu medidor de energia
        </h2>
        <Divider style={{ backgroundColor: "#0177A4", marginBottom: 20 }} />
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="numero"
              label="Insira aqui o número do contador "
              onChange={e => setNumeroContador(e.target.value)}
            />
            <Link href="#" variant="body2">
              Não encontrei o número
            </Link>
            <Button
              fullWidth
              variant="contained"
              onClick={enviarDados}
              className={(classes.submit, classes.button)}
            >
              Calcular
            </Button>
          </form>
        </div>
        <CustomFab />
      </Container>

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
              className={classes.center}
              alignItems="center"
            >
              <Grid item md={12} xs={12} sm={12}>
                <Typography
                  style={{ fontSize: 24, color: "#fff", fontWeight: "bold" }}
                  gutterBottom
                >
                  Antes de realizar sua leitura, se dirija ao seu contador de
                  energia.
                </Typography>
              </Grid>
              <Grid item md={12} xs={12} sm={12}>
                <img src={modal1} alt="logo cpfl" />
              </Grid>
            </Grid>
          </center>
        </DialogContent>
        <DialogActions className={classes.dialog}>
          <Box border={3} style={{ borderColor: "#98e4ea", borderRadius: 20 }}>
            <Button
              autoFocus
              onClick={()=>history.push(
                "/resultado_nova_leitura"
              )}
              style={{ color: "#98e4ea" }}
            >
              <b>OK</b>
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
