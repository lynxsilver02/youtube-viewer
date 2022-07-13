import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Modal } from '../modal/Modal';
import Video from '../video/Video';

export default function Bookmarks() {
  const bookmarks = useSelector(state => state.bookmarks);

  const [show, setShow] = useState(false);
  const [index, setIndex] = useState();


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
        {/* {console.log(bookmarks[0].object)}
          {[...Array(bookmarks.length)].map((item, index) =>
            <Modal item={bookmarks[index].object} show={show} onClose={() => setShow(false)} />
        )} */}
        {/* <Modal item={bookmarks[1].object} show={show} onClose={() => setShow(false)} /> */}
      </div>
    </div>
  )
}