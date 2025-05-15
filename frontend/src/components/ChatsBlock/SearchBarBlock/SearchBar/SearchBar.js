import SearchText from "./SearchText/SearchText";
import SearchIcon from "./SearchIcon/SearchIcon";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <SearchIcon />
      <SearchText />
    </div>
  );
}

export default SearchBar;
