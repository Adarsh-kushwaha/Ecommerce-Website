import React from 'react'
import {Container, Typography,Button,Grid, Link} from '@material-ui/core';
import useStyle from './style';
import CartItems from './CartItems/CartItems';
 

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    const classes = useStyle();
    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no item in your shop try to add some</Typography>
    );

    

    const FilledCart =() => (
        <>
        <Grid container spacing ={3}>
            {cart.line_items.map((item)=>(
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItems item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant = "h4">Subtotal :{cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                <Button component={Link} to ="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
            </div>
        </div>

        </>
    );

     if(!cart.line_items) return 'Loading...';
    return (
        <Container>
            <div className={classes.toolbar}/>
        <Typography className={classes.title} variant ="h3" gutterBottom={2}>Cart</Typography>
            {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
        </Container>
    )
}

export default Cart
