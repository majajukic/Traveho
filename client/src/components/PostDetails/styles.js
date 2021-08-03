import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    [theme.breakpoints.up('md')]: {
    width:'500px',
    height:'300px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxHeight: '600px'
    }
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
    [theme.breakpoints.down('sm')]: {
      marginBottom:"30px"
    },
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
  },
commentsOuterContainer: {
  display:"flex",
  justifyContent: "space-between",
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
},
commentsInnerContainer: {
  height:"200px",
  overflowY:"auto",//scroll
  marginRight:"30px"
},
removeButton: {
  justifyContent:"left",
}
}));