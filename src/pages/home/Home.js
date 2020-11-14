import React from "react";
import { makeStyles, withStyles  } from "@material-ui/core/styles";
import CustomToolbar from "../../components/CustomToolbar";
import CustomFab from "../../components/CustomFab";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
import Box  from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Divider from "@material-ui/core/Divider";
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from "@material-ui/core/Typography";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
    backgroundColor: theme.palette.grey[theme.palette.type === '#444A4E' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#62e060',
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
    fontSize: 20,
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
  card_div1:{
    height:140,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  nova_leitura: {
    background: 'linear-gradient(135deg, #006c9d 20%, #00b3c7 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  card_div2:{
    height:140,
    margin: 10, 
  },
  center:{
    alignContent:'center',
    justifyContent: 'center', 
    verticalAlign: 'center',
  },
  card: {
    marginTop: "20px",
    backgroundColor: "#5c8794",
    color: "#fff",
  },
  card_options: {
    margin: 0,
    padding:5,
    borderRadius:5,
    height:100,
    paddingLeft:20,
    paddingRight:20,
  },
  card_options_2: {
    margin: 0,
    padding:5,
    borderRadius:5,
    height:50,
    paddingLeft:20,
    paddingRight:20,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CustomToolbar showBackButton={false} />
      <div className={classes.root}>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <Paper component="form" className={classes.paper}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item xs={11}>
                <InputBase
                  className={classes.input}
                  fullWidth
                  placeholder="Eu gostaria de..."
                />
              </Grid>
              <Grid item xs={1}>
                <SearchIcon justify="center" />
              </Grid>
            </Grid>
          </Paper>
        </FormControl>
        <Grid container spacing={1} alignItems="center">
          <Grid item md={11} xs={9} sm={9}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  ATUALIZAÇÕES
                </Typography>
                <Divider />
                <Grid container spacing={1}>
                  <Grid item md={3} sm={2} xs={4}  className={classes.card_div1}>
                      <AttachMoneyIcon style={{ fontSize: 40 }}/>
                  </Grid>
                  <Grid item md={8} xs={7} sm={9}  className={classes.card_div2}>
                    <Typography style={{fontSize:12,color:"#252546",fontWeight:"bold"}}>
                      Última leitura:
                    </Typography>
                    <Paper style={{backgroundColor:"#7499a4",marginTop:10,marginBottom:10}}>
                      <Grid container>
                        <Grid item md={10} xs={9} sm={10}>
                        <Typography style={{fontSize:12,paddingRight:10,margin:5,color:"#fff",fontWeight:"bold"}}>
                          R$ 120,00
                        </Typography>
                        </Grid>
                        <Grid item md={2} xs={2} sm={2}>
                        <Typography style={{fontSize:12,marginTop:5,color:"#fff",fontWeight:"bold"}}>
                          30/10
                        </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                    <Typography style={{fontSize:12,color:"#252546",fontWeight:"bold"}}>
                      Meta de consumo:
                    </Typography>
                    <Paper style={{backgroundColor:"#7499a4",marginTop:10,marginBottom:10}}>
                      <Grid container>
                        <Grid item md={10} xs={9} sm={10}>
                        <Typography style={{fontSize:12,paddingRight:10,margin:5,color:"#fff",fontWeight:"bold"}}>
                          R$ 120,00
                        </Typography>
                        </Grid>
                        <Grid item md={2} xs={2} sm={2}>
                        <Typography style={{fontSize:12,marginTop:5,color:"#fff",fontWeight:"bold"}}>
                          30/10
                        </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
                <BorderLinearProgress  variant="determinate" value={50} style={{padding:0}}/>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={1} xs={3} sm={3}>
          <Button className={classes.nova_leitura}>Nova leitura</Button>
          </Grid>
        </Grid>
        <h3 style={{color:"#0177A4",marginBottom:1}}>Serviços em destaque</h3>
        <Divider style={{backgroundColor:"#0177A4", marginBottom:20,}}/>

        <Grid container spacing={1} alignItems="center">
          <Grid item md={6} xs={6} sm={6}>
            <Box className={classes.card_options} border={1} style={{borderColor:"#ED1B24"}}>
              
              <Grid container spacing={1} alignItems="center">
                <Grid item md={10} xs={10} sm={10}>
                <img src={menu1} alt="logo cpfl" />
                </Grid>
                <Grid item md={1} xs={1} sm={1}>
                <IconButton>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </IconButton>
                </Grid>
              </Grid>
             
              <h3 style={{color:"#ED1B24",marginBottom:1}}>Histórico de economias</h3>
              
            </Box>
          </Grid>
          <Grid item md={6} xs={6} sm={6}>
            <Box className={classes.card_options} border={1} style={{borderColor:"#49A748"}}>
              
              <Grid container spacing={1} alignItems="center">
                <Grid item md={10} xs={10} sm={10}>
                <img src={menu2} alt="logo cpfl" />
                </Grid>
                <Grid item md={1} xs={1} sm={1}>
                <IconButton>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </IconButton>
                </Grid>
              </Grid>
             
              <h3 style={{color:"#49A748",marginBottom:1}}>Simulação de gastos</h3>
              
            </Box>
          </Grid>
          <Grid item md={6} xs={6} sm={6}>
            <Box className={classes.card_options} border={1} style={{borderColor:"#00ade0"}}>
              
              <Grid container spacing={1} alignItems="center">
                <Grid item md={10} xs={10} sm={10}>
                <img src={menu3} alt="logo cpfl" />
                </Grid>
                <Grid item md={1} xs={1} sm={1}>
                <IconButton>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </IconButton>
                </Grid>
              </Grid>
             
              <h3 style={{color:"#00ade0",marginBottom:1}}>Dicas para economizar</h3>
              
            </Box>
          </Grid>
          <Grid item md={6} xs={6} sm={6}>
            <Box className={classes.card_options} border={1} style={{borderColor:"#f79735"}}>
              
              <Grid container spacing={1} alignItems="center">
                <Grid item md={10} xs={10} sm={10}>
                <img src={menu4} alt="logo cpfl" />
                </Grid>
                <Grid item md={1} xs={1} sm={1}>
                <IconButton>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </IconButton>
                </Grid>
              </Grid>
             
              <h3 style={{color:"#f79735",marginBottom:1}}>Meus pedidos</h3>
              
            </Box>
          </Grid>
          <Grid item md={6} xs={6} sm={6}>
            <Box className={classes.card_options} border={1} style={{borderColor:"#ED1B24"}}>
              
              <Grid container spacing={1} alignItems="center">
                <Grid item md={10} xs={10} sm={10}>
                <img src={menu5} alt="logo cpfl" />
                </Grid>
                <Grid item md={1} xs={1} sm={1}>
                <IconButton>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </IconButton>
                </Grid>
              </Grid>
             
              <h3 style={{color:"#ED1B24",marginBottom:1}}>Débitos e 2° via de conta</h3>
              
            </Box>
          </Grid>
          <Grid item md={6} xs={6} sm={6}>
            <Box className={classes.card_options} border={1} style={{borderColor:"#49A748"}}>
              
              <Grid container spacing={1} alignItems="center">
                <Grid item md={10} xs={10} sm={10}>
                <img src={menu6} alt="logo cpfl" />
                </Grid>
                <Grid item md={1} xs={1} sm={1}>
                <IconButton>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </IconButton>
                </Grid>
              </Grid>
             
              <h3 style={{color:"#49A748",marginBottom:1}}>Falta de energia</h3>
              
            </Box>
          </Grid>
          <Grid item md={6} xs={6} sm={6}>
            <Box className={classes.card_options} border={1} style={{borderColor:"#00ade0"}}>
              
              <Grid container spacing={1} alignItems="center">
                <Grid item md={10} xs={10} sm={10}>
                <img src={menu7} alt="logo cpfl" />
                </Grid>
                <Grid item md={1} xs={1} sm={1}>
                <IconButton>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </IconButton>
                </Grid>
              </Grid>
             
              <h3 style={{color:"#00ade0",marginBottom:1}}>Desligar energia</h3>
              
            </Box>
          </Grid>
          <Grid item md={6} xs={6} sm={6}>
            <Box className={classes.card_options} border={1} style={{borderColor:"#f79735"}}>
              
              <Grid container spacing={1} alignItems="center">
                <Grid item md={10} xs={10} sm={10}>
                <img src={menu8} alt="logo cpfl" />
                </Grid>
                <Grid item md={1} xs={1} sm={1}>
                <IconButton>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </IconButton>
                </Grid>
              </Grid>
             
              <h3 style={{color:"#f79735",marginBottom:1}}>Religar energia</h3>
              
            </Box>
          </Grid>

          <Grid item md={6} xs={6} sm={6}>
            <Box className={classes.card_options} border={1} style={{borderColor:"#ED1B24"}}>
              
              <Grid container spacing={1} alignItems="center">
                <Grid item md={10} xs={10} sm={10}>
                <img src={menu9} alt="logo cpfl" />
                </Grid>
                <Grid item md={1} xs={1} sm={1}>
                <IconButton>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </IconButton>
                </Grid>
              </Grid>
             
              <h3 style={{color:"#ED1B24",marginBottom:1}}>Débito Automático</h3>
              
            </Box>
          </Grid>
          <Grid item md={6} xs={6} sm={6}>
            <Box className={classes.card_options} border={1} style={{borderColor:"#49A748"}}>
              
              <Grid container spacing={1} alignItems="center">
                <Grid item md={10} xs={10} sm={10}>
                <img src={menu10} alt="logo cpfl" />
                </Grid>
                <Grid item md={1} xs={1} sm={1}>
                <IconButton>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </IconButton>
                </Grid>
              </Grid>
             
              <h3 style={{color:"#49A748",marginBottom:1}}>Trocar nome na conta</h3>
              
            </Box>
          </Grid>

          <Grid item md={12} xs={12} sm={12} justify="center" alignItems="center">
            <Box className={classes.card_options_2} alignItems="center" border={1} style={{borderColor:"#00ade0"}}>
              
              <Grid container spacing={1} justify="center" alignItems="center">
                <Grid item md={10} xs={10} sm={10}>
                <h3 style={{color:"#00ade0",margin:0,padding:0}}>MAIS SERVIÇOS</h3>
                </Grid>
                <Grid item md={1} xs={1} sm={1}>
                <IconButton>
                  <Add/>
                </IconButton>
                </Grid>
              </Grid>
              
            </Box>
          </Grid>
          
        </Grid>
        <CustomFab />
      </div>
    </React.Fragment>
  );
}
