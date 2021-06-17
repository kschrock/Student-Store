import "./StoreItems.css"
import React from "react";
import Card from "../Card/Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  }
});

export default function StoreItems({ items }){
    
    const classes = useStyles();
    return (
<div className="StoreItems">
<Typography variant="h1" align="center">Current Items</Typography>
    <Grid
      container
      spacing={3}
      className={classes.gridContainer}
      justify="center"
    >
        {items.map((itemData) => (
          <Grid item xs={12} sm={6} md={4}>
          <Card 
          description={itemData.description}
          image={itemData.image}
          price={itemData.price}
          category={itemData.category}
          id={itemData.id} name={itemData.name}/>
        </Grid>
        ))}
    </Grid>
        </div>
            )

}
