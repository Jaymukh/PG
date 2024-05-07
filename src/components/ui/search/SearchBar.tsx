import React from 'react';
import styles from './Search.module.css'; // Import CSS file for styling
import { GoSearch } from 'react-icons/go';

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
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
