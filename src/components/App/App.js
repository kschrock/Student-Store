import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import ItemDetail from "../ItemDetail/ItemDetail"
import Checkout from "../Checkout/Checkout"
import "./App.css"

export default function App() {
   const [isFetching, setIsFetching] = useState(false);
  // const [filterInputValue, setFilterInputValue] = useState(0);
   const [items, setItems] = useState([]);
  // const [transfers, setTransfers] = useState([]);
  useEffect(() => {
    console.log("https://student-store-codepath.herokuapp.com/items/list")
    const fetchData = async () => {
       setIsFetching(true)
       const res = await axios.get(`https://student-store-codepath.herokuapp.com/items/list`);
       console.log(res)
      if (res?.data?.items) {
        setItems(res.data.items);
        //get the list of items
      }
       setIsFetching(false)
    }

    fetchData();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home items={items}/>} />
          <Route path="/item/:itemID" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
     
  )
}
