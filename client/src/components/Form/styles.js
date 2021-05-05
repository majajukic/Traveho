import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginTop:100
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '6px 12px',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop:10,
    backgroundColor:'#3f51b5'
  },
  buttonClear: {
    backgroundColor:'#7c5ee0'
  },
  previewImage: {
    padding: 1,
    width: '100%',
    maxHeight: 100,
    borderRadius: 5,
    objectFit: 'cover',
    objectPosition: '50% 50%',
  }
}));