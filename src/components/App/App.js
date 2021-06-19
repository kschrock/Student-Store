import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import ItemDetail from "../ItemDetail/ItemDetail"
import Checkout from "../Checkout/Checkout"
import "./App.css"
import { set } from "harmony-reflect"

export const URL = process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001"

export default function App() {

   const [isFetching, setIsFetching] = useState(false);
   const [items, setItems] = useState([]);
   const [cartNumber, setCartNumber] = useState(0);
   const [data, setData] = useState([]);

   const updateCart = async () => {
    const res = await axios.get(`${URL}/items/cart/list`);
    const res2 = await axios.get(`${URL}/items/cart/count`);
    if (res?.data?.items) {
      setData(res.data.items);
    }
    setCartNumber(res2.data.count)
  }


  useEffect(() => {

    const fetchData = async () => {
       setIsFetching(true)
       updateCart()
       const res = await axios.get(`${URL}/items/list`);
      if (res?.data?.items) {
        setItems(res.data.items);
      }
       setIsFetching(false)
    }

    fetchData();
  }, []);

  const sendData = async (id) => {
    await axios.post(`${URL}/items/addToCart/${id}/1`);
    updateCart()
   }

   const updateData = async () => {
    const res = await axios.get(`${URL}/items/cart/list`);
    if (res?.data?.items) {
      setData(res.data.items);
      //console.log(res.data.items)
      //get the list of items
    }
   }


  const test = (data) => {
      //pass down
      console.log("Hello world : " + data)
  }

  const add = (data) => {
    //pass down
    //console.log("Hello world : " + data)
    sendData(data)
}


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cartNumber={cartNumber} data={data}/>

        <Routes>
          <Route path="/" element={<Home 
          add={add}
          test={test}
          items={items}/>} />
          <Route path="/item/:itemID" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout
          data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
     
  )
}
