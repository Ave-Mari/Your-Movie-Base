import React, { useState, useEffect } from 'react';
//components
import MovieCard from './../MovieCard/MovieCard.jsx'

export default function MyList( { userFavList } ) {
  return (
    <section>
       <h2>My Favorite Movies</h2> 
       <div className="wrapper">
        {userFavList.map((item) => {
          const {original_title, release_date, poster_path, id, like} = item;
          return (
            <MovieCard
            id={id}
            original_title={original_title}
            poster_path={poster_path}
            release_date={release_date}
        />
          )
        })}
       </div>
    </section>
  )
}
