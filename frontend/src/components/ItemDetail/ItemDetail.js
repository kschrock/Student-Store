
import axios from "axios"
import { useEffect, useState  } from "react"
import { useParams } from "react-router"
import "./ItemDetail.css"
import { formatAmount } from "../../utils/format"
export default function ItemDetail() {

  const { itemID } = useParams();
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchItemById = async () => {
        try {
            console.log({itemID})
            const res = await axios.get(`http://localhost:3001/items/list/${itemID}`);
            if (res?.data?.item) {
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
  }, [itemID]);

  const renderTransactionContent = () => {
    if (isLoading) return <h1>Loading...</h1>
    if (error) return <p className="description">No transaction found</p>

    return (
      <>
        <p className="description">{item?.description}</p>
        <div className="meta">
          <p >{formatAmount(item?.price)}</p>
        </div>
      </>
    )
  }

  return (
    <div className="ItemDetail">
      <div className="card">
        <div className="title">
          <h3>{item?.name}</h3>
          <div id = "container">
          <img src={item?.image} alt={item?.name} />
          </div>
          <p className="category"></p>
        </div>

        {renderTransactionContent()}
      </div>
    </div>
  )
}
