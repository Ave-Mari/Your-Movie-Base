import React, { useState, useEffect } from 'react';
//router
import { Route, Routes } from 'react-router-dom';
//style
import './main.css';
//components
import Dashboard from './components/Dashboard/Dashboard.jsx';
import MyList from './components/MyList/MyList.jsx';
import Popular from './components/Popular/Popular.jsx';


function App() {
    
    const [movieList, setMovieList] = useState([]);

    const [userList, setUserList] = useState([]);

    useEffect(() => {
      const url = 'https://api.themoviedb.org/3/movie/popular?api_key=c6b7d41b5120297875bbebfc97e4aa5e';
      async function getData() {
        try {
          const res = await fetch(url);
          const data = await res.json();
          setMovieList(data.results);
        } catch (error) {
          console.log('error: ', error)
        }
      }
      getData();
       
    }, []);


    const likeSwitcher = (id) => {         
        movieList.map((item) => {
            if (item.id === id) { 
                item.like = !item.like
            }
           return item;
        });
        setMovieList([...movieList]);
    }

    return (
        <div className='wrapper'>
            <h1>Your movie Database</h1>
                <Routes>           
                    <Route path="/" element={ <Dashboard /> }>                  
                        <Route index element={<>...app description...</>} /> 
                        <Route path="popular" 
                            element={
                            <Popular 
                                movieList={movieList}
                                likeSwitcher={likeSwitcher}     
                            />} /> 
                        <Route path="my-list" element={<MyList />} /> 
                    </Route>
                        
                </Routes>
           
        </div>
    )
}


export default App;