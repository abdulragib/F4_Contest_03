import React from 'react'
import './LandingPage.css'
import { useState } from 'react'
import { Cards } from '../Cards/cards';


const LandingPage = () => {
  const [value, setValue] = useState('harry potter');
  const [state, setState] = useState(false);
  const [data, setData] = useState([]);

  const apiKey = '1a612cf2';

  const api_url=`https://www.omdbapi.com/?apikey=${apiKey}&s=${value.replaceAll(" ", "+")}`;
 
  const apiCall = async () => {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    setData(data.Search); 
    setState(true);
  }

  return (
    <div className='search'>
      <div>Movies App</div>
      <hr width="100%"></hr>
      <p>Search For Movies By Their Title</p>
      <input placeholder='Enter Movie Name' onChange={(e) => { setValue(e.target.value) }}></input>
      <button className="submit" onClick={() => apiCall()}>Start Now!</button>
      {state && (<h1>Movie Result for {value}</h1>)}<br></br>
      <Cards value={value} state={state} data={data}/>
    </div>
  )
}

export default LandingPage