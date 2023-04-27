import {Routes, Route } from "react-router-dom";
// import Home from "./page/Home";
// import NotFound from "./page/NotFound";
// import News from "./page/News";
// import NewsDetails from "./page/NewsDetails";
import Layout from "./Layout";
// import Gallery from "./page/Gallery";
import { lazy } from "react";

const Home = lazy(()=> import('./page/Home'))
const NotFound = lazy(()=> import('./page/NotFound'))
const News = lazy(()=> import('./page/News'))
const NewsDetails = lazy(()=> import('./page/NewsDetails'))
const Gallery = lazy(()=> import('./page/Gallery'))
 



export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='news' element={<News />} />
          <Route path='news/:newId' element={<NewsDetails />}>
            <Route path="gallery" element={<Gallery />} />
          </Route>
          <Route path='registr' element={<div>Registration</div>} />
          <Route path='login' element={<div>LogIn</div>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
