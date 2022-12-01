import useStyles from './styles';
import React,{useState} from 'react'
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
import memories from '../../images/memories.png'
import {Link}   from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';



const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
   

    // useEffect(() => {
    //    const token = user?.token;
    //      if(token){
    //         setUser(JSON.parse(localStorage.getItem('profile')));
    //      }
    // } , []);

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        setUser(null);
        history.push('/');
    }

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography  component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
            {user ? 
            (<div className={classes.profile}>
                <Avatar className={classes.purple} src={user.result.imageUrl} alt={user.result.name}>{user.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                <Button variant="contained" className={classes.logout} onClick={handleLogout}>Logout</Button>
            </div>) 
            :    
            (
                <Button component={Link} to="/auth" variant='contained' color="primary">Sign In</Button>
            )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar