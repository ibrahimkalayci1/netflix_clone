import { useEffect } from 'react'
import Hero from '../components/Hero'
import { useDispatch, useSelector } from 'react-redux'
import { getPopular } from '../redux/actions/movieAction'
import { getGenres } from '../redux/actions/genreAction'
import Loader from '../components/Loader'
import MovieList from '../components/MovieList'
import Error from '../components/Error'

const MainPage = () => {
  //sayfa yüklendiği anda dispatch ile tetikle get populer ı çalıştır
const dispatch = useDispatch();
 const {isLoading, error,genres} = useSelector((store)=> store.genres)
console.log(genres);

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);
  
  
  
  return (
    <div>
      <Hero />

      {isLoading ? (<Loader />) : error ? (<Error /> ): (
          genres.map ((genre) => <MovieList key={genre.id} genre={genre} />)
        )}

    </div>
  )
}

export default MainPage;