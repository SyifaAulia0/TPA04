// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom';
import { Home, Portfolio, Blog, About } from './pages';
import { Layout } from './components';
import './App.css'


function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App;
