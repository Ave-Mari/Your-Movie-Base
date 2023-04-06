import React, { useState } from 'react';
import { Wrapper } from './MovieCard.styles.js';

export default function MovieCard( { addToFav, poster_path, original_title, release_date, id, likeSwitcher, like } ) {
 
  return (
    <Wrapper key={id} like={like}>
        <button 
          onClick={() => {
          likeSwitcher(id);
          addToFav();
          }}
          className={like ? 'like' : 'no-like'}
          >
            ❤
          </button>
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title} />
        <p class="title">{original_title}</p>
        <p class="date">{release_date}</p>
    </Wrapper>
  )
}


//https://www.npmjs.com/package/react-bootstrap-icons