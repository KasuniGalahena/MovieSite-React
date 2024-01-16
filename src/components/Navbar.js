import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import '../css/custom.css'

function Navbar() {
    const [open, setOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const chageBachground = () => {
        if (window.screenY >= 80) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', chageBachground);

    return (
        <nav className='absolute z-10 hover:shadow-md w-full top-0 left-0'>
            <div className={navbar ? 'active' : 'transparent'}>
                <div className='md:flex items-center justify-between py-2 md:px-10 px-7'>
                    <div>
                        <Link to={'/'}>
                            <img src={logo} alt="Logo" className='w-32' />
                        </Link>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden'>
                        <i className="fa-solid fa-bars text-primary" name={open ? 'close' : 'menu'}></i>
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[1] left-0 w-full 
                    md:w-auto md:bg-transparent bg-dark md:px-0 px-9 transition-all duration-500 ease-in ${open ? 'top-12 ' : 'top-[-490px]'}`}>
                        <li className='md:ml-8 md:mt-0 mt-10'>
                            <div class="relative md:w-60 w-full">
                                <input type="search" id="searchbar" className="bg-transparent text-sm rounded-full border border-primary 
                                focus:border-primary text-primary font-Ceraroundpro p-3 w-full" placeholder="Quick search" />
                                <button type="submit" class="absolute top-0 end-0 p-3 text-sm font-medium text-primary 
                                bg-transparent rounded-e-full border border-primary focus:outline-primary 
                                focus:ring-primary">
                                    <svg className="w-4 h-4 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </li>
                        <li className='md:ml-8 md:mt-0 mt-10'>
                            <Link to="/" className="text-primary font-Ceraroundpro text-lg hover:text-secondary duration-500">Home</Link>
                        </li>
                        <li className='md:ml-8 md:mt-0 mt-3'>
                            <Link to="/trendingmovies" className="text-primary font-Ceraroundpro text-lg hover:text-secondary duration-500">Trending</Link>
                        </li>
                        <li className='md:ml-8 md:mt-0 mt-3'>
                            <Link to="/browsemovies" className="text-primary font-Ceraroundpro text-lg hover:text-secondary duration-500">Browse Movies</Link>
                        </li>
                        <li className='md:ml-8 md:mt-0 mt-3'>
                            <div class="inline-flex rounded-md shadow-sm">
                                <Link to="/login" aria-current="page" className="bg-transparent text-secondary font-Ceraroundpro 
                                text-lg border border-secondary rounded-s-lg hover:bg-transparent/40 place-self-center shadow-lg py-1 px-6">
                                    Login
                                </Link>
                                <Link to="/register" className="bg-transparent text-primary font-Ceraroundpro 
                                text-lg border border-primary rounded-e-lg hover:bg-transparent/40 place-self-center shadow-lg py-1 px-6">
                                    Register
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
