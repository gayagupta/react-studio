import "./App.css";
import BakeryItem from "./components/BakeryItem.js"
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import Grid from '@mui/material/Unstable_Grid2'
import { Box, Typography } from "@mui/material"
import { style } from "@mui/system";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;});
/* ############################################################## */


function App() {
/*
  TODO: use useState to create a state variable to hold the state of the cart
*/
const [cart, setCart] = useState({prods: {}, total: 0});

  
const updateCart = (index) => {
  const bakeryItem = bakeryData[index];
  const itemName = bakeryItem.name;
  const currentCart = cart.prods;

  if (itemName in currentCart) {
    currentCart[itemName] += 1;
  }
  else {
    currentCart[itemName] = 1;
  }

  const updatedTotal = cart.total + bakeryItem.price
  setCart({prods: currentCart, total: updatedTotal})
}

  return (
    <Grid container style={{ background: '#f2f6fc' }} spacing={4} sx={{px: 8, py: 1}}>
    <Grid xs={9} spacing={10}>
      <h1 style={{fontFamily: "Monospace", fontSize: 50, textAlign: "center", color: "#f65555"}}>Gaya's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <Grid container spacing={5}>
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components            
          <Grid key={index} xs={4}>
            <BakeryItem item={item} updateCart={updateCart} index={index}>
            </BakeryItem>
          </Grid> 
        ))}
      </Grid>
    </Grid>
    <Grid xs>
      <h2 style={{fontFamily: "Monospace", fontSize: 40, textAlign: "center", color: "#f65555"}}>Cart</h2>
      {Object.keys(cart).map((name) => (
        <Typography mt={2} key={name}>
        </Typography>
      ))} {/* TODO: render a list of items in the cart */}
          {Object.keys(cart.prods).length === 0 ? (
          <Typography align='center' fontStyle='italic' color="#f65555">Add something to your cart!</Typography>
          ) : (
          <Typography align='center' color="#f65555" mt={2}>
            {Object.keys(cart.prods).map((itemName) => (<p>{cart.prods[itemName]} {itemName}</p>))}
            Total: 
            ${cart.total.toFixed(2)}
          </Typography>
        )}   
    </Grid>
  </Grid>

);
}


export default App;
