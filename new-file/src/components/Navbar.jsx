import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-white'>
        <h1 className='w-full text-3xl font-bold text-[#33FFFF]'>REACT.</h1>
        <ul className='flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Services</li>
            <li className='p-4'>Info</li>
            <li className='p-4'>Contact</li> 
        </ul>
    </div>
  )
}

export default Navbar