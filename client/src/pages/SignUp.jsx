import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
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
            <form className='flex flex-col gap-4'>
              <div>
                <Label value="Your username"/>
                <TextInput type='text' placeholder='Username' id='username' />
              </div>
              <div>
                <Label value="Your email"/>
                <TextInput type='text' placeholder='name@company.com' id='email' />
              </div>
              <div>
                <Label value="Your password"/>
                <TextInput type='text' placeholder='Password' id='password' />
              </div>
              <Button gradientDuoTone='purpleToBlue' type='submit'>
                  SIGN UP
              </Button>
            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>
                Have an account?
              </span>
              <Link to='/sign-in' className='text-blue-600'>
                Sign In
              </Link>
            </div>
        </div>

      </div>
    </div>
  )
}

export default SignUp