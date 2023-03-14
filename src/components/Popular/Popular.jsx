import React, { useState, useEffect } from 'react';
import { Wrapper } from './Popular.styles.js';

export default function Popular() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
      const url = 'https://api.themoviedb.org/3/movie/popular?api_key=c6b7d41b5120297875bbebfc97e4aa5e';
      async function getData() {
        try {
          const res = await fetch(url);
          const data = await res.json();
          console.log(data)
          setMovieList(data.results);
        } catch (error) {
          console.log('error: ', error)
        }
      }
      getData() 
      
    }, []);

  return (
    <Wrapper>
        <h2>Popular Movies</h2>        
        <ul>         
                {movieList.map((item) => {
                    const {original_title, release_date, poster_path, id} = item;
                    return (
                        <li key={id}>                       
                        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title} />
                        <p class="title">{original_title}</p>
                        <p class="date">{release_date}</p>
                        </li>
                    )
                })}          
        </ul>
        
    </Wrapper>
  )
}
