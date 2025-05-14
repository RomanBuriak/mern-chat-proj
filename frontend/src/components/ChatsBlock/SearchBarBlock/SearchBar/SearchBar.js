import SearchText from "./SearchText/SearchText";
import SearchIcon from "./SearchIcon/SearchIcon";

function SearchBar() {
  return (
    <div className="search-bar">
      <SearchIcon />
      <SearchText />
    </div>
  );
}

export default SearchBar;
