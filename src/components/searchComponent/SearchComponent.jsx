import '../searchComponent/SearchCompStyle.css'
const Search=({countries,handelClick})=>
{
    return(
        <div className='Search_container'>
            <div className='input'>
                <input type='search' placeholder='Search for city'></input>
                <button type='submit'>Search</button>
            </div>
            <div className='list_countries'>
                {
                    console.log(countries)
                countries.countries.map((country,idx)=>
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