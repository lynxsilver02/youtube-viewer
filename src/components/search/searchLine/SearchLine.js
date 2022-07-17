import React from 'react'
import { FaSearch } from "react-icons/fa";
import './SearchLine.style.css'
import { useState } from "react";

export let data = '0'

export const SearchLine = (props) => {
  const [srch, setSrch] = useState("");
  const hSubmit = (e) => {
    e.preventDefault();
    var msearh = srch;
    console.log(msearh);
    var API_KEY = "AIzaSyA-wgJjwwqdfxyGP6q7AdgUrW0g933KJdE";
    videoSearch(API_KEY, msearh, 50);
  };

  function videoSearch(key, search, maxResulst) {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=" +
      key +
      "&type=video&part=snippet&maxResults=" +
      maxResulst +
      "&q=" +
      search
    )
      .then((res) => res.json())
      .then((body) => { data = body; props.update();});

  }

  return (
    <div>
      <form onSubmit={hSubmit} className='searchLine'>
        <FaSearch className="icon" />
        <input
          type="text"
          value={srch}
          onChange={(e) => setSrch(e.target.value)}
        />
      </form>
    </div>
  );
};