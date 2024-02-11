import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import About from '../../pages/About';
import Posts from '../../pages/Posts';
import PostIdPage from '../../pages/PostIdPage';

const AppRouter = () => {
   return (
      
      <Routes>
      <Route path="/about" element={<About/>}/>
      <Route exact path="/posts" element={<Posts/>}/>
      <Route exact path="/posts/:id" element={<PostIdPage/>}/>
      <Route path="*" element={<Navigate to="/posts" replace />} />
      </Routes>
   );
}

export default AppRouter;
