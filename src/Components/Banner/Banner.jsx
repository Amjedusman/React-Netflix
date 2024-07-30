/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../axios';
import { API_KEY, imageurl } from '../../constants/constant';

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const randomMovie = response.data.results[Math.floor(Math.random() * response.data.results.length)];
        console.log(randomMovie);
        setMovie(randomMovie);
      })
      .catch((error) => {
        console.error('Error fetching the movie data:', error);
      });
  }, []);

  const backgroundImage = movie ? `url("${imageurl}${movie.backdrop_path}")` : 'url("https://wallpaperaccess.com/full/2703652.png")';

  return (
    <div className='banner' style={{ backgroundImage }}>
      <div className="content">
        <h1 className='title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className="description">
          {movie?.overview}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
