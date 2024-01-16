import React from 'react';
import { Link } from 'react-router-dom';
import AquamanBg from '../assets/videos/Aquaman.mp4';

export default function HomeTrailer() {
    return (
        <div>
            <video src={AquamanBg} autoPlay loop muted className='w-full h-screen object-cover' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-end md:text-left text-center 
      text-white font-NotoSans md:pl-10 pl-0 pb-28 md:text-5xl text-3xl'>
                <div className='md:w-1/3'>
                    <div className='font-bold'>
                        Aquaman and the lost kingdom
                    </div>
                    <div className='md:mt-10 mt-3'>
                        <Link to="/">
                            <button className='bg-primary text-dark font-Ceraroundpro text-lg hover:bg-primary/70 
        place-self-center shadow-lg py-2 px-8 rounded duration-500'>
            <i class="fa-solid fa-circle-down mr-2"></i>Download
                            </button>
                        </Link>
                        <Link to="/moviedetails">
                            <button className='bg-secondary text-dark font-Ceraroundpro text-lg hover:bg-secondary/70 
        place-self-center shadow-lg py-2 px-8 ml-3 md:mt-0 mt-3 rounded duration-500'>
            <i class="fa-solid fa-circle-info mr-2"></i>More Info
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='md:w-2/3'></div>
            </div>
        </div>
    )
}
