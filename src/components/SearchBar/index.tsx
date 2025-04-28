import React, { useState, FormEvent, ChangeEvent } from 'react';

// Define the props interface for type safety and clarity
interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  initialValue?: string;
  className?: string;
}

/**
 * A reusable search input component that triggers an onSearch callback upon
 * submission.
 */
const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = "Enter Keywords...",
  initialValue = '',
  className = '',
}) => {
  // State to hold the current value of the search input
  const [query, setQuery] = useState<string>(initialValue);

  // Handler for changes in the input field
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // Handler for form submission (Enter key press or button click)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior (page reload)
    const trimmedQuery = query.trim(); // Trim whitespace from the query
    // Only call onSearch if the trimmed query is not empty
    if (trimmedQuery) {
      onSearch(trimmedQuery);
    }
    // Optional: You might want to clear the input after search,
    // but often it's better to leave it so the user can see what they searched for.
    // setQuery('');
  };

  // Simple SVG search icon (using Heroicons outline style)
  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      // Basic Tailwind classes for size and color - adjust as needed
      className="w-5 h-5 text-gray-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );

  return (
    // Use a form element for semantic correctness and built-in submit handling (Enter key)
    <form
      onSubmit={handleSubmit}
      // Basic styling using Tailwind: flex layout, border, rounded corners.
      // Add any passed className for custom styling.
      className={`flex items-center border border-gray-300 rounded-md overflow-hidden ${className}`}
      role="search" // Add ARIA role for accessibility
    >
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        // Basic styling: grow to fill space, padding, remove default focus outline
        className="flex-grow px-3 py-2 text-sm focus:outline-none"
        aria-label={placeholder} // Use placeholder as accessible label
      />
      {/* Optional: A button to explicitly submit the search */}
      <button
        type="submit"
        // Basic styling for the button: padding, background on hover
        className="px-3 py-2 bg-gray-50 hover:bg-gray-100 focus:outline-none"
        aria-label="Submit search" // Accessible label for the button
      >
        {searchIcon}
      </button>
    </form>
  );
};

export default SearchBar;

