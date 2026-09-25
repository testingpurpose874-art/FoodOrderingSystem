import React, { useState } from 'react';
import PublicLayout from './PublicLayout';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    emailcont = '',
    password = ''
  })
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { emailcont, password } = formData

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailcont, password })
      });
      const result = await response.json();
      if (response.status === 200) {
        toast.success(result.message || 'You have successfully login');
        localStorage.setItem('userId',result.userId);
        localStorage.setItem('userName',result.userName);
        formData({
          emailcont = '',
          password = ''
        });
        
      }
    }
    } catch (error) {

  }
}

return (
  <>

  </>
)
}

export default Login;