import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import ItemDetail from "../ItemDetail/ItemDetail"
import Checkout from "../Checkout/Checkout"
import "./App.css"

export const URL = process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001"

export default function App() {

   const [isFetching, setIsFetching] = useState(false);
   const [items, setItems] = useState([]);
   const [cart, setCart] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
       setIsFetching(true)
       const res = await axios.get(`${URL}/items/list`);
       //console.log(res)
      if (res?.data?.items) {
        setItems(res.data.items);
        //get the list of items
      }
       setIsFetching(false)
    }

    fetchData();
  }, []);

  const sendData = async (id) => {
    await axios.post(`${URL}/items/addToCart/${id}/1`);
   }
   

  const test = (data) => {
      //pass down
      console.log("Hello world : " + data)
  }

  const add = (data) => {
    //pass down
    console.log("Hello world : " + data)
    sendData(data)
}

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home 
          add={add}
          test={test}
          items={items}/>} />
          <Route path="/item/:itemID" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
     
  )
}
