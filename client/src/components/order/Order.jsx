import './order.css'

export default function Order({order}) {
  return (
    <div className="order">
        <div className="orderID">{order._id}</div>
        <div className="orders">{order.orders.map((i)=>(
          <div>
            <span className='dishname'>{i.dishName}</span>
            <span>{i.dishPrice}</span>
            <span>{i.quantity}</span>
          </div>
        ))}</div>
        <div className="cashierName">{order.cashierName}</div>
        <div className="itemPoint">{order.totalPrice}</div>
    </div>
  )
}
