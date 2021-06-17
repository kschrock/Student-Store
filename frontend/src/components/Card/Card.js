import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { formatAmount } from "../../utils/format";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 140,
  }
});


export default function OutlinedCard({id, name, category, price, image, description}) {
  const classes = useStyles();
  
  return (
      
    <Card className={classes.root} variant="outlined">
        <CardActionArea component={Link} to={`/item/${id}`}>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
      <CardContent>
        <Typography variant="h5" component="h2">
        <span className="col x2">{name}</span>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        <span className="col x2">{category}</span>
        </Typography>
        <Typography variant="body2" component="p">
        <span className="col x2">{description}</span>
          <br />
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="contained" color="primary"size="small">Add to Cart  <AddShoppingCartIcon /></Button>
        <Typography variant="h5" align="center">{formatAmount(price)}</Typography>
      </CardActions>
    </Card>
  );
}
