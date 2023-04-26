import { NavLink, Routes, Route } from "react-router-dom";
import NotFound from "./page/NotFound";

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
        <Route path='/' element={<div>Home</div>} />
        <Route path='/news' element={<div>News</div>} />
        <Route path='/news/:newId' element={<div>News element</div>} />
        <Route path='/registr' element={<div>Registration</div>} />
        <Route path='/login' element={<div>LogIn</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
