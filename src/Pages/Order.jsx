import React, { useContext } from 'react'
import { dataContext } from '../App'; 
import Cartitem from './Cartitem';


function Order() {

  let { data, setdata } = useContext(dataContext);

  

  return (
    <div>
      <center><h1>My Orders</h1></center>
      <br />
      <br />
      <br />
        <div className="cart">
        {
          data.map((item) => {
            if (item.quantity > 0) {
              return (
                <Cartitem key={item.id} name={item.name} price={item.price} quantity={item.quantity} />
              )
            }
          })
        }
      
      </div>
    </div>
  )
}

export default Order