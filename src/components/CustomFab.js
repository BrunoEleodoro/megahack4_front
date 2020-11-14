import BaloonIcon from "@material-ui/icons/ChatBubble";
import {Fab, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));


export default function CustomFab() {
  const classes = useStyles();
  return (
    <Fab aria-label={"fale conosco"}  className={classes.fab} color={"primary"}>
      <BaloonIcon color="secondary"/>
    </Fab>
  );
}
