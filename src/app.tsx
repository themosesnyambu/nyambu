import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageWrapper from '@Components/Layout/PageWrapper';
import BlogPage from '@Pages/Blogs/BlogPage';
import Home from '@Pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper Component={<Home />} />} />
      <Route path="about" element={<PageWrapper Component={<BlogPage />} />} />
    </Routes>
  );
}
export default App;
