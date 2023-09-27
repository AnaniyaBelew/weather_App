import '../searchComponent/SearchCompStyle.css'
const Search=()=>
{
    return(
        <div className='Search_container'>
            <div className='input'>
                <input type='search' placeholder='Search for city'></input>
                <button type='submit'>Search</button>
            </div>
            <div>
                Filtered City
            </div>
        </div>
    )
}
export default Search;