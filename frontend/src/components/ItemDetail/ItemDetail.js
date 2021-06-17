
import axios from "axios"
import { useEffect, useState  } from "react"
import { useParams } from "react-router"
import "./ItemDetail.css"

export default function ItemDetail() {

  const { itemId } = useParams();
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchItemById = async () => {
        try {
            setIsLoading(true)
            const res = await axios.get("http://localhost:3001/items/list/"+itemId);
            //console.log(res.data.transaction)
            if (res?.data?.item) {
                console.log("made it here")
                console.log(res.data.item)
                setItem(res.data.item);
                // console.log(item.price)
            }
            
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }
    //console.log(transaction)
    setIsLoading(false)
    fetchItemById();
  }, [itemId]);

  const renderTransactionContent = () => {
    if (isLoading) return <h1>Loading...</h1>
    if (error) return <p className="description">No transaction found</p>

    return (
      <>
        <p className="description">hello</p>
        <div className="meta">
          <p >hello</p>
        </div>
      </>
    )
  }

  return (
    <div className="ItemDetail">
      <div className="card">
        <div className="title">
          {/* <h3>Transaction #{transactionId}</h3> */}
          <p className="category"></p>
        </div>

        {renderTransactionContent()}
      </div>
    </div>
  )
}
