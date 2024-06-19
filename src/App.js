import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Product from './components/Product/Product';
import History from './components/History/History';
import Footer from './components/Footer/Footer';
import Restaurant from './components/Restaurant/Restaurant';
import Gallery from './components/Gallery/Gallery';
import Order from './components/Order/Order';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Product />
      <History />
      <Restaurant />
      <Gallery />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
