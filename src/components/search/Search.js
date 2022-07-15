import React, { useState } from 'react';
import { Modal } from '../modal/Modal';
import { SearchLine } from './searchLine/SearchLine';
import Video from '../video/Video';
import './Search.style.css'
import { data } from './searchLine/SearchLine';

export default function Search() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState();
  const [update, setUpdate] = useState(false);

  let items = 0;
  if (data != 0) { items = data.items }

  return (
    <div className='main-content'>
      <SearchLine update={() => setUpdate(!update)} />
      {items.length > 0 ?
        [...Array(items.length)].map((item, index) =>
          <Video key={index} item={items[index]} showModal={() => setShow(true)} index={() => setIndex(index)} />
        )
        :
        <></>
      }
      <Modal item={items[index]} show={show} onClose={() => setShow(false)} />
    </div>
  )
}