import '../searchComponent/SearchCompStyle.css'
const Search=(countries)=>
{
    return(
        <div className='Search_container'>
            <div className='input'>
                <input type='search' placeholder='Search for city'></input>
                <button type='submit'>Search</button>
            </div>
            <div>
                <div>{countries}</div>
                {/* {
                    
                    countries.map((country,idx)=>
                    {
                        return(
                            <p key={idx}>
                                country
                            </p>
                        )
                    })
                } */}
            </div>
        </div>
    )
}
export default Search;