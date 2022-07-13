import React, { useState } from 'react'
import './Modal.style.css'
import { FaRegBookmark, FaBookmark, FaRegWindowClose } from "react-icons/fa";

export const Modal = props => {
  const [checked, setChecked] = useState(false);
  if (!props.show) {
    return null;
  }
  const title = (props.item.snippet.title).replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"');
  const idURL = props.item.id.videoId;

  return (
    <div className='modal'>
      <div className='modal-content' onClick={event => event.stopPropagation()}>
        <div className='modal-body'>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${idURL}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen />
          <p className='title'>{title}</p>
          <FaRegBookmark className='bookmark' onClick={(event) => {event.stopPropagation(); setChecked(true)}} />
          <p className='description'>{props.item.snippet.description}</p>
        </div>
      </div>
      <FaRegWindowClose className='close-modal' onClick={props.onClose} />
    </div>
  )
}