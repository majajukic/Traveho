//Styling with material-ui:
import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2)//'theme' is used to create consistency throughout the app - in this case consistent spacing between elements.
        },
        title: {
          flexGrow: 1
        }
      }));