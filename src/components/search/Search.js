import React, { useState } from 'react';
import './Search.style.css'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { SearchLine, data } from './searchLine/SearchLine';
import Video from '../video/Video';
import { Modal } from '../modal/Modal';
import Pagination from '../pagination/Pagination';


export default function Search() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState();
  const [update, setUpdate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cPerPage] = useState(5);
  const lastIndex = currentPage * cPerPage;
  const firstIndex = lastIndex - cPerPage;

  const pags = (pgNb) => setCurrentPage(pgNb);
  const nextPage = () => setCurrentPage((prev) => prev != 10 ? prev + 1 : prev = 10);
  const prefPage = () => setCurrentPage((prev) => prev != 1 ? prev - 1 : prev = 1);

  let items = 0;
  if (data != 0) {
    items = data.items
  }

  return (
    <ul>
      <div className='main-content'>
        <SearchLine update={() => { setUpdate(!update); setCurrentPage(1) }} />

        {items.length > 0 ?
          <>
            {[...Array(items.length)].slice(firstIndex, lastIndex).map((item, index) => (
              <Video
                key={index}
                item={items[firstIndex + index]}
                showModal={() => setShow(true)}
                index={() => setIndex(firstIndex + index)} />
            ))}
            <Pagination cPerPage={cPerPage} pags={pags} currentPage={currentPage} />
            <div className="buttonNav">
              <FaAngleDoubleLeft className='arrow' onClick={prefPage} />
              <FaAngleDoubleRight className='arrow' onClick={nextPage} />
            </div>
          </>
          :
          <></>
        }
        <Modal item={items[index]} show={show} onClose={() => setShow(false)} />
      </div>
    </ul>
  )
}