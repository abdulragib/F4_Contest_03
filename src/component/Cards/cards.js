import React from 'react'
import './cards.css'

export const Cards = ({value,state,data}) => {
  return (
    
    <div className='Page'>
      {state && (Array.isArray(data) ? (data.map((item,index) => {
        return (
          <div className="movie Post" key={index}>
            <img src={item.Poster}  width="363px" height="70%"  alt="poster"></img><br></br>
            <div className='movie-info'>
                <div className="movieTitle">Title: {item.Title}</div><br></br>
                <div className="movieDesc">Type: {item.Type}</div><br></br>
                <div className="movieYear">Year: {item.Year}</div><br></br>
            </div>
            <button className='know-more'>Know More</button>
          </div>
        )
      })):<div>No movies found</div>)}
    </div>
  )
}
