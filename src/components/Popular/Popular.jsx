import React from 'react';


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
    <div>
        
    </div>
  )
}
