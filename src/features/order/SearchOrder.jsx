import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full px-4 py-2 text-sm 
        placeholder:text-stone-400 bg-teal-100 sm:w-64
        focus:outline-none sm:focus:w-72 transition-all duration-300
        focus:ring focus:ring-teal-500 focus:ring-opacity-50"
      />
    </form>
  );
}
