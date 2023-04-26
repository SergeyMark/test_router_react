import {Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import News from "./page/News";
import NewsDetails from "./page/NewsDetails";
import Layout from "./Layout";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='news' element={<News />} />
          <Route path='news/:newId' element={<NewsDetails />} />
          <Route path='registr' element={<div>Registration</div>} />
          <Route path='login' element={<div>LogIn</div>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
