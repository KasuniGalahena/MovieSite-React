import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import MovieDetailsPage from './pages/MovieDetailsPage';
import BrowseMovies from './pages/BrowseMovies';
import Trending from './pages/Trending';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import Login from './login-register/Login';
import Register from './login-register/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/moviedetails' element={<MovieDetailsPage />} />
        <Route path='/browsemovies' element={<BrowseMovies />} />
        <Route path='/trendingmovies' element={<Trending />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/terms&conditions' element={<TermsAndConditions />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
