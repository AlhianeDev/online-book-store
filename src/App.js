import Header from './components/Header/Header';

import Home from './pages/Home';

import Authors from './pages/Authors';

import About from './pages/About';

import Contact from './pages/Contact';

import Cart from './pages/Cart';

import Book from './pages/Book';

import Register from './pages/Register';

import Login from './pages/Login';

import Footer from './components/Footer/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { books } from './data/books';

import './App.css';

function App() {

  return (<BrowserRouter>

    <Header />

      <Routes>

        <Route path='/' element={ <Home books={ books } /> } />

        <Route path='/authors' element={ <Authors /> } />

        <Route path='/about' element={ <About /> } />

        <Route path='/contact' element={ <Contact /> } />

        <Route path='/cart' element={ <Cart /> } />

        <Route path='/book/:id' element={ <Book books={ books } /> } />

        <Route path='/register' element={ <Register /> } />

        <Route path='/login' element={ <Login /> } />

      </Routes>

    <Footer />

  </BrowserRouter>);

}

export default App;
