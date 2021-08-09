import {makeStyles} from '@material-ui/core/styles';
import { FormatAlignJustify } from '@material-ui/icons';

export default makeStyles((theme) => ({
    sunsetImage: {
        [theme.breakpoints.up('md')]: {
            width: "480px",
            height: "480px",
            borderRadius:"50%"
          },
        [theme.breakpoints.down('sm')]: {
            width:"100%",
          },
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        
    },
    title: {
        color: "white",
        marginTop:"130px",
        [theme.breakpoints.down('sm')]: {
            marginTop:"0",
          },
    },
    firstSection: {
        display: "flex",
        flexWrap: "nowrap",
        marginTop:"160px",
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
          },
    },
    cardMedia: {
        height:"220px",
        width:"220px",
        marginBottom:"10px"
    },
    card: {
        height:"100%",
        display:"flex",
        flexDirection:"column",
        width:"220px",
        backgroundColor: "#bfb1ec",
        border: "none",
        boxShadow:"none",
        justifyContent:"center",
        padding:"20px"
        
    },
    cardGrid: {
        padding: "20px 0",
        marginTop:"60px",
        justifyContent:"space-between",
    },
    cardContent: {
        flexGrow: 1,
    },
    headerText: {
        color: "#3d16db"
    },
    button: {
        backgroundColor:"#3d16db",
        color:"white",
        marginTop:"10px",
    },
    thirdSection: {
        marginTop:"30px"
    },
    fourtSection: {
        marginTop:"40px"
    },
    callToAction: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    }
}));