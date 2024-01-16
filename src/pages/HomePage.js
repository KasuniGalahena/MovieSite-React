import React from 'react';
import { Link } from 'react-router-dom';
import HomeTrailer from '../components/HomeTrailer';
import poster from '../assets/images/poster.jpg';

export default function HomePage() {
  return (
    <div>
      <HomeTrailer />
      <div className='bg-dark '>
        <div className='container mx-auto pt-24'>
          <div className='text-3xl text-primary md:text-left text-center font-Helvetica md:pl-8 pb-4'>Latest CineFlix Movies Torrents</div>
          <div className='md:flex block'>
            <div className='md:w-1/4 sm:w-full group m-8'>
              <div className='relative overflow-hidden'>
                <img src={poster} alt='poster' className='rounded-lg drop-shadow-lg' />
                <div className="absolute h-full w-full bg-dark/30 rounded-lg p-6 flex items-center justify-center -bottom-10 
                group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className='block text-center'>
                    <i className="fa-solid fa-star text-secondary text-2xl"></i>
                    <div className='text-xl text-white font-bold font-NotoSans mt-3'>8 / 10</div>
                    <div className='text-xl text-white font-bold font-NotoSans mt-6'>Action / Adventure / Fantasy / Sci-Fi</div>
                    <button class="bg-secondary text-dark font-bold rounded-sm font-NotoSans hover:bg-secondary/70 
                    shadow-lg shadow-secondary/50 py-2 px-5 mt-10">
                      <Link to="/moviedetails">More Info</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className='text-lg text-white font-NotoSans mt-2'>Avatar</div>
              <div className='text-sm text-gray-400 font-NotoSans'>2022</div>
            </div>
            <div className='md:w-1/4 sm:w-full group m-8'>
              <div className='relative overflow-hidden'>
                <img src={poster} alt='poster' className='rounded-lg drop-shadow-lg' />
                <div className="absolute h-full w-full bg-dark/30 rounded-lg p-6 flex items-center justify-center -bottom-10 
                group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className='block text-center'>
                    <i className="fa-solid fa-star text-secondary text-2xl"></i>
                    <div className='text-xl text-white font-bold font-NotoSans mt-3'>8 / 10</div>
                    <div className='text-xl text-white font-bold font-NotoSans mt-6'>Action / Adventure / Fantasy / Sci-Fi</div>
                    <button class="bg-secondary text-dark font-bold rounded-sm font-NotoSans hover:bg-secondary/70 
                    shadow-lg shadow-secondary/50 py-2 px-5 mt-10">
                      <Link to="/moviedetails">More Info</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className='text-lg text-white font-NotoSans mt-2'>Avatar</div>
              <div className='text-sm text-gray-400 font-NotoSans'>2022</div>
            </div>
            <div className='md:w-1/4 sm:w-full group m-8'>
              <div className='relative overflow-hidden'>
                <img src={poster} alt='poster' className='rounded-lg drop-shadow-lg' />
                <div className="absolute h-full w-full bg-dark/30 rounded-lg p-6 flex items-center justify-center -bottom-10 
                group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className='block text-center'>
                    <i className="fa-solid fa-star text-secondary text-2xl"></i>
                    <div className='text-xl text-white font-bold font-NotoSans mt-3'>8 / 10</div>
                    <div className='text-xl text-white font-bold font-NotoSans mt-6'>Action / Adventure / Fantasy / Sci-Fi</div>
                    <button class="bg-secondary text-dark font-bold rounded-sm font-NotoSans hover:bg-secondary/70 shadow-lg shadow-secondary/50 py-2 px-5 mt-10">
                      <Link to="/moviedetails">More Info</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className='text-lg text-white font-NotoSans mt-2'>Avatar</div>
              <div className='text-sm text-gray-400 font-NotoSans'>2022</div>
            </div>
            <div className='md:w-1/4 sm:w-full group m-8'>
              <div className='relative overflow-hidden'>
                <img src={poster} alt='poster' className='rounded-lg drop-shadow-lg' />
                <div className="absolute h-full w-full bg-dark/30 rounded-lg p-6 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className='block text-center'>
                    <i className="fa-solid fa-star text-secondary text-2xl"></i>
                    <div className='text-xl text-white font-bold font-NotoSans mt-3'>8 / 10</div>
                    <div className='text-xl text-white font-bold font-NotoSans mt-6'>Action / Adventure / Fantasy / Sci-Fi</div>
                    <button class="bg-secondary text-dark font-bold rounded-sm font-NotoSans hover:bg-secondary/70 shadow-lg shadow-secondary/50 py-2 px-5 mt-10">
                      <Link to="/moviedetails">More Info</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className='text-lg text-white font-NotoSans mt-2'>Avatar</div>
              <div className='text-sm text-gray-400 font-NotoSans'>2022</div>
            </div>
          </div>
        </div>
        <div className='container mx-auto py-16'>
          <div className='text-3xl text-primary md:text-left text-center font-Helvetica md:pl-8 pb-4'>Upcoming CineFlix Movies</div>
          <div className='md:flex block'>
            <div className='md:w-1/4 sm:w-full group m-8'>
              <div className='relative overflow-hidden'>
                <img src={poster} alt='poster' className='rounded-lg drop-shadow-lg' />
                <div className="absolute h-full w-full bg-dark/30 rounded-lg p-6 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className='block text-center'>
                    <i className="fa-solid fa-star text-secondary text-2xl"></i>
                    <div className='text-xl text-white font-bold font-NotoSans mt-3'>8 / 10</div>
                    <div className='text-xl text-white font-bold font-NotoSans mt-6'>Action / Adventure / Fantasy / Sci-Fi</div>
                    <button class="bg-secondary text-dark font-bold rounded-sm font-NotoSans hover:bg-secondary/70 shadow-lg shadow-secondary/50 py-2 px-5 mt-10">
                      <Link to="/moviedetails">More Info</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className='text-lg text-white font-NotoSans mt-2'>Avatar</div>
              <div className='text-sm text-gray-400 font-NotoSans'>2022</div>
            </div>
            <div className='md:w-1/4 sm:w-full group m-8'>
              <div className='relative overflow-hidden'>
                <img src={poster} alt='poster' className='rounded-lg drop-shadow-lg' />
                <div className="absolute h-full w-full bg-dark/30 rounded-lg p-6 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className='block text-center'>
                    <i className="fa-solid fa-star text-secondary text-2xl"></i>
                    <div className='text-xl text-white font-bold font-NotoSans mt-3'>8 / 10</div>
                    <div className='text-xl text-white font-bold font-NotoSans mt-6'>Action / Adventure / Fantasy / Sci-Fi</div>
                    <button class="bg-secondary text-dark font-bold rounded-sm font-NotoSans hover:bg-secondary/70 shadow-lg shadow-secondary/50 py-2 px-5 mt-10">
                      <Link to="/moviedetails">More Info</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className='text-lg text-white font-NotoSans mt-2'>Avatar</div>
              <div className='text-sm text-gray-400 font-NotoSans'>2022</div>
            </div>
            <div className='md:w-1/4 sm:w-full group m-8'>
              <div className='relative overflow-hidden'>
                <img src={poster} alt='poster' className='rounded-lg drop-shadow-lg' />
                <div className="absolute h-full w-full bg-dark/30 rounded-lg p-6 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className='block text-center'>
                    <i className="fa-solid fa-star text-secondary text-2xl"></i>
                    <div className='text-xl text-white font-bold font-NotoSans mt-3'>8 / 10</div>
                    <div className='text-xl text-white font-bold font-NotoSans mt-6'>Action / Adventure / Fantasy / Sci-Fi</div>
                    <button class="bg-secondary text-dark font-bold rounded-sm font-NotoSans hover:bg-secondary/70 shadow-lg shadow-secondary/50 py-2 px-5 mt-10">
                      <Link to="/moviedetails">More Info</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className='text-lg text-white font-NotoSans mt-2'>Avatar</div>
              <div className='text-sm text-gray-400 font-NotoSans'>2022</div>
            </div>
            <div className='md:w-1/4 sm:w-full group m-8'>
              <div className='relative overflow-hidden'>
                <img src={poster} alt='poster' className='rounded-lg drop-shadow-lg' />
                <div className="absolute h-full w-full bg-dark/30 rounded-lg p-6 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className='block text-center'>
                    <i className="fa-solid fa-star text-secondary text-2xl"></i>
                    <div className='text-xl text-white font-bold font-NotoSans mt-3'>8 / 10</div>
                    <div className='text-xl text-white font-bold font-NotoSans mt-6'>Action / Adventure / Fantasy / Sci-Fi</div>
                    <button class="bg-secondary text-dark font-bold rounded-sm font-NotoSans hover:bg-secondary/70 shadow-lg shadow-secondary/50 py-2 px-5 mt-10">
                      <Link to="/moviedetails">More Info</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className='text-lg text-white font-NotoSans mt-2'>Avatar</div>
              <div className='text-sm text-gray-400 font-NotoSans'>2022</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
