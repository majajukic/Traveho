import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width:'100%',
    height:'350px'
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column'
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: '20px', 
    borderRadius: '15px', 
    height: '39vh',
    marginTop:"100px",
    marginLeft:"40px",
    marginRight:"40px"
  },
  devider: {
    margin: '20px 0' 
  },
  paper: {
    padding: "40px", 
    borderRadius: "15px",
    marginTop:"100px",
    marginLeft:"40px",
    marginRight:"40px"
},
  suggested: {
    width:"200px",
    height:"150px",
    borderRadius:"20px"
  }
}));