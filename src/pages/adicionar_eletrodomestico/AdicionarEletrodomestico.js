import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CustomFab from "../../components/CustomFab";
import CustomToolbar from "../../components/CustomToolbar";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Box } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Humaaans from "../../images/Humaaans.png";

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

export default function AdicionarEletrodomestico() {
  const classes = useStyles();
  const [eletrodomestico, setEletrodomestico] = React.useState("");
  const [antigo, setAntigo] = React.useState("nao");
  const history = useHistory();
  let eletrodomesticos = [
    {
      label: "Geladeira",
      value: "geladeira",
    },
    {
      label: "Chuveiro",
      value: "chuveiro",
    },
  ];

  const [open, setOpen] = React.useState(false);

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
          Adicionar novo eletrodoméstico
        </h2>
        <Divider style={{ backgroundColor: "#0177A4", marginBottom: 20 }} />
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <FormControl
              fullWidth
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Eletrodomestico
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={eletrodomestico}
                onChange={(e) => setEletrodomestico(e.target.value)}
                fullWidth
                label="Eletrodomestico"
              >
                <MenuItem value="">
                  <em>Escolha...</em>
                </MenuItem>
                {eletrodomesticos.map((item, index) => {
                  return <MenuItem value={item.value}>{item.label} </MenuItem>;
                })}
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="horas_dia"
              label="Horas por dia"
            />
            <FormControl component="fieldset" style={{marginTop:20}}>
              <FormLabel component="legend">Este aparelho e antigo?</FormLabel>
              <RadioGroup
                aria-label="antigo"
                name="antigo"
                value={antigo}
                row
                onChange={(e) => setAntigo(e.target.value)}
              >
                <FormControlLabel
                  value="sim"
                  control={<Radio color="primary" />}
                  label="Sim"
                />
                <FormControlLabel
                  value="nao"
                  control={<Radio color="primary" />}
                  label="Nao"
                />
              </RadioGroup>
            </FormControl>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleClickOpen}
            >
              Adicionar
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
                  style={{ fontSize: 20, color: "#f79735", fontWeight: "bold" }}
                  gutterBottom
                >
                AVISO
                </Typography>
              </Grid>
              <Grid item md={12} xs={12} sm={12}>
                <Typography
                  style={{ fontSize: 16, color: "#fff", fontWeight: "bold" }}
                  gutterBottom
                >
                  Lembre-se que se trata de uma simulação. Portanto os valores apresentados são apenas para que você entenda sua conta, sem garantia que sua fatura virá com o mesmo valor.
                </Typography>
              </Grid>
              <Grid item md={12} xs={12} sm={12}>
                <img src={Humaaans} alt="logo cpfl" />
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
              <b>OK</b>
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
