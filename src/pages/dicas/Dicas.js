import React, { useEffect } from "react";
import CustomToolbar from "../../components/CustomToolbar";
import {
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import CustomFab from "../../components/CustomFab";
import DicaCard from "./DicaCard";
import Divider from "@material-ui/core/Divider";
import { getAPI } from "../../utils/Api";

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
}));

export default function Dicas() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(false);
  const [dicasList, setDicasList] = React.useState([]);

  async function getDicas() {
    setIsLoading(true);
    try {
      let endpoint = "/dicas";
      let res = await getAPI({ endpoint });
      setDicasList(res.data);
    } catch (err) {
      alert(err);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getDicas();
  }, []);

  return (
    <React.Fragment>
      <CustomToolbar showBackButton={true} />
      <Container component="main">
        <h2 style={{ color: "#0177A4", marginBottom: 1 }}>
          Dicas para economizar
        </h2>
        <Divider style={{ backgroundColor: "#0177A4", marginBottom: 20 }} />
        <CssBaseline />
        <div className={classes.paper}>
          <br />
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            {isLoading ? (
              <CircularProgress />
            ) : (
              dicasList.map((item, index) => {
                return (
                  <Grid item md={12} xs={12}>
                    <DicaCard
                      title={item.title}
                      description={item.description}
                      image={item.image}
                    />
                  </Grid>
                );
              })
            )}
          </Grid>
        </div>
        <CustomFab />
      </Container>
    </React.Fragment>
  );
}
