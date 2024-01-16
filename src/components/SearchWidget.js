import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchWidget() {

    const quality = [
        { label: "All", value: "All" },
        { label: "480p", value: "480p" },
        { label: "720p", value: "720p" },
        { label: "1080p", value: "1080p" },
        { label: "2160p", value: "2160p" },
        { label: "3D", value: "3D" },
    ];

    const genre = [
        { label: "All", value: "All" },
        { label: "Action", value: "Action" },
        { label: "Adventure", value: "Adventure" },
        { label: "Animation", value: "Animation" },
        { label: "Biography", value: "Biography" },
        { label: "Comedy", value: "Comedy" },
        { label: "Crime", value: "Crime" },
        { label: "Documentary", value: "Documentary" },
        { label: "Drama", value: "Drama" },
        { label: "Family", value: "Family" },
        { label: "Fantasy", value: "Fantasy" },
        { label: "Film-Noir", value: "Film-Noir" },
        { label: "Game-Show", value: "Game-Show" },
        { label: "History", value: "History" },
        { label: "Horror", value: "Horror" },
        { label: "Music", value: "Music" },
        { label: "Musical", value: "Musical" },
        { label: "Mystery", value: "Mystery" },
        { label: "News", value: "News" },
        { label: "Reality-TV", value: "Reality-TV" },
        { label: "Romance", value: "Romance" },
        { label: "Sci-Fi", value: "Sci-Fi" },
        { label: "Sport", value: "Sport" },
        { label: "Talk-Show", value: "Talk-Show" },
        { label: "Thriller", value: "Thriller" },
        { label: "War", value: "War" },
        { label: "Western", value: "Western" },
    ];

    const rating = [
        { label: "All", value: "All" },
        { label: "9+", value: "9+" },
        { label: "8+", value: "8+" },
        { label: "7+", value: "7+" },
        { label: "6+", value: "6+" },
        { label: "5+", value: "5+" },
        { label: "4+", value: "4+" },
        { label: "3+", value: "3+" },
        { label: "2+", value: "2+" },
        { label: "1+", value: "1+" },
    ];

    const year = [
        { label: "All", value: "All" },
        { label: "2023", value: "2023" },
        { label: "2022", value: "2022" },
        { label: "2020 - now", value: "2020 - now" },
        { label: "2010 - now", value: "2010 - now" },
        { label: "2010 - 2019", value: "2010 - 2019" },
        { label: "2000 - 2009", value: "2000 - 2009" },
        { label: "1990 - 1999", value: "1990 - 1999" },
        { label: "1980 - 1989", value: "1980 - 1989" },
        { label: "1970 - 1979", value: "1970 - 1979" },
        { label: "1950 - 1969", value: "1950 - 1969" },
        { label: "1900 - 1949", value: "1950 - 1969" },
    ];

    const language = [
        { label: "All", value: "All" },
        { label: "English", value: "English" },
        { label: "Foreign", value: "Foreign" },
        { label: "French", value: "French" },
        { label: "Japanese", value: "Japanese" },
        { label: "Spanish", value: "Spanish" },
        { label: "Italian", value: "Italian" },
        { label: "Germen", value: "Germen" },
        { label: "Chinese", value: "Chinese" },
        { label: "Korean", value: "Korean" },
        { label: "Cantonese", value: "Cantonese" },
        { label: "Hindi", value: "Hindi" },
        { label: "Russian", value: "Russian" },
        { label: "Swedish", value: "Swedish" },
    ];

    const orderBy = [
        { label: "Latest", value: "Latest" },
        { label: "Oldest", value: "Oldest" },
        { label: "Featured", value: "Featured" },
        { label: "Seeds", value: "Seeds" },
        { label: "Peers", value: "Peers" },
        { label: "Year", value: "Year" },
        { label: "IMDb Rating", value: "IMDb Rating" },
        { label: "CineFlix Likes", value: "CineFlix Likes" },
        { label: "RT Audience", value: "RT Audience" },
        { label: "Alphabetical", value: "Alphabetical" },
        { label: "Downloads", value: "Downloads" },
    ];

    return (
        <div className='rounded-lg shadow-lg shadow-secondary/10 px-5 py-10'>
            <form>
                <div className='text-2xl text-gray-400 md:text-left text-center font-Helvetica ml-5 mt-3'>
                    Search Term :
                </div>
                <div className=''>
                    <div className='md:flex'>
                        <div className='md:w-1/2 m-5'>
                            <input type="text" id="first_name" className="bg-dark2 border border-gray-800 text-gray-300 
                        text-sm rounded-md focus:border-gray-500 p-2.5 mb-5 w-full">
                            </input>
                        </div>
                        <div className='md:w-1/2 m-5'>
                            <div className='text-right'>
                                <Link to="/moviedetails">
                                    <button className='bg-secondary text-dark font-Ceraroundpro text-lg hover:bg-secondary/70 
                            shadow-lg py-2 px-8 mb-5 rounded-lg duration-500'>
                                        <i className="fa-solid fa-magnifying-glass mr-2 text-dark"></i>Search
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex md:text-center'>
                        <div className='md:w-1/6 m-5'>
                            <label for="quality" className="block mb-2 text-sm font-medium text-white">Quality :</label>
                            <select id="quality" className="bg-dark2 border border-gray-800 text-gray-300 
                        text-sm rounded-md focus:border-gray-500 p-2.5 w-full">
                                {quality.map(quality => (
                                    <option value={quality.value}>{quality.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className='md:w-1/6 m-5'>
                            <label for="genre" className="block mb-2 text-sm font-medium text-white">Genre :</label>
                            <select id="genre" className="bg-dark2 border border-gray-800 text-gray-300 
                        text-sm rounded-md focus:border-gray-500 p-2.5 w-full">
                                {genre.map(genre => (
                                    <option value={genre.value}>{genre.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className='md:w-1/6 m-5'>
                            <label for="rating" className="block mb-2 text-sm font-medium text-white">Rating :</label>
                            <select id="rating" className="bg-dark2 border border-gray-800 text-gray-300 
                        text-sm rounded-md focus:border-gray-500 p-2.5 w-full">
                                {rating.map(rating => (
                                    <option value={rating.value}>{rating.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className='md:w-1/6 m-5'>
                            <label for="year" className="block mb-2 text-sm font-medium text-white">Year :</label>
                            <select id="year" className="bg-dark2 border border-gray-800 text-gray-300 
                        text-sm rounded-md focus:border-gray-500 p-2.5 w-full">
                                {year.map(year => (
                                    <option value={year.value}>{year.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className='md:w-1/6 m-5'>
                            <label for="language" className="block mb-2 text-sm font-medium text-white">Language :</label>
                            <select id="language" className="bg-dark2 border border-gray-800 text-gray-300 
                        text-sm rounded-md focus:border-gray-500 p-2.5 w-full">
                                {language.map(language => (
                                    <option value={language.value}>{language.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className='md:w-1/6 m-5'>
                            <label for="orderBy" className="block mb-2 text-sm font-medium text-white">Order By :</label>
                            <select id="orderBy" className="bg-dark2 border border-gray-800 text-gray-300 
                        text-sm rounded-md focus:border-gray-500 p-2.5 w-full">
                                {orderBy.map(orderBy => (
                                    <option value={orderBy.value}>{orderBy.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
