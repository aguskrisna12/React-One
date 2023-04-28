import './movie.css';
import { getMovieList, searchMovies } from './api'
import { useEffect, useState } from 'react'



function Movie (){
    const baseImgUrl = 'http://image.tmdb.org/t/p/w500'
    const [popularMovies, setpopularMovies] = useState([])
  
  
    useEffect(() => {
      getMovieList().then((result) => {
        setpopularMovies(result)
      })
    }, [])
  
  
  
    const PopularMovieList = () => {
      return popularMovies.map((movie, i) => {
        const dateStr = movie.release_date;
        const parts = dateStr.split("-")
        const formatedDate = `${parts[2]}-${parts[1]}-${parts[0]}`
  
        return (
        <div key={i} className='Movie-wrapper'>
          <div className='Movie-title'>{movie.title}</div>
          <img className='Movie-image' src={`${baseImgUrl}/${movie.poster_path}`} alt=""/>
          <div className='Movie-date'>{formatedDate}</div>
          <div className='Movie-rate'>{movie.vote_average.toFixed(1)}</div>
        </div>
        )  
      })
    }
    
    const search = async (q) => {
      if(q.length > 3) {
        const query = await searchMovies(q)
        setpopularMovies(query.results)
      }
    }
    
    console.log({popularMovies : popularMovies})
  
    return (
      <div className="App-movie bg-gradient-to-b from-gray-900 to-gray-500">
        <header className="App-header">
          <h1 className='mb-3'>Movie-Search</h1>
          <input placeholder='search film...' 
          className='Movie-search'
          onChange={({target}) => search(target.value)}
          />
          <div className='Movie-container'>
           <PopularMovieList />
          </div> 
        </header>
      </div>
    );
}

export default Movie;