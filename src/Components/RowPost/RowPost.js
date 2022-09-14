import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import { image_url } from '../../Constants';
import './RowPost.css'

function RowPost(props) {

  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios.get(props.url)
      .then((response) => {
        setMovieList(response.data.results);
        console.log(response.data)
      })
  }, [props.url])

  return (
    <div>
      <div className='row'>
        <h2>{props.category}</h2>
        <div className='posters'>

          {
            movieList.map((movie, index) => {
              return (
                // <img className='poster' alt={movie.original_name ? movie.original_name : movie.original_title}
                //   src={image_url + movie.poster_path} key={index}/>
                <img className={props.isSmall ? 'smallPoster' : 'poster'} alt={movie.original_name ? movie.original_name : movie.original_title}
                  src={image_url + movie.backdrop_path} key={index}/>
              );
            })
          }



        </div>
      </div>
    </div>
  )
}

export default RowPost