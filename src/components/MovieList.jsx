import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useEffect, useState } from 'react';
import api from "../utils/api"
import { Link } from 'react-router-dom';
import { baseImgUrl } from '../constans';


const MovieList = ({genre}) => {
const [movies, setMovies] = useState([]);
const [error, setError] = useState([null]);


// genre içerisindeki id ye göre filmleri alabilmek için "/discover/movie" e istek attık

    useEffect(()=>{
        //api den türe göre veriyi alabilmk için parametre belirledik
        const params = {
        with_genres: genre.id
        }
        //api ye istek at
api
.get("/discover/movie",{params})
//api dn cevap gelirse state e aktar
.then((res) => setMovies(res.data.results))
.catch(err =>setError(err.message))
    },[]);
  
    return (
    <div className='my-10'>
      <h1 className='text-3xl font-semibold mb-3'>{genre.name}</h1>
       <Splide options ={{
        pagination: false,
        autowidth:true,
        lazyLoad: true,
       }}>
        {movies.map((movie)=>(
<SplideSlide key ={movie.id}>
    <Link to={`/movie/${movie.id}`}>
    <img 
    className='max-w-[300px] h-full' 
    src={baseImgUrl+movie.poster_path} 
    alt="{movie.title" />
    </Link>
</SplideSlide>
        ))}
        
        
        </Splide>   
   
   
   
   
   
   
   
   
   
   
   
    </div>
  )
}

export default MovieList
