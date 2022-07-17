import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Search from '../search/Search';
import Bookmarks from '../bookmarks/Bookmarks';
import NotFound from '../notFound/NotFound';
import { FaSearch, FaRegBookmark, FaBookmark } from "react-icons/fa";


function App() {

  return (
      <BrowserRouter>
          <nav>
            <Link to='' className="links"><FaSearch className="icons" />Поиск</Link>
            <Link to='/bookmarks' className="links"><FaBookmark className="icons" />Закладки</Link>
          </nav>

        <Routes>
          <Route path='' element={<Search />} />
          <Route path='/bookmarks' element={<Bookmarks />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;