/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import  { useEffect, useState } from 'react';
import "./Rowpost.css";
import axios from '../../axios';
import {imageurl } from '../../constants/constant';

function Rowpost(props) {
  const [rowmovie, setRowmovie] = useState([]);

  useEffect(() => {
    axios.get(`${props.url}`).then((response) => {
      console.log(response.data.results);
      setRowmovie(response.data.results);
    });
  }, [props.url]);

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {rowmovie.map((item, index) => (
          <div key={index} className="poster">
            <img className={props.isSmall?'issmall':'posterimg'} src={`${imageurl}${item.backdrop_path || item.poster_path}`} alt={item.name} />
            <div className="moviename">{item.name || item.title }</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rowpost;
