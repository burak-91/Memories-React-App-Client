import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({ name, label, half ,type, handleChange, handleShowPassword }) => {
    return (
        <Grid item xs={6} md={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                label={label}
                type={type}
                onChange={handleChange}
                autoFocus xs={6}
                required
                fullWidth
                variant='outlined'
                InputProps={name==='password' ? {
                    endAdornment: (<InputAdornment position='end'>
                        <IconButton onClick={handleShowPassword}>
                            {type ==='password' ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>)
                } : null} 
            />
        </Grid>
    )
}

export default Input