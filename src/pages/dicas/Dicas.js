import React from "react";
import CustomToolbar from "../../components/CustomToolbar";
import {
  Container,
  CssBaseline,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";
import CustomFab from "../../components/CustomFab";
import DicaCard from "./DicaCard";

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

export default function Dicas() {
  const classes = useStyles();

  let dicasList = [
    {
      title: "Dica Chuveiro",
      description:
        "Durante o Verão ou a primavera desligue o chuveiro elétrico ou reduza o uso.",
      image:
        "https://d1kvbg99uxpcu.cloudfront.net/Custom/Content/Products/99/81/998153_ducha-chuveiro-eletrico-lorenzetti-bello-ultra-3-temperaturas-220-v-branco_m13_636810044557458436",
    },
    {
      title: "Dica Chuveiro",
      description:
        "Durante o Verão ou a primavera desligue o chuveiro elétrico ou reduza o uso.",
      image:
        "https://d1kvbg99uxpcu.cloudfront.net/Custom/Content/Products/99/81/998153_ducha-chuveiro-eletrico-lorenzetti-bello-ultra-3-temperaturas-220-v-branco_m13_636810044557458436",
    },
    {
      title: "Dica Chuveiro",
      description:
        "Durante o Verão ou a primavera desligue o chuveiro elétrico ou reduza o uso.",
      image:
        "https://d1kvbg99uxpcu.cloudfront.net/Custom/Content/Products/99/81/998153_ducha-chuveiro-eletrico-lorenzetti-bello-ultra-3-temperaturas-220-v-branco_m13_636810044557458436",
    },
    {
      title: "Dica Chuveiro",
      description:
        "Durante o Verão ou a primavera desligue o chuveiro elétrico ou reduza o uso.",
      image:
        "https://d1kvbg99uxpcu.cloudfront.net/Custom/Content/Products/99/81/998153_ducha-chuveiro-eletrico-lorenzetti-bello-ultra-3-temperaturas-220-v-branco_m13_636810044557458436",
    },
    {
      title: "Dica Chuveiro",
      description:
        "Durante o Verão ou a primavera desligue o chuveiro elétrico ou reduza o uso.",
      image:
        "https://d1kvbg99uxpcu.cloudfront.net/Custom/Content/Products/99/81/998153_ducha-chuveiro-eletrico-lorenzetti-bello-ultra-3-temperaturas-220-v-branco_m13_636810044557458436",
    },
  ];

  return (
    <React.Fragment>
      <CustomToolbar showBackButton={true} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Dicas para economizar
          </Typography>
          <br/>
          <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
            {dicasList.map((item, index) => {
              return (
                <Grid item xs={12}>
                  <DicaCard
                    title={item.title}
                    description={item.description}
                    image={item.image}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
        <CustomFab />
      </Container>
    </React.Fragment>
  );
}
