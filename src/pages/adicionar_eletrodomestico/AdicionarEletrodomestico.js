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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
}));

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

  return (
    <React.Fragment>
      <CustomToolbar showBackButton={true} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Adicionar novo eletrodoméstico
          </Typography>
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
            <FormControl component="fieldset">
              <FormLabel component="legend">Este aparelho e antigo?</FormLabel>
              <RadioGroup
                aria-label="antigo"
                name="antigo"
                value={antigo}
                row
                onChange={(e) => setAntigo(e.target.value)}
              >
                <FormControlLabel value="sim" control={<Radio color="primary"/>} label="Sim" />
                <FormControlLabel value="nao" control={<Radio color="primary"/>} label="Nao" />
              </RadioGroup>
            </FormControl>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => history.goBack()}
            >
             Adicionar 
            </Button>
          </form>
        </div>
        <CustomFab />
      </Container>
    </React.Fragment>
  );
}
