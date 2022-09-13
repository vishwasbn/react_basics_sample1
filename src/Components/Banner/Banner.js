
import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../../Axios'
import { api_key, image_url } from '../../Constants'

import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState();
    useEffect(() => {
        axios.get(`/trending/all/week?api_key=${api_key}&language=en-US`).then((response) => {
            const maxNum = response.data.results.length;
            const index = Math.floor(Math.random() * maxNum);
            console.log(response.data.results[index]);
            setMovie(response.data.results[index]);
        })
    }, [])
    return (
        <div className='banner' style={{ backgroundImage: `url(${movie ? image_url + movie.backdrop_path : ''})` }}>
            <div className='content' >
                <h1 className='title' >{movie ? `${movie.title ? movie.title : movie.name}` : ''} </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description' >{movie ? movie.overview : ''}</h1>
            </div>
            <div className="fade_bottom" >
            </div>
        </div>)
}

export default Banner