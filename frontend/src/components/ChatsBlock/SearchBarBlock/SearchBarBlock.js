import AccountBlock from "./AccountBlock/AccountBlock";
import SearchBar from "./SearchBar/SearchBar";
import "./SearchBarBlock.css"

function SearchBarBlock() {
  return (
    <div className="search-bar-block">
      <AccountBlock />
      <SearchBar />
    </div>
  );
}

export default SearchBarBlock;
