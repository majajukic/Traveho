import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    mainbox: {
        margin: 'auto',
        height: 600,
        width: 600,
        position: 'relative',
        marginTop:100,
    },
    err0: {
        color: '#ffffff',
        fontSize: '11rem',
        position: 'absolute',
        left: '20%',
        top: '8%'
    },
    err1: {
        color: '#ffffff',
        fontSize: '11rem',
        position: 'absolute',
        left: '44%',
        top: '8%'
    },
    err2: {
        color: '#ffffff',
        fontSize: '11rem',
        position: 'absolute',
        left: '68%',
        top: '8%'
    },
    msg1: {
        textAlign: 'center',
        position: 'absolute',
        left: '16%',
        top: '45%',
        width: '75%'
    },
    msg2: {
        textAlign: 'center',
        position: 'absolute',
        left: '16%',
        top: '115%',
        width: '75%'
    },
    link: {
        textDecoration:'none',
        color: '#ffffff'
    }
  }));