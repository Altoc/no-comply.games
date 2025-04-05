import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Navigate to="/personal-site" />} />
          <Route path='/personal-site' element={<Home/>} />
          <Route path='/personal-site/portfolio' element={<Portfolio/>} />
          <Route path='/personal-site/contact' element={<Contact/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
    </>
  )
}
