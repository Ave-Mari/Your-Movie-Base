import React, { useState, useEffect } from 'react';


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
    <section>
        <h2>Trending now</h2>
        
        <ul>
         
                {movieList.map((item) => {
                    const {original_title, release_date, poster_path, id} = item;
                    return (
                        <li key={id}>
                        <p>{original_title}</p>
                        <p>{release_date}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
                        </li>
                    )
                })}
          
        </ul>
        
    </section>
  )
}
