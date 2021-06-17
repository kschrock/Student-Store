// import AddTransaction from "../AddTransaction/AddTransaction"
// import BankActivity from "../BankActivity/BankActivity"
import "./Home.css"
import StoreItems from "../StoreItems/StoreItems"

export default function Home({items}) {
  return (
    <div className="Home">
      <StoreItems items={items} />
      {/* <AddTransaction />
      <BankActivity /> */}
    </div>
  )
}
