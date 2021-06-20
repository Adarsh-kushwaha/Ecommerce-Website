import React from 'react'
import {AppBar, Toolbar, Iconbutton, Badge, MenuItem,Menu, Typography, IconButton} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import logo from '../../assets/commerce.png'
import useStyles from './styles';
import {Link, useLocation} from 'react-router-dom';

const Navbar = ({totalItems}) => {
    const location = useLocation( );
    // if (location.pathname == '/' )
   
    const classes = useStyles();
    return (
        <>
           <AppBar position ="fixed" className={classes.alpha} color="inherit">
            <Toolbar>
                <Typography variant="h6" className="classes.title" color="inherit" >
                    {/* <img src={logo} alt="Commerce.JS" height="30px" className="classes.image"></img> */}
                     ecommerce
                </Typography>
                <div className = {classes.grow}/>
                {location.pathname == '/' && (
                <div className ={classes.button}>
                <IconButton component={Link} to="/cart" aria-label ="Show Cart Item" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart/>
                </Badge>
                </IconButton>
                </div>)}
                </Toolbar>   
            </AppBar> 
        </>
    )
}

export default Navbar
