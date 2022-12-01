import React, { useState } from 'react'
import { Avatar, Button, Typography, Container, Grid, Paper, Icon } from '@material-ui/core'
import useStyle from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import { GoogleLogin } from 'react-google-login';
import Icons from './Icons';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

const Auth = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSubmit = () => { }

    const handleChange = () => { }

    const handleShowPassword = () => {
        showPassword ? setShowPassword(false) : setShowPassword(true);
    };

    const switchMode = () => {
        isSignUp ? setIsSignUp(false) : setIsSignUp(true);
    }

    const googleSuccess = async (response) => {
        const result = response?.profileObj;
        const token = response?.tokenId;
        
        try {
            dispatch({ type: 'AUTH', payload: { result, token } });
            history.push('/');
        } catch (error) {
            console.log(error);
        }
            
       
    }

    const googleFailure = (response) => { console.log(response) }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignUp && (
                            <>
                                <Input name="firstName" label="First Name" type="name" handleChange={handleChange}  half />
                                <Input name="lastName" label="Last Name" type="name" handleChange={handleChange} half />
                            </>
                        )}
                        <Input name="email" label="Email" type="email" handleChange={handleChange} />
                        <Input name="password" label="Password" type={showPassword ? 'text' : 'password'} handleChange={handleChange} handleShowPassword={handleShowPassword} />
                        {isSignUp && <Input name="confirmPassword" label="Confirm Password" type={showPassword ? 'text' : 'password'} handleChange={handleChange} handleShowPassword={handleShowPassword} />}
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        render={(renderProps) => (
                            <Button
                                className={classes.googleButton}
                                color="primary"
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                variant="contained"
                            ><Icons/> &nbsp; Google Sign In</Button>
                        )}
                        clientId='196270459280-n1g27qjonkropu7tclj18i9jnh64lj73.apps.googleusercontent.com'
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                       
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button className={classes.submit} onClick={switchMode}>
                                {isSignUp ? 'already have an account? Sign In' : 'do not have any account? Sign Up'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth