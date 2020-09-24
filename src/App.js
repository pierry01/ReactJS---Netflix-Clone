import React, { useEffect, useState } from 'react'
import TMDB from './TMDB'

export default () => {
  const [movieList, setMovieList] = useState([])
  
  useEffect(()=>{
    const loadAll = async () => {
      let list = await TMDB.getHomeList()
      setMovieList(list)
    }
    
    loadAll()
  }, [])

  return (
    <div>
      Olá mundo!!
    </div>
  )
}
