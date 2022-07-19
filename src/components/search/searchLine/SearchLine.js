import React from 'react'
import { FaSearch } from "react-icons/fa";
import './SearchLine.style.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchLineAction } from '../../../store/store';

export let data = '0'

export const SearchLine = (props) => {
  const dispatch = useDispatch();
  const searchLine = useSelector(state => state.searchLine);

  const hSubmit = (e) => {
    e.preventDefault();
    var API_KEY = "AIzaSyA-wgJjwwqdfxyGP6q7AdgUrW0g933KJdE";
    videoSearch(API_KEY, searchLine, 50);
  };

  const changeSearchLine = (searchLine) => {
    dispatch(changeSearchLineAction(searchLine));
  }

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
          value={searchLine}
          onChange={(e) => changeSearchLine(e.target.value)}
        />
      </form>
    </div>
  );
};