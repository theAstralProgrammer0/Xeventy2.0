"use client";

import React, { useState, useEffect, ChangeEvent } from 'react';
import useDebounce from '@/hooks/useDebounce';

interface SearchBarProps {
  initialValue?: string;
  onSearchChange: (searchTerm: string) => void;
  placeholder?: string;
  debounceDelay?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  initialValue = '',
  onSearchChange,
  placeholder = 'Search videos...',
  debounceDelay = 300,
}) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const debouncedSearchTerm = useDebounce(inputValue, debounceDelay);

  useEffect(() => {
    setInputValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    onSearchChange(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearchChange]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="w-full max-w-xl mx-auto my-4">
      <input
        type="search"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
        aria-label="Search videos"
      />
    </div>
  );
};

export default SearchBar;

