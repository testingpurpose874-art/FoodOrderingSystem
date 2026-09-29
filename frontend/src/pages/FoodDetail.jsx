import React, { useState, useEffect } from 'react';
import PublicLayout from '../components/PublicLayout';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

const FoodDetail = () =>{
  const userId = localStorage.getItem('userId');
  const [food, setFood] = useState([]);
  useEffect(()=>{
    fetch(`http://127.0.0.1:8000/api/random_foods`)
    .then(res =>res.json())
    .then(data =>{
      setFood(data)
    })
  })
  return(
    <>
      something
    </>
  )
}

export default FoodDetail;