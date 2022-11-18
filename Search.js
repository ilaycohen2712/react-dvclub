import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

const Search = (props) => {
    const [userName, setUserName] = useState('');
    const { username } = useLocation();
    return (
        <div>
            <input className="mx-2 fs-4 text-dark" id="bookname" name="bookname" placeholder="Enter your Book name"></input>
        </div>);
}

export default Search;