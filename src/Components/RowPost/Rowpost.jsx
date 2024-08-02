/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import "./Rowpost.css";
import axios from '../../axios';
import { API_KEY, imageurl } from '../../constants/constant';
import YouTube from 'react-youtube';

function Rowpost(props) {
  const [rowmovie, setRowmovie] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setRowmovie(response.data.results);
    });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((resp) => {
      if (resp.data.results.length > 0) {
        setUrlId(resp.data.results[0].key);
      } else {
        setUrlId('');
      }
    });
  };

  const removeUrl = () => {
    setUrlId('');
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {rowmovie.map((item, index) => (
          <div key={index} className="poster" onClick={() => handleMovie(item.id)}>
            <img
              className={props.isSmall ? 'issmall' : 'posterimg'}
              src={`${imageurl}${item.backdrop_path || item.poster_path}`}
              alt={item.name}
            />
            <div className="moviename">{item.name || item.title}</div>
          </div>
        ))}
      </div>
      {urlId && (
        <div className='ytube'>
          <YouTube videoId={urlId} opts={opts} className="youtube-player" />
          <button onClick={removeUrl}>{'\u274C'}</button>
        </div>
      )}
    </div>
  );
}

export default Rowpost;
