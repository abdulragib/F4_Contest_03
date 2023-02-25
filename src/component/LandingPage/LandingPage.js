import React from 'react'
import './LandingPage.css'
import { useState } from 'react'
import { Cards } from '../Cards/cards';


const LandingPage = () => {
  const [value, setValue] = useState('');
  const [movie, setMovies] = useState('');
  const [state, setState] = useState(false);
  const [data, setData] = useState([]);

  const apiKey = '1a612cf2';

  const stringEdit = () => {
    let UpdatedValue = value.replaceAll("", "+");
    setMovies(UpdatedValue)
  }
  //https://www.omdbapi.com/?apikey=${apiKey}&s=${movie}
 
  const apiCall = async () => {
    stringEdit();
    fetch(`https://www.omdbapi.com/?apikey=3cc4b5c9&s=harry+potter`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data.Search);
        setState(true);
      }).catch(error => console.log(error));
  }

  return (
    <div className='search'>
      <div>Movies App</div>
      <hr width="100%"></hr>
      <p>Search For Movies By Their Title</p>
      <input placeholder='Enter Movie Name' onChange={(e) => { setValue(e.target.value) }}></input>
      <button className="submit" onClick={() => apiCall()}>Start Now!</button>
      {state && (<h1>Movie Result for {value}</h1>)}<br></br>
      <Cards value={value} movie={movie} state={state} data={data}/>
    </div>
  )
}

export default LandingPage