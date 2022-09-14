import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import YouTube from 'react-youtube';
import { api_key, image_url } from '../../Constants';
import './RowPost.css'

function RowPost(props) {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [videoId, setVideoId] = useState();
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios.get(props.url)
      .then((response) => {
        setMovieList(response.data.results);
        console.log(response.data)
      })
  }, [props.url])

  const handleMovieTrailer = (movieId) => {

    axios.get(`movie/${movieId}/videos?language=en-US&api_key=${api_key}`)
      .then(response => {
        console.log(response.data.results)
        if (response.data.results.length !== 0) {
          setVideoId(response.data.results[0].key)
        }
        else {
          setVideoId(null);
        }

      })
    // setVideoId('ebzy_VT1Tg0');
  }

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
                <img onClick={() => handleMovieTrailer(movie.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt={movie.original_name ? movie.original_name : movie.original_title}
                  src={image_url + movie.backdrop_path} key={index} />
              );
            })
          }



        </div>
        {videoId && <YouTube videoId={videoId} opts={opts} />}
      </div>
    </div>
  )
}

export default RowPost