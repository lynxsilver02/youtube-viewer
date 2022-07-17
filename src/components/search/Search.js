import React, { useState } from 'react';
import { Modal } from '../modal/Modal';
import { SearchLine } from './searchLine/SearchLine';
import Video from '../video/Video';
import './Search.style.css'
import { data } from './searchLine/SearchLine';
import Pagin from './Pagin';


export default function Search() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState();
  const [update, setUpdate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [cPerPage] = useState(10)
  const lastIndex = currentPage * cPerPage
  const firstIndex = lastIndex - cPerPage

  const pags = pgNb => setCurrentPage (pgNb)

  let items = 0;
  if (data != 0) {
     items = data.items
     }


  return (
      <ul>
        
    <div className='main-content'>
      <SearchLine update={() => setUpdate(!update)} />
      
      {items.length > 0 ?
        [...Array(items.length)].slice(firstIndex,lastIndex).map((item, index) =>(
          <li>
          <Video key={index} item={items[index]} showModal={() => setShow(true)} index={() => setIndex(index)} />
          </li>)
          
        )
        :
        <>Введите что нибудь ;3</>
        
      }
      <Pagin
       cPerPage={cPerPage} 
       pags = {pags}
       />
      <Modal item={items[index]} show={show} onClose={() => setShow(false)} />
    </div>
    </ul>
  )

}