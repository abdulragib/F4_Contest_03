import React from 'react'
import './LandingPage.css'
import {useState} from 'react'


const LandingPage = () => {
    const [value,setValue]=useState('');
    const [movie,setMovies]=useState('');

    const stringEdit=()=>{
        let UpdatedValue=value.replaceAll(/ /g,"+");
        setMovies(UpdatedValue)
    }

  return (
    <div className='Main'>
        <div class="body">
            <div>Movies App</div>
            <hr></hr>
            <p>Search For Movies By Their Title</p>
            <input placeholder='Enter Movie Name' onChange={(e)=>{setValue(e.target.value)}}></input>
            <button className="submit" onClick={()=>stringEdit()}>Start Now!</button>
        </div>
    </div>
  )
}

export default LandingPage