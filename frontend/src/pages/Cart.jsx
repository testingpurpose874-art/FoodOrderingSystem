import React, { useState, useEffect } from 'react';
import PublicLayout from '../components/PublicLayout';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {

  const userId = localStorage.getItem('userId');
  const [cartItems, setCartItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!userId){
      navigate('/login');
      return;
    }
    fetch(`http://127.0.0.1:8000/api/cart/${userId}`)
    .then(res => res.json())
    .then(data => {
      setCartItems(data);
      const total = data.reduce((sum,item)=> sum + item.food.item_price * quantity,0);
      setGrandTotal(total);
    })
  },[])

  return (
    <PublicLayout>
      <ToastContainer position='top-right' autoClose={2000} />
      <div className='container py-5'>

      </div>
    </PublicLayout>
  )
}

export default Cart;