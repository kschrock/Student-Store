
import axios from "axios"
import { useEffect, useState  } from "react"
import { useParams } from "react-router"
import "./ItemDetail.css"
import { formatAmount } from "../../utils/format"
import { URL } from "../App/App.js"

export default function ItemDetail() {

  const { itemID } = useParams();
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchItemById = async () => {
        try {
            const res = await axios.get(`${URL}/items/list/${itemID}`);
            if (res?.data?.item) {
                setItem(res.data.item);
            }
            
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }
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
      <div className="card disabled">
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
