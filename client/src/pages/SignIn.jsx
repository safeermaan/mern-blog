import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth.jsx';

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const {loading, error: errorMessage} = useSelector(state => state.user);
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if(res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
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
              This is a demo project. You can sign in with your email &amp; password or with Google
            </p>
        </div>
        
        <div className='right flex-1'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div>
                <Label value="Your email"/>
                <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange}/>
              </div>
              <div>
                <Label value="Your password"/>
                <TextInput type='password' placeholder='********' id='password' onChange={handleChange}/>
              </div>
              <Button gradientDuoTone='purpleToBlue' type='submit' disabled={loading}>
              {
              loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign In'
              )}
              </Button>
              <OAuth />
            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>
                Don't have an account?
              </span>
              <Link to='/sign-up' className='text-blue-600'>
                Sign Up
              </Link>
            </div>
            {errorMessage && <Alert className='mt-5' color='failure'>{errorMessage}</Alert>}
        </div>

      </div>
    </div>
  )
}

export default SignIn