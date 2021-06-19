import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../App/App.js"
import { formatAmount } from "../../utils/format.js";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function Checkout({data}) {
  const classes = useStyles();
  const [totalCost, setTotalCost] = useState(0);

function cost(price1, price2){
  let num = Number(price1)*Number(price2)
  return formatAmount(num)
}
function total(number){
  let num = Number(totalCost) + (number)
  setTotalCost(num)
  return formatAmount(num)
}

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Item Name</TableCell>
            <TableCell align="left">Price&nbsp;(USD)</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Cost&nbsp;(USD)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="row" align="left">
                {item.name}
              </TableCell>
              <TableCell align="left">{formatAmount(item.price)}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">{cost(item.price,item.quantity)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}