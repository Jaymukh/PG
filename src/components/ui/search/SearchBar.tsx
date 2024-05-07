import React from 'react';
import styles from './Search.module.css'; // Import CSS file for styling
import { GoSearch } from 'react-icons/go';

interface SearchBarProps {
  classname?: string;
}
const SearchBar = ({classname}:SearchBarProps) => {
  return (
    <div className={`${styles.searchContainer} ${classname}`}>
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Search..."
      />
      <span className={styles.searchIcon}><GoSearch className="fs-22" /></span>
    </div>
  );
}

export default SearchBar;
