import React from 'react'
import './cards.css'
import { useNavigate } from 'react-router-dom';

export const Cards = ({value,state,data}) => {
    
    const navigate = useNavigate();

    const handleClick = (id) => {
      // Navigate to the MovieDetails component when the button is clicked
      navigate(`/movies/${data.id}`);
    }

  return (
    <div className='Page'>
      {state && (Array.isArray(data) ? (data.map((item,index) => {
        return (
          <div className="movie Post" key={item.imdbID}>
            <img src={item.Poster}  width="363px" height="60%"  alt="poster"></img><br></br>
            <div className='movie-info'>
                <div className="movieTitle">Title: {item.Title}</div><br></br>
                <div className="movieDesc">Type: {item.Type}</div><br></br>
                <div className="movieYear">Year: {item.Year}</div><br></br>
            </div>
            <button className='know-more' onClick={()=>handleClick(item.imdbID)}>Know More</button>
          </div>
        )
      })):<div>No movies found</div>)}
    </div>
  )
}
