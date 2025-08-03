function SearchBar() {
  return (
      <div id="search-bar" className="d-flex flex-row w-100 justify-content-between align-items-center">
          <div>
              <input id="search" type="text" placeholder="Search city...."/>
          </div>
          <div id="radio-temperature">
              <input type="radio" id="radio-celsius" value="c"/>
              <label htmlFor="radio-celsius">°C</label>

              <input type="radio" id="radio-fahrenheit" value="f"/>
              <label htmlFor="radio-fahrenheit">°F</label>
          </div>
      </div>
  )
}

export default SearchBar
