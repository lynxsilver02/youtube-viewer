import React from 'react'
import './Modal.style.css'
import { FaRegBookmark, FaBookmark, FaRegWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addBookmarkAction, removeBookmarkAction } from '../../store/store';

export const Modal = props => {
  const dispatch = useDispatch();
  const bookmarks = useSelector(state => state.bookmarks);
  if (!props.show) {
    return null;
  }
  const title = (props.item.snippet.title).replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  const idURL = props.item.id.videoId;

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
    bookmarks.map(bookmark => { if (bookmark.id === props.item.id.videoId) flag = true })

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-body'>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${idURL}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
          <p className='title'>{title}</p>
          {flag ?
            <FaBookmark className='bookmark' onClick={() => {removeBookmark(props.item); props.onClose()}} />
            :
            <FaRegBookmark className='bookmark' onClick={() => addBookmark(props.item)} />
          }
          <p className='description'>{props.item.snippet.description}</p>
        </div>
      </div>
      <FaRegWindowClose className='close-modal' onClick={props.onClose} />
    </div>
  )
}