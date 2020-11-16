import React from "react";
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Avatar from "@material-ui/core/Avatar";
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import { postAPI } from "../../utils/Api";
import { CircularProgress } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';

function Copyright() {
  return (
    <Typography variant="body2" style={{color:"#C8EBEE"}} color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        CPFL + Economia
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const muiTheme = createMuiTheme({
  palette: {
    background: {
      default: "#406a76"
    },
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root:{
    backgroundColor:"#406a76"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#406a76",
  },
  textField: {
    width: "100%",
  },
  button: {
    borderColor: "#8ed6de",
    backgroundColor: "#406a76",
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    backgroundColor: "#406a76",
    fontWeight: "bold",
    color:"#8ed6de"
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function login() {
    setIsLoading(true);
    try {
      let endpoint = "/auth/login";
      let body = {
        email: email,
        password: password,
      };
      let res = await postAPI({ endpoint, body });
      if (res.status === 1) {
        localStorage.setItem("token", res.data.token);
        history.push("/home");
      } else {
        window.alert(res.message);
      }
    } catch (err) {
      window.alert(err);
    }
    setIsLoading(false);
  }

  return (
    < MuiThemeProvider  theme = { muiTheme } >
    <Container component="main">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" style={{color:"#fff",fontWeight:"bold"}} variant="h5">
        Seja bem-vindo(a)!
        </Typography>
        <center>
          <img src={logo} width="140px" style={{marginTop:20}} alt="logo cpfl" />
        </center>
        <form className={classes.form} noValidate>
          <TextField
            margin="normal"
            style={{marginBottom:20}}
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            InputLabelProps={{
              style: { color: '#8ed6de'},
            }}
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          <FormControl className={clsx(classes.margin, classes.textField)} style={{marginBottom:10}}>
          <InputLabel style={{color:"#8ed6de"}} htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            fullWidth
            required
            style={{color:"#8ed6de"}}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  style={{color:"#8ed6de"}}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
          
          <Box border={3}
          className={(classes.button)}>
          <Button
            type="submit"
            fullWidth
            onClick={login} 
            variant="contained"
            className={(classes.submit)}
            disabled={isLoading}
          >
            Entrar
          </Button>
          </Box>
          {isLoading ? (
            <Grid container alignItems="center" justify="center">
              <CircularProgress />
            </Grid>
          ) : (
            ""
          )}
          <Grid container justify="center">
            <Grid item justify="center">
              <center>
              <Typography style={{color:"#030228",fontSize:14,fontWeight:"bold"}}>
                Nao tem uma conta? <Link href="#" style={{color:"#C8EBEE",textDecoration:"underline"}} variant="body2">
                {"Cadastre-se"}
              </Link>
              </Typography>
              
              </center>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </MuiThemeProvider>
  );
}
