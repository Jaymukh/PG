import React from 'react';
import styles from './Search.module.css'; // Import CSS file for styling
import { GoSearch } from 'react-icons/go';

interface SearchBarProps {
  classname?: string;
  searchTerm: string;
  handleInputChange: (value: any) => void;
}
const SearchBar = ({ classname, searchTerm, handleInputChange }: SearchBarProps) => {
  return (
    <div className={`${styles.searchContainer} ${classname}`}>
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          handleInputChange(e.target.value);
      }}
      />
      <span className={styles.searchIcon}><GoSearch className="fs-22" /></span>
    </div>
  );
}

export default SearchBar;
