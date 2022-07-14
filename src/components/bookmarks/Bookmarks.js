import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Modal } from '../modal/Modal';
import Video from '../video/Video';

export default function Bookmarks() {
  const bookmarks = useSelector(state => state.bookmarks);

  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);


  return (
    <div>
      {console.log(bookmarks)}
      <div className='main-content'>
        {bookmarks.length > 0 ? [...Array(bookmarks.length)].map((item, index) =>
            <Video key={index} item={bookmarks[index].object} showModal={() => setShow(true)} index={() => setIndex(index)} />
        )
          :
          <div style={{ textAlign: 'center', marginTop: '10%' }}>
            <h2>Добавьте видео в закладки</h2>
          </div>
        }
        {bookmarks.length > 1 ?
          <Modal item={bookmarks[index].object} show={show} onClose={() => setShow(false)} />
          :
          bookmarks.length == 1 ? <Modal item={bookmarks[0].object} show={show} onClose={() => setShow(false)} /> : <></>
        }
      </div>
    </div>
  )
}