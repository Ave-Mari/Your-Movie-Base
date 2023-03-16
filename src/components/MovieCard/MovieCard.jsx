import React, { useState } from 'react';
import { Wrapper } from './MovieCard.styles.js';

export default function MovieCard( { poster_path, original_title, release_date, id, likeSwitcher } ) {

  const [like, setLike] = useState(false);
  return (
    <Wrapper key={id} like={like}>
        <button onClick={() => {
          setLike(!like); 
          likeSwitcher(id, like);
          }}
          className={like ? 'like' : null}
          >
            ❤
          </button>
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title} />
        <p class="title">{original_title}</p>
        <p class="date">{release_date}</p>
    </Wrapper>
  )
}
