import React, { useState, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

// Mock search results - replace with your actual data fetching logic
const mockResults = [
  { id: 1, title: "Nursing Program Admission Requirements", excerpt: "Learn about the requirements to join our nursing program..." },
  { id: 2, title: "Bachelor of Science in Nursing Curriculum", excerpt: "Detailed breakdown of courses for our BSN program..." },
  { id: 3, title: "Clinical Training Schedule", excerpt: "Upcoming dates and locations for clinical rotations..." },
  { id: 4, title: "Tuition and Financial Aid", excerpt: "Information about costs and available financial assistance..." },
];

const SearchForm = ({ searchb_open, setSearchbOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef(null);

  // Focus input when search opens
  useEffect(() => {
    if (searchb_open && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchb_open]);

  // Handle search - replace with your actual search logic
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      // Simulate API call delay
      setTimeout(() => {
        const filteredResults = mockResults.filter(item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResults(filteredResults);
        setIsSearching(false);
      }, 500);
    }
  };

  // Close when result is clicked
  const handleResultClick = () => {
    setSearchbOpen(false);
    setSearchQuery("");
    setResults([]);
  };

  return (
    <>
<<<<<<< HEAD
      {/* Search Form */}
      <div
        className={`z-50 fixed md:w-[600px] w-full h-full top-0 overflow-y-auto bottom-0 px-10
          transform duration-500 ease border-l-4 border-primary 
          ${searchb_open ? "translate-x-0" : "-translate-x-full"} 
          bg-white md:bg-transparent md:backdrop-brightness-75`}
      >
        {/* Close Icon */}
        <div className="relative">
          <div
            onClick={() => setSearchbOpen(false)}
            className="absolute -right-6 top-3 bg-slate-200 h-8 w-8 rounded-full hover:bg-primary hover:text-white duration-200 text-slate-500 text-xl flex justify-center items-center cursor-pointer"
=======
      {/* Search Overlay */}
      <div
        className={`fixed inset-0 z-50 h-full w-full transform overflow-y-auto bg-black/80 backdrop-blur-md transition-all duration-500 ease-in-out ${
          searchb_open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative mx-auto max-w-3xl px-4 pt-20">
          {/* Close Button */}
          <button
            onClick={() => setSearchbOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close search"
>>>>>>> 7e909f27151b1990c9e64a9636036206250b1195
          >
            <MdClose className="h-6 w-6" />
          </button>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative flex items-center rounded-full border-2 border-primary bg-white/10 backdrop-blur-sm">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent py-4 pl-6 pr-12 text-white placeholder-white/70 outline-none"
                placeholder="Search courses, programs, announcements..."
              />
              <button
                type="submit"
                onClick={handleSearch}
                className="absolute right-2 rounded-full bg-primary p-2 text-white transition hover:bg-primary/90"
                aria-label="Search"
              >
                <RiSearch2Line className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Search Results */}
          {(results.length > 0 || isSearching) && (
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              {isSearching ? (
                <div className="flex justify-center py-8">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {results.map((item) => (
                    <li
                      key={item.id}
                      onClick={handleResultClick}
                      className="cursor-pointer rounded-lg p-4 transition hover:bg-white/20"
                    >
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-white/80">{item.excerpt}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* No results message */}
          {!isSearching && searchQuery && results.length === 0 && (
            <div className="rounded-lg bg-white/10 p-4 text-center text-white/80 backdrop-blur-sm">
              No results found for "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchForm;