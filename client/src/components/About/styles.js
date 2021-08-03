import {makeStyles} from '@material-ui/core/styles';
import { FormatAlignJustify } from '@material-ui/icons';

export default makeStyles(() => ({
    title: {
        fontSize: "4rem",
        lineHeight: "1.5",
        color: "white",
        marginTop: "95px",
        paddingTop: "100px",
        fontWeight: "bold",
        position:"absolute",
    },
    containerFluid: {
        padding: "3% 15%"
    },
    image: {
        position: "relative",
        width: "550px",
        height: "480px",
        marginTop: "100px",
        marginLeft: "630px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }
}));