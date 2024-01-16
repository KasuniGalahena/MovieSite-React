import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='bg-dark2'>
      <div className='container mx-auto px-4 pt-16 pb-10'>
        <div className='md:flex text-center justify-center text-sm font-Helvetica'>
          <li className='mx-5 list-none text-gray-400 hover:text-white'><Link to="/browsemovies">Browse Movies</Link></li>
          <li className='mx-2 list-none text-gray-400 hover:text-white'>-</li>
          <li className='mx-5 list-none text-gray-400 hover:text-white'><Link to="/contact">Contact</Link></li>
          <li className='mx-2 list-none text-gray-400 hover:text-white'>-</li>
          <li className='mx-5 list-none text-gray-400 hover:text-white'><Link to="/login">Login</Link></li>
          <li className='mx-2 list-none text-gray-400 hover:text-white'>-</li>
          <li className='mx-5 list-none text-gray-400 hover:text-white'><Link to="/terms&conditions">Terms & Conditions</Link></li>
        </div>
        <div className='flex justify-center mt-4'>
          <Link to="/"><i class="fa-brands fa-facebook-f text-white hover:text-gray-400 text-2xl mx-5"></i></Link>
          <Link to="/"><i class="fa-brands fa-instagram text-white hover:text-gray-400 text-2xl mx-5"></i></Link>
          <Link to="/"><i className="fa-brands fa-youtube text-white hover:text-gray-400 text-2xl mx-5"></i></Link>
        </div>
        <div className='flex justify-center text-gray-400 text-xs mt-4 font-Helvetica'>© 1997-2023 CineFlix, Inc.</div>
      </div>
    </div>
  )
}
