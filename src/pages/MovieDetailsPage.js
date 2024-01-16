import React from 'react';
import { Link } from 'react-router-dom';
import poster from '../assets/images/poster.jpg';
import profile from '../assets/images/profile.png';
import AquamanBg from '../assets/videos/Aquaman.mp4';

export default function MovieDetailsPage() {
    return (
        <div className='bg-dark'>
            <div className="pt-24 background">
                <div className='container mx-auto md:flex block'>
                    <div className='md:w-1/4 sm:w-full m-5'>
                        <img src={poster} alt='poster' className='rounded-lg shadow-lg shadow-secondary/10' />
                    </div>
                    <div className='md:w-2/4 sm:w-full m-5'>
                        <div className='text-5xl text-secondary md:text-left text-center font-Helvetica'>Avatar</div>
                        <div className='text-xl text-white font-Helvetica mt-6'>2009</div>
                        <div className='text-xl text-white font-Helvetica mt-1'>Action / Adventure / Fantasy / Sci-Fi</div>
                        <div>
                            <div className='text-base text-gray-400 font-Helvetica mt-5 mr-2'>Available in : </div>
                            <button class="border border-gray-400 text-white text-sm rounded-md font-NotoSans hover:text-gray-400 py-1 px-2 mt-3 mr-2">
                                <Link to="/moviedetails">720p.WEB</Link>
                            </button>
                            <button class="border border-gray-400 text-white text-sm rounded-md font-NotoSans hover:text-gray-400 py-1 px-2 mt-3 mr-2">
                                <Link to="/moviedetails">1080p.WEB</Link>
                            </button>
                            <button class="border border-gray-400 text-white text-sm rounded-md font-NotoSans hover:text-gray-400 py-1 px-2 mt-3 mr-2">
                                <Link to="/moviedetails">2160p.WEB</Link>
                            </button>
                        </div>
                        <div>
                            <button class="border border-gray-400 text-white text-sm rounded-md font-NotoSans hover:text-gray-400 py-1 px-2 mt-8 mr-2">
                                <Link to="/moviedetails">Download Subtitles</Link>
                            </button>
                        </div>
                    </div>
                    <div className='md:w-1/4 sm:w-full m-5'>
                        <div className='text-lg text-white font-Helvetica'>Similar Movies</div>
                        <div className='flex'>
                            <div className='md:w-1/2 sm:w-full m-3'>
                                <img src={poster} alt='poster' className='rounded-lg drop-shadow-lg' />
                            </div>
                            <div className='md:w-1/2 sm:w-full m-3'>
                                <img src={poster} alt='poster' className='rounded-lg drop-shadow-lg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto pt-24'>
                <div className='flex'>
                    <div className='md:w-1/3 p-1'>
                        <video class="w-full rounded-md" controls>
                            <source src={AquamanBg} type="video/mp4" />
                        </video>
                    </div>
                    <div className='md:w-1/3 p-1'>
                        <video class="w-full rounded-md" controls>
                            <source src={AquamanBg} type="video/mp4" />
                        </video>
                    </div>
                    <div className='md:w-1/3 p-1'>
                        <video class="w-full rounded-md" controls>
                            <source src={AquamanBg} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div className='container mx-auto pt-14'>
                <div className='md:flex block pb-5'>
                    <div className='md:w-2/3 sm:w-full'>
                        <div className='text-xl text-white font-Helvetica mt-1'>Plot summary</div>
                        <div className='text-base text-gray-400 font-Ceraroundpro mt-5 md:pr-20'>In the 22nd century, a paraplegic Marine is dispatched to the moon
                            Pandora on a unique mission, but becomes torn between following orders and protecting
                            an alien civilization.</div>
                    </div>
                    <div className='md:w-1/3 sm:w-full'>
                        <div className='mb-10'>
                            <div className='text-xl text-white font-Helvetica md:mt-1 mt-10'>Director</div>
                            <div className='flex mt-4'>
                                <img src={profile} alt='poster' className='rounded-lg drop-shadow-lg w-10' />
                                <div className='flex items-center text-gray-400 font-Ceraroundpro text-base ml-3'>James Cameron</div>
                            </div>
                        </div>
                        <div className='mb-10'>
                            <div className='text-xl text-white font-Helvetica mt-1'>Top cast</div>
                            <div className='flex my-4'>
                                <img src={profile} alt='poster' className='rounded-lg drop-shadow-lg w-10' />
                                <div className='flex items-center text-gray-400 font-Ceraroundpro text-base ml-3'>Zoe Saldana
                                    <span className='text-white'>as Neytiri</span></div>
                            </div>
                            <div className='flex my-4'>
                                <img src={profile} alt='poster' className='rounded-lg drop-shadow-lg w-10' />
                                <div className='flex items-center text-gray-400 font-Ceraroundpro text-base ml-3'>Sigourney Weaver
                                    <span className='text-white'>as Dr. Grace Augustine</span></div>
                            </div>
                            <div className='flex my-4'>
                                <img src={profile} alt='poster' className='rounded-lg drop-shadow-lg w-10' />
                                <div className='flex items-center text-gray-400 font-Ceraroundpro text-base ml-3'>Michelle Rodriguez
                                    <span className='text-white'>as Trudy Chacón</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto py-14'>
                <div className='md:flex block pb-5'>
                    <div className='md:w-1/2 sm:w-full md:mr-20'>
                        <div className='text-xl text-white font-Helvetica mt-1'>
                            <i class="fa-solid fa-comments text-secondary"></i> 133 Comments
                        </div>
                        <div className='flex text-base text-gray-400 font-Ceraroundpro mt-5 p-5 rounded-lg bg-dark shadow-lg shadow-secondary/10'>
                            <div className='md:w-2/12 w-3/12 flex items-center'>
                                <img src={profile} alt='poster' className='rounded-lg drop-shadow-lg w-10' />
                            </div>
                            <div className='md:w-10/12 w-9/12'>
                                <div className='flex'>
                                    <div className='md:w-11/12 w-9/12 md:flex'>
                                        <div className='text-sm text-gray-400 font-Ceraroundpro'>dorishredel</div>
                                        <div className='text-sm text-gray-400 font-Ceraroundpro md:ml-2'>September 07, 2023 at 12:15 pm</div>
                                    </div>
                                    <div className='md:w-1/10 w-3/12 justify-end flex'>
                                        <div className='text-sm text-white font-Ceraroundpro'>1</div>
                                        <i class="fa-regular fa-heart text-secondary text-xs items-center flex ml-2"></i>
                                    </div>
                                </div>
                                <div className='text-base text-white font-NotoSans mt-1'>
                                    Would it be possible to upload the extended version in 4K?
                                </div>
                            </div>
                        </div>
                        <div className='flex text-base text-gray-400 font-Ceraroundpro mt-5 p-5 rounded-lg bg-dark shadow-lg shadow-secondary/10'>
                            <div className='md:w-2/12 w-3/12 flex items-center'>
                                <img src={profile} alt='poster' className='rounded-lg drop-shadow-lg w-10' />
                            </div>
                            <div className='md:w-10/12 w-9/12'>
                                <div className='flex'>
                                    <div className='md:w-11/12 w-9/12 md:flex'>
                                        <div className='text-sm text-gray-400 font-Ceraroundpro'>dorishredel</div>
                                        <div className='text-sm text-gray-400 font-Ceraroundpro md:ml-2'>September 07, 2023 at 12:15 pm</div>
                                    </div>
                                    <div className='md:w-1/10 w-3/12 justify-end flex'>
                                        <div className='text-sm text-white font-Ceraroundpro'>1</div>
                                        <i class="fa-regular fa-heart text-secondary text-xs items-center flex ml-2"></i>
                                    </div>
                                </div>
                                <div className='text-base text-white font-NotoSans mt-1'>
                                    Would it be possible to upload the extended version in 4K?
                                </div>
                            </div>
                        </div>
                        <div className='flex text-base text-gray-400 font-Ceraroundpro mt-5 p-5 rounded-lg bg-dark shadow-lg shadow-secondary/10'>
                            <div className='md:w-2/12 w-3/12 flex items-center'>
                                <img src={profile} alt='poster' className='rounded-lg drop-shadow-lg w-10' />
                            </div>
                            <div className='md:w-10/12 w-9/12'>
                                <div className='flex'>
                                    <div className='md:w-11/12 w-9/12 md:flex'>
                                        <div className='text-sm text-gray-400 font-Ceraroundpro'>dorishredel</div>
                                        <div className='text-sm text-gray-400 font-Ceraroundpro md:ml-2'>September 07, 2023 at 12:15 pm</div>
                                    </div>
                                    <div className='md:w-1/10 w-3/12 justify-end flex'>
                                        <div className='text-sm text-white font-Ceraroundpro'>1</div>
                                        <i class="fa-regular fa-heart text-secondary text-xs items-center flex ml-2"></i>
                                    </div>
                                </div>
                                <div className='text-base text-white font-NotoSans mt-1'>
                                    Would it be possible to upload the extended version in 4K?
                                </div>
                            </div>
                        </div>
                        <button class="bg-secondary text-dark font-bold w-full rounded-lg font-NotoSans hover:bg-secondary/70 
                        shadow-lg shadow-secondary/10 py-2 px-5 mt-10">
                            <Link to="/moviedetails">Login to leave a comment</Link>
                        </button>
                    </div>
                    <div className='md:w-1/2 sm:w-full'>
                        <div className='text-xl text-white font-Helvetica mt-1'>
                            <i className="fa-solid fa-star text-secondary"></i> Movie Reviews</div>
                        <div className='text-gray-400 font-Ceraroundpro mt-5 p-5 rounded-md shadow-lg shadow-secondary/10'>
                            <div className='text-gray-400'>
                                <span className='text-sm font-NotoSans'>Reviewed by </span>
                                <span className='text-sm font-Ceraroundpro font-semibold'>jammerknight</span>
                                <span><i className="fa-solid fa-star text-secondary text-xs ml-3"></i></span>
                                <span className='text-gray-400 font-NotoSans ml-2'>9/10</span>
                            </div>
                            <div className='text-base text-gray-400 font-Ceraroundpro font-semibold mt-4'>Groundbreaking cinema</div>
                            <div className='text-sm text-gray-400 font-NotoSans mt-2 mb-4'>
                                I've always enjoyed this film, following the release of the trailer for the second avatar
                                film I decided to give this a rewatch to see if it has 'aged' like many CG heavy films do
                                after 5-10 years and I was pleasantly surprised by how well it holds up.
                                There are certain shadows, textures & lighting which look a bit old now but the rest is
                                still stunning to look at.
                            </div>
                        </div>
                        <div className='text-gray-400 font-Ceraroundpro mt-5 p-5 rounded-md shadow-lg shadow-secondary/10'>
                            <div className='text-gray-400'>
                                <span className='text-sm font-NotoSans'>Reviewed by </span>
                                <span className='text-sm font-Ceraroundpro font-semibold'>jammerknight</span>
                                <span><i className="fa-solid fa-star text-secondary text-xs ml-3"></i></span>
                                <span className='text-gray-400 font-NotoSans ml-2'>9/10</span>
                            </div>
                            <div className='text-base text-gray-400 font-Ceraroundpro font-semibold mt-4'>Groundbreaking cinema</div>
                            <div className='text-sm text-gray-400 font-NotoSans mt-2 mb-4'>
                                I've always enjoyed this film, following the release of the trailer for the second avatar
                                film I decided to give this a rewatch to see if it has 'aged' like many CG heavy films do
                                after 5-10 years and I was pleasantly surprised by how well it holds up.
                                There are certain shadows, textures & lighting which look a bit old now but the rest is
                                still stunning to look at.
                            </div>
                        </div>
                        <div className='text-gray-400 font-Ceraroundpro mt-5 p-5 rounded-md shadow-lg shadow-secondary/10'>
                            <div className='text-gray-400'>
                                <span className='text-sm font-NotoSans'>Reviewed by </span>
                                <span className='text-sm font-Ceraroundpro font-semibold'>jammerknight</span>
                                <span><i className="fa-solid fa-star text-secondary text-xs ml-3"></i></span>
                                <span className='text-gray-400 font-NotoSans ml-2'>9/10</span>
                            </div>
                            <div className='text-base text-gray-400 font-Ceraroundpro font-semibold mt-4'>Groundbreaking cinema</div>
                            <div className='text-sm text-gray-400 font-NotoSans mt-2 mb-4'>
                                I've always enjoyed this film, following the release of the trailer for the second avatar
                                film I decided to give this a rewatch to see if it has 'aged' like many CG heavy films do
                                after 5-10 years and I was pleasantly surprised by how well it holds up.
                                There are certain shadows, textures & lighting which look a bit old now but the rest is
                                still stunning to look at.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
