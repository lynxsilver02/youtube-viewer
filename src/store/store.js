import { createStore } from "redux"


const defaultStateBookmarks = {
  bookmarks: []
}

const ADD_BOOKMARK = "ADD_BOOKMARK"
const REMOVE_BOOKMARK = "REMOVE_BOOKMARK"

const reducerBookmarks = (state = defaultStateBookmarks, action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return { ...state, bookmarks: [...state.bookmarks, action.payload] }
    case REMOVE_BOOKMARK:
      return { ...state, bookmarks: state.bookmarks.filter(bookmark => bookmark.id !== action.payload) }
    default:
      return state;
  }
}

export const addBookmarkAction = (payload) => ({type: ADD_BOOKMARK, payload})
export const removeBookmarkAction = (payload) => ({type: REMOVE_BOOKMARK, payload})

export const store = createStore(reducerBookmarks);