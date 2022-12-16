import { Routes, Route, Link, useRoutes, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import BookRoutes from './BookRoutes';

import './App.css';

function App() {
  // const element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />
  //   }
  // ])

  const location = useLocation();
  console.log(location)
  return (
    <div>
      {/* This will always appear irrespective of the routes path as we defined location for it which is static */}
      {/* <Routes location="/dummy">
        <Route path="/dummy" element={<h1>Extra Content</h1>} />
      </Routes> */}
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/" >Home</NavLink>
          </li>
          <li>
            <NavLink end to="/books">Books</NavLink>
          </li>
        </ul>
      </nav>
      {/* {element} */}
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookRoutes />} >
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
