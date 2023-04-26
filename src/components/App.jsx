import { NavLink, Routes, Route } from "react-router-dom";
// import Home from "./page/Home";
import NotFound from "./page/NotFound";
import News from "./page/News";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/news'>News</NavLink>
        <NavLink to='/registr'>Registration</NavLink>
        <NavLink to='/login'>LogIn</NavLink>
      </nav>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/news' element={<News />} />
        <Route path='/news/:newId' element={<div>News element</div>} />
        <Route path='/registr' element={<div>Registration</div>} />
        <Route path='/login' element={<div>LogIn</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
