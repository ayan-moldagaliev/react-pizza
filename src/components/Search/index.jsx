import styles from "./Search.module.scss";

import SearchIcon from "@images/search.svg";
import CloseIcon from "@images/close.svg";
import { useRef } from "react";

const Search = ({ searchValue, setSearchValueChange }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={styles.root}>
      <img
        className={styles.search__icon}
        src={SearchIcon}
        alt="SearchIcon"
        onClick={handleClick}
      />
      <input
        ref={inputRef}
        name="search"
        className={styles.input}
        value={searchValue}
        onChange={(e) => setSearchValueChange(e.target.value)}
      />
      {searchValue && (
        <img
          onClick={() => setSearchValueChange("")}
          className={styles.close__icon}
          src={CloseIcon}
          alt="Close Icon"
        />
      )}
    </div>
  );
};

export default Search;
