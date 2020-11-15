import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Chat from "@material-ui/icons/Chat";
import Phone from "@material-ui/icons/Phone";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";

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

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: 0,
    top: "auto",
    right: 5,
    bottom: 20,
    position: "fixed",
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    background: "linear-gradient(135deg, #74b9b6 10%, #9eecf3 90%)",

    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "#424242",
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
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

export default function CustomizedDialogs() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        variant="extended"
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
        className={(classes.margin, classes.fab)}
      >
        <Chat className={classes.extendedIcon} />
        <b>Fale conosco</b>
      </Fab>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title"
          className={classes.dialog}
          onClose={handleClose}
          style={{paddingRight:50}}
        >
          AINDA COM DÚVIDAS?
        </DialogTitle>
        <DialogContent dividers className={classes.dialog}>
          <center>
            <Grid container spacing={2} className={classes.center} alignItems="center">
              <Grid item md={2} xs={2} sm={2}>
                <WhatsApp></WhatsApp>
              </Grid>
              <Grid item md={10} xs={10} sm={10}>
                <Typography gutterBottom>NOSSO WHATSAPP</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.center} alignItems="center">
              <Grid item md={2} xs={2} sm={2}>
                <Chat></Chat>
              </Grid>
              <Grid item md={10} xs={10} sm={10}>
                <Typography gutterBottom>NOSSO CHAT</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.center} alignItems="center">
              <Grid item md={2} xs={2} sm={2}>
                <Phone></Phone>
              </Grid>
              <Grid item md={10} xs={10} sm={10}>
                <Typography gutterBottom>0800 770 2735</Typography>
              </Grid>
            </Grid>
          </center>
        </DialogContent>
      </Dialog>
    </div>
  );
}
