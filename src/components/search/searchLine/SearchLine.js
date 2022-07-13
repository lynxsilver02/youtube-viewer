import React from 'react'
import { FaSearch } from "react-icons/fa";
import './SearchLine.style.css'


export default function SearchLine() {
  return (
    <div className='searchLine'>
      <FaSearch className="icon" />
      <input />
    </div>
  )
}