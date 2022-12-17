import { useState,useEffect } from "react";
import axios from 'axios';
import "./cashier.css"
import { useContext } from "react";
import { Context } from "../../context/Context";


export default function Cashier() {
  const {user} = useContext(Context)
  const [menu,getMenu] = useState([]);
  const [cart, updateCart] = useState([])
  
  useEffect(()=>{ 
    const fetchMenu = async () =>{
    const res = await axios.get("http://localhost:5000/api/menu/");
    getMenu(res.data);
    }
    fetchMenu();
  },[])

  function containsObject(obj, list) {

    for (var i = 0; i < list.length; i++) {
        if (list[i].dishName === obj.dishName) {
            return true;
        }
    }

    return false;
    }
  function selectDish(dish){
    //console.log(dish)
    const dishobj = {
        id: dish._id,
        dishName: dish.dishName,
        dishPrice: dish.dishPrice,
        quantity: 1,
    }
    if(!containsObject(dishobj,cart))updateCart([...cart,dishobj]);
    //console.log(cart);
  }

  function removeOption(Option){
    updateCart(cart.filter(o => o !== Option))
  }

  function updateQuantity(e,index){
    let newcart = [...cart];
    newcart[index].quantity = e.target.value
    updateCart(newcart)
    console.log(cart)
  }
  function voidOrder (e){
    e.preventDefault()
    updateCart([])
  }
  const takeOrder = async (e) => {
    e.preventDefault()
    let totalprice = 0
    cart.forEach((i)=>{
        totalprice+=i.quantity * i.dishPrice
    })
    const res = await axios.post("http://localhost:5000/api/order/",{
            orders: cart,
            cashierName: user.username,
            totalPrice: totalprice,
        })
    console.log(res)
    updateCart([])
  }
  return (
    <div className='menu'>
      {/* labels insert here */}
      <div className="dishbuttons">
            {menu.map((i)=>(
            <button onClick={ e =>{
                e.stopPropagation()
                selectDish(i)
            }}>{i.dishName}</button>
            ))}
      </div>
        {cart.map((i,index)=>(
            <div className="cart">
                <label>{i.dishName}</label>
                <input type="number" onChange={(e)=>{updateQuantity(e,index)}} name="quantity" min="1" max="5" defaultValue={i.quantity}/>
                <button onClick={ e=>{
                    e.stopPropagation()
                    removeOption(i)
                }}>x</button>
            </div>
            
        ))}
        <button onClick={takeOrder}>Order</button>
        <button onClick={voidOrder}>Void</button>

    </div>
  )
}
