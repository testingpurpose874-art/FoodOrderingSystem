import React, { useState, useEffect } from 'react';
import PublicLayout from '../components/PublicLayout';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'

const FoodDetail = () => {
  const userId = localStorage.getItem('userId');
  const [food, setFood] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/foods/${id}`)
      .then(res => res.json())
      .then(data => {
        setFood(data)
      })
  })

  if (!food) return <div>Loading...</div>
  return (
    <PublicLayout>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-5 text-center'>
            <Zoom>
              <img src={`http://127.0.0.1:8000${food.image}`} style={{ width: '100%', maxHeight: '300px' }} />
            </Zoom>
          </div>
          <div className='col-md-7'>
            <h2>{food.item_name}</h2>
            <p className='text-muted'>{food.item_description}</p>
            <p><strong>Category : </strong>{food.category_name}</p>
            <h4>RS {food.item_price}</h4>
            <p className='mt-3'>Shipping: <strong>Free</strong></p>
            {food.is_available ? (
              <button className='btn btn-warning btn-sm d-inline-flex justify-content-center align-items-center gap-2'>
                <FaCartPlus />Add To Cart
              </button>
            ) : (
              <div title='This food item is not available right now. Please try again later'>
                <button className='btn btn-outline-secondary btn-sm '>
                  <i className='fas fa-times-circle me-1'></i>Currently Unavailable
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
// now from 33 to now
export default FoodDetail;