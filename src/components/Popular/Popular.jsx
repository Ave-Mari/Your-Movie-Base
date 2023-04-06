import React, { useState, useEffect } from 'react';
//components
import MovieCard from './../MovieCard/MovieCard.jsx'
//style
import { Wrapper } from './Popular.styles.js'


export default function Popular({ movieList, likeSwitcher, addToFav }) {
   

  return (
    <Wrapper>
        <h2>Popular Movies</h2>        
        <ul>         
                {movieList.map((item) => {
                    const {original_title, release_date, poster_path, id, like} = item;
                    return (
                        <MovieCard
                            id={id}
                            original_title={original_title}
                            poster_path={poster_path}
                            release_date={release_date}
                            likeSwitcher={likeSwitcher}
                            like={like}
                            addToFav={addToFav}
                        />
                    )
                })}          
        </ul>
        
    </Wrapper>
  )
}
