import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/login/SignIn";
import Home from "./pages/home/Home";
import Historico from "./pages/historico/Historico";
import NovaLeitura from "./pages/nova_leitura/NovaLeitura";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import ResultadoNovaLeitura from "./pages/resultado_nova_leitura/ResultadoNovaLeitura";
import SimulacaoGastos from "./pages/simulacao_gastos/SimulacaoGastos";
import AdicionarEletrodomestico from "./pages/adicionar_eletrodomestico/AdicionarEletrodomestico";
import Dicas from "./pages/dicas/Dicas";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00bcd4",
    },
    secondary: {
      main: "#fff",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path={"/"}>
              <SignIn />
            </Route>
            <Route path="/home">
              <Home  />
            </Route>
            <Route path={"/historico"}>
              <Historico />
            </Route>
            <Route path={"/nova_leitura"}>
              <NovaLeitura />
            </Route>
            <Route path={"/resultado_nova_leitura"}>
              <ResultadoNovaLeitura />
            </Route>
            <Route path={"/simulacao_gastos"}>
              <SimulacaoGastos />
            </Route>
            <Route path={"/adicionar_eletrodomestico"}>
              <AdicionarEletrodomestico />
            </Route>
            <Route path={"/dicas"}>
              <Dicas />
            </Route>
            
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
