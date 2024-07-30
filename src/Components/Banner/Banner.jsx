/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../axios';
import { API_KEY } from '../../constants/constant';

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[0]);
      })
      .catch((error) => {
        console.error('Error fetching the movie data:', error);
      });
  }, []);

  const backgroundImage = movie ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")` : 'url("https://wallpaperaccess.com/full/2703652.png")';

  return (
    <div className='banner' style={{ backgroundImage }}>
      <div className="content">
        <h1 className='title'>{movie?.title}</h1>
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
