import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { RiSearch2Line, RiFireLine } from "react-icons/ri";
import { AiOutlineFileText, AiOutlineArrowRight, AiOutlineInbox, AiOutlineLink } from "react-icons/ai";
import { searchContent, popularSearches, searchCategories } from "./searchData";

const SearchForm = ({ searchb_open, setSearchbOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // Focus input when search opens
  useEffect(() => {
    if (searchb_open && searchInputRef.current) {
      searchInputRef.current.focus();
      setShowSuggestions(true);
    }
  }, [searchb_open]);

  // Handle search with debouncing for better performance
  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      const timeoutId = setTimeout(() => {
        const searchResults = searchContent(searchQuery);
        
        // Filter by category if not "All"
        const filteredResults = selectedCategory === "All" 
          ? searchResults 
          : searchResults.filter(item => item.category === selectedCategory);
        
        setResults(filteredResults);
        setShowSuggestions(false);
      }, 300); // Debounce delay

      return () => clearTimeout(timeoutId);
    } else {
      setResults([]);
      setShowSuggestions(true);
    }
  }, [searchQuery, selectedCategory]);

  // Handle result click
  const handleResultClick = (result) => {
    if (result.external) {
      // Open external links in new tab
      window.open(result.path, "_blank", "noopener,noreferrer");
    } else {
      // Navigate to internal pages
      navigate(result.path);
    }
    closeSearch();
  };

  // Handle popular search click
  const handlePopularSearchClick = (search) => {
    setSearchQuery(search);
    setShowSuggestions(false);
  };

  // Close search
  const closeSearch = () => {
    setSearchbOpen(false);
    setSearchQuery("");
    setResults([]);
    setShowSuggestions(true);
    setSelectedCategory("All");
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (results.length > 0) {
      handleResultClick(results[0]); // Navigate to first result
    }
  };

  return (
    <>
      {/* Search Overlay */}
      <div
        className={`fixed inset-0 z-50 h-full w-full transform overflow-y-auto bg-black/80 backdrop-blur-md transition-all duration-500 ease-in-out ${
          searchb_open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative mx-auto max-w-4xl px-4 pt-16 md:pt-20 pb-20">
          {/* Close Button */}
          <button
            onClick={closeSearch}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 hover:rotate-90 duration-300"
            aria-label="Close search"
          >
            <MdClose className="h-6 w-6" />
          </button>

          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-semibold text-white mb-2">Search PNTC</h2>
            <p className="text-white/70 text-sm">Find programs, admissions info, and more</p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="relative flex items-center rounded-full border-2 border-primary bg-white/10 backdrop-blur-sm">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent py-4 pl-6 pr-12 text-white rounded-full placeholder-white/70 outline-none text-base"
                placeholder="Search courses, programs, admissions..."
              />
              <button
                type="submit"
                disabled={results.length === 0}
                className="absolute right-2 rounded-full bg-primary p-2 text-white transition hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Search"
              >
                <RiSearch2Line className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Category Filters */}
          <div className="mb-6 flex flex-wrap gap-2 justify-center">
            {searchCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Popular Searches (shown when no query) */}
          {showSuggestions && searchQuery.length < 2 && (
            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <RiFireLine className="text-xl text-yellow-400" /> Popular Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handlePopularSearchClick(search)}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm transition"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {results.length > 0 && (
            <div className="rounded-xl bg-white shadow-2xl overflow-hidden">
              <div className="p-4 bg-primary/10 border-b border-gray-200">
                <p className="text-sm text-gray-700 font-medium">
                  Found {results.length} result{results.length !== 1 ? 's' : ''} for "{searchQuery}"
                </p>
              </div>
              <ul className="divide-y divide-gray-200 max-h-[500px] overflow-y-auto">
                {results.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleResultClick(item)}
                    className="cursor-pointer p-4 transition hover:bg-gray-50 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <AiOutlineFileText className="text-xl" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition">
                            {item.title}
                          </h3>
                          <AiOutlineArrowRight className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition flex-shrink-0" />
                        </div>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.excerpt}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                            {item.category}
                          </span>
                          {item.external && (
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <span>🔗</span> External Link
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* No results message */}
          {searchQuery.length >= 2 && results.length === 0 && !showSuggestions && (
            <div className="rounded-xl bg-white/10 flex flex-col items-center p-8 text-center backdrop-blur-sm">
              <div className="text-6xl mb-4 text-center text-white"><RiSearch2Line/></div>
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-white/70 mb-4">
                We couldn't find anything matching "{searchQuery}"
              </p>
              <p className="text-white/60 text-sm">
                Try different keywords or browse our popular searches above
              </p>
            </div>
          )}

          {/* Help Text */}
          {searchQuery.length < 2 && !showSuggestions && (
            <div className="text-center text-white/60 text-sm mt-4">
              Type at least 2 characters to search
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchForm;