import React, { useState } from 'react'
import './Video.style.css'
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export default function Video(props) {
  const [checked, setChecked] = useState(false);

  const date = (props.item.snippet.publishedAt).toString();
  const re = /\d{4}-\d{2}-\d{2}/;
  const title = (props.item.snippet.title).replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"');
  return (
    <div onClick={() => { props.showModal(); props.index() }} className='video'>
      <img width='25%' src={props.item.snippet.thumbnails.high.url} />
      <div className='video-info'>
        <p className='title'>{title}</p>
        <p className='publishedAt'>Опубликовано {date.match(re)}</p>
      </div>
      <FaRegBookmark className='bookmark' onClick={(event) => {event.stopPropagation(); setChecked(true)}} />
    </div>
  )
}