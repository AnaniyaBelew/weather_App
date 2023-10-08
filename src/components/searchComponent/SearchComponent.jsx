import { useState } from 'react'
import '../searchComponent/SearchCompStyle.css'
const Search=({countries,handelClick})=>
{
    const [search_string,setSearchString]=useState('');
    const filterd_country= countries.filter((country)=>country.toLowerCase().includes(search_string))
    return(
        <div className='Search_container'>
            <div className='input'>
                <input type='search' placeholder='Search for city' onChange={(e)=>setSearchString(e.target.value.toLowerCase())}></input>
            </div>
            <div className='list_countries'>
                {
                filterd_country.map((country,idx)=>
                {
                    return(
                        <p key={idx}>
                        <button  onClick={handelClick} value={country}>
                            {country}
                        </button>
                        </p>
                    )
                })
                } 
            </div>
        </div>
    )
}
export default Search;