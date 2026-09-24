import react, { useState, useEffect, useRef } from 'react';
import AdminLayout from '../components/AdminLayout';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "bootstrap/dist/css/bootstrap.min.css";

const AddFood = () => {

  const [categories, setCategories] = useState([]);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    category: '',
    item_name: '',
    item_price: '',
    item_description: '',
    image: null,
    item_quantity: ''
  });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/categories/')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
      })
  }, []);

  const handleChange = (e) => {
    const {name,value} = e.target;

    setFormData((prev)=>({
      ...prev,
      [name]:value
    }));
  }

  const handleFileChange = (e) =>{
    setFormData((prev)=>({
      ...prev,
      image:e.target.files[0]
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("category",formData.category);
    data.append("item_name",formData.item_name);
    data.append("item_price",formData.item_price);
    data.append("item_description",formData.item_description);
    data.append("image",formData.image);
    data.append("item_quantity",formData.item_quantity);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/add-food-item/', {
        method: 'POST',
        body: data
      });
      const result = await response.json();
      if (response.status === 201) {
        toast.success(result.message);
        setFormData({
          category: '',
          item_name: '',
          item_price: '',
          item_description: '',
          image: null,
          item_quantity: ''
        });
        fileInputRef.current.value = '';
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error connecting to server");
    }
  };

  return (
    <AdminLayout>
      <ToastContainer position='top-right' autoClose={2000} />
      <div className='row'>
        <div className='col-md-8'>
          <div className='p-4 shadow-sm rounded'>
            <h4 className='mb-4'>
              <i className='fas fa-plus-circle text-primary me-2'></i> Add Food Item
            </h4>

            <form onSubmit={handleSubmit} encType='multipart/form-data'>
              <div className="mb-3">
                <label className="form-label">Food Category</label>
                <select name='category' value={formData.category} className="form-select" onChange={handleChange} placeholder="Enter Category Name" required >
                  <option value="">Select Category</option>

                  {categories.map((cat) => {
                    return <option key={cat.id} value={cat.id}>{cat.category_name}</option>

                  })}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Food Item Name</label>
                <input type="text" name='item_name' value={formData.item_name} className="form-control" onChange={handleChange} placeholder="Enter Category Name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea name='item_description' value={formData.item_description} className="form-control" onChange={handleChange} placeholder="Enter Description" required></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Quantity</label>
                <input type="text" name='item_quantity' value={formData.item_quantity} className="form-control" onChange={handleChange} placeholder="e.g. 2pcs" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" name='item_price' step='.05' value={formData.item_price} className="form-control" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Image</label>
                <input type="file" accept="image/*" name='image' className="form-control" onChange={handleFileChange} ref={fileInputRef} required />
              </div>
              <button type="submit" className="btn btn-primary mt-2"><i className='fas fa-plus me-2'></i>Add Food Item</button>
            </form>

          </div>
        </div>
        <div className='col-md-4 d-flex justify-content-center align-items-center'>
          <i className='fas fa-pizza-slice' style={{ fontSize: '180px', color: '#e5e5e5' }}></i>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AddFood;