import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./App.css"

export default function App() {
   const [isFetching, setIsFetching] = useState(false);
  // const [filterInputValue, setFilterInputValue] = useState(0);
   const [items, setItems] = useState([]);
  // const [transfers, setTransfers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
       setIsFetching(true)
       const res = await axios.get("http://localhost:3001/items/list");
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
        </Routes>
      </BrowserRouter>
    </div>
     
  )
}
