import React, { useState } from 'react';
import { Wrapper } from './MovieCard.styles.js';

export default function MovieCard( { poster_path, original_title, release_date, id} ) {
  return (
    <Wrapper key={id}>
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title} />
        <p class="title">{original_title}</p>
        <p class="date">{release_date}</p>
    </Wrapper>
  )
}
