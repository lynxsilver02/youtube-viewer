import React from "react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchLine.style.css";


const SearchLine = () => {
  const [srch, setSrch] = useState("");
  const hSubmit = (e) => {
    e.preventDefault();
    var msearh = srch;
    console.log(msearh);
    var API_KEY = "AIzaSyDU6uK4Q_gIQexdlSSX6IQCfe2FfzJbg_s";
    videoSearch(API_KEY, msearh, 12);
  };

  function videoSearch(key, search, maxResulst) {
    var video = "";
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=" +
        key +
        "&type=video&part=snippet&maxResults=" +
        maxResulst +
        "&q=" +
        search
    )
      .then((res) => res.json())
      .then((body) => console.log(body));
    
      
  }

  return (
    <div className='searchLine'>
      <form onSubmit={hSubmit}>
      <FaSearch className="icon" />
        <input
          type="text"
          value={srch}
          onChange={(e) => setSrch(e.target.value)}
        />
        <input className='searcsubmit' type="submit" />
      </form>
    </div>
  );
};
export default SearchLine;
