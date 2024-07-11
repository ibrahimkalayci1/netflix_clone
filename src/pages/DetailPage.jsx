import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../utils/api';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { baseImgUrl } from '../constans';
import DetailDisplay from '../components/DetailDisplay';

const DetailPage = () => {
const [movie, setMovie] = useState(null);
const [error, setError] = useState(null);


// url den filmin id sini almak için useparams kullandık
const {id} = useParams();


useEffect(()=>{
  api
  //url dn gelen id ye göre filmin detayını aldık
  .get(`/movie/${id}`)
  //gelen veriyi state e aktrdk
  .then((res) => setMovie(res.data)).catch(err=>setError(err.message))
},[])
 console.log(movie);

  return (
    <div>
      {
        !movie ? <Loader /> : error ? <Error /> :
        <>
        {/*  üst alan */}
        <div className='h-[20vh] relative'>
          <img src={baseImgUrl + movie.backdrop_path} className='h-full w-full object-cover' />
          <div className=' absolute bg-black bg-opacity-50 inset-0 grid place-items-center'>
            <h2 className=' md:text-3xl text-2xl font-semibold'>{movie.title}</h2>
          </div>
          </div>
          
          <div>
            <div>
              <DetailDisplay title="Kategoriler" data={movie.genres}/>

               <DetailDisplay 
              title={"Konuşulan Diller"} 
              data={movie.spoken_languages}/>  
              <DetailDisplay title={"Yapımcı Şirketler"} data={movie.production_companies}  />   
            </div>
          </div>
          </>
      }
    </div>
  );
};

export default DetailPage
