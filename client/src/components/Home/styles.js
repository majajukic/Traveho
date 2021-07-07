import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) =>({
    appBarSearch: {
        borderRadius: 4,
        marginTop:'6.75rem',
        display: 'flex',
        padding: '16px',
      },
    pagination: {
        borderRadius: 4,
        marginTop: '1rem',
        padding: '16px',
      },
    chipInput: {
        margin: '10px 0'
      },
    searchButton: {
        backgroundColor:'#3f51b5',
        color:'white'
      },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: "column-reverse"
        },
    }
}));