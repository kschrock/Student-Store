// import AddTransaction from "../AddTransaction/AddTransaction"
// import BankActivity from "../BankActivity/BankActivity"
import "./Home.css"
import StoreItems from "../StoreItems/StoreItems"


export default function Home({items , test, add}) {
  const handler = () => {
    //pass down
   test("Made it here.")
}

  return (
    <div className="Home">
      <StoreItems items={items} add={add}/>
      {/* <button onClick={handler}>Click Here</button> */}
      {/* <AddTransaction />
      <BankActivity /> */}
    </div>
  )
}
