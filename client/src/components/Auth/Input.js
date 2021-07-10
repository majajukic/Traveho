import React from 'react'
import {TextField, Grid, InputAdornment, IconButton} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';

const Input = ({name, handleChange, label, half, autoFocus, type, handleShowPassword, error, helperText }) => {
    return (
       <Grid item xs={12} sm={half ? 6 : 12}>
           <TextField 
               name={name}
               onChange={handleChange}
               variant="outlined"
               required
               fullWidth
               label={label}
               autoFocus={autoFocus}
               type={type}
               autoComplete="off"
               error={error}
               helperText={helperText}
               InputProps={name === "password" ? {
                   endAdornment: (
                        <IconButton onClick={handleShowPassword}>
                            <InputAdornment position="end">
                            {type === "password" ? <Visibility /> : <VisibilityOff />}
                            </InputAdornment>
                        </IconButton>
                    )
                } : null}
           />
       </Grid>
    )
}

export default Input;
