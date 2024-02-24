import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {

    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        if(!query) return;
        navigate(`/order/${query}`);
        setQuery("");

    }

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search Order #'
        value={query} onChange={e => setQuery(e.target.value)} />
    </form>
  )
}
