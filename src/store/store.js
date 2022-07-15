import { createStore } from "redux"


const defaultState = {
  bookmarks: [],
  searchLine: ''
}

const ADD_BOOKMARK = "ADD_BOOKMARK"
const REMOVE_BOOKMARK = "REMOVE_BOOKMARK"
const CHANGE_SEARCH = "CHANGE_SEARCH"

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return { ...state, bookmarks: [...state.bookmarks, action.payload] }
    case REMOVE_BOOKMARK:
      return { ...state, bookmarks: state.bookmarks.filter(bookmark => bookmark.id !== action.payload) }
    case CHANGE_SEARCH:
      return { ...state, searchLine: action.payload }
    default:
      return state;
  }
}

export const addBookmarkAction = (payload) => ({ type: ADD_BOOKMARK, payload })
export const removeBookmarkAction = (payload) => ({ type: REMOVE_BOOKMARK, payload })
export const changeSearchLineAction = (payload) => ({ type: CHANGE_SEARCH, payload })

export const store = createStore(reducer);