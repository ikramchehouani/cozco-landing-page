import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Product from './components/Product/Product';
import History from './components/History/History';
import Footer from './components/Footer/Footer';
import Restaurant from './components/Restaurant/Restaurant';
import Gallery from './components/Gallery/Gallery';
import Order from './components/Order/Order';
import ProductPage from './components/Product/ProductPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Main />
              <About />
              <Product />
              <History />
              <Restaurant />
              <Gallery />
              <Order />
            </>
          } />
          <Route path="/boissons" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
