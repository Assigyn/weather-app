function SearchBar() {
  return (
      <div id="search-bar" className="d-flex flex-row w-100 justify-content-between">
          <div>
              <input id="search" type="text" placeholder="Search city...."/>
          </div>
          <div>
              <span>...</span>
          </div>
      </div>
  )
}

export default SearchBar
