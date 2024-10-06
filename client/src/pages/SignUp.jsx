import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth.jsx';

const SignUp = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  }
  return (
    <div className='min-h-screen mt-20'>
      
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        
        <div className='left flex-1'>
            <Link to="/" className="font-bold dark:text-white text-4xl">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-500 via-blue-600 to-blue-500 rounded-lg text-white">Safeer's</span>
                {' '}Blog
            </Link>
            <p className='text-sm mt-5'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis obcaecati esse, velit minus voluptatibus quis, perferendis id reiciendis
            </p>
        </div>
        
        <div className='right flex-1'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div>
                <Label value="Your username"/>
                <TextInput type='text' placeholder='Username' id='username' onChange={handleChange} />
              </div>
              <div>
                <Label value="Your email"/>
                <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange}/>
              </div>
              <div>
                <Label value="Your password"/>
                <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}/>
              </div>
              <Button gradientDuoTone='purpleToBlue' type='submit' disabled={loading}>
              {
              loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
              </Button>
              <OAuth />
            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>
                Have an account?
              </span>
              <Link to='/sign-in' className='text-blue-600'>
                Sign In
              </Link>
            </div>
            {errorMessage && <Alert className='mt-5' color='failure'>{errorMessage}</Alert>}
        </div>

      </div>
    </div>
  )
}

export default SignUp