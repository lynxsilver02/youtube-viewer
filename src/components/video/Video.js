import React, { useState } from 'react'
import './Video.style.css'
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addBookmarkAction, removeBookmarkAction } from '../../store/store';

export default function Video(props) {
  const dispatch = useDispatch();
  const bookmarks = useSelector(state => state.bookmarks);

  const addBookmark = (video) => {
    const bookmark = {
      object: video,
      id: video.id.videoId
    }
    dispatch(addBookmarkAction(bookmark))
  }

  const removeBookmark = (bookmark) => {
    dispatch(removeBookmarkAction(bookmark.id.videoId));
  }

  let flag = false;
  if (bookmarks.length > 0)
   bookmarks.map(bookmark => {if (bookmark.id === props.item.id.videoId) flag = true})

  
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
      {flag ? 
        <FaBookmark className='bookmark' onClick={(event) => {removeBookmark(props.item); event.stopPropagation()}} />
        :
        <FaRegBookmark className='bookmark' onClick={(event) => {addBookmark(props.item); event.stopPropagation()}} />
      }
    </div>
  )
}