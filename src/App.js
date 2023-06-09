import './App.scss';
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation/Navigation';
import Signup from './pages/Signup/Signup';
import { AuthProvider } from './contexts/AuthContext';
import Profile from './pages/Profile/Profile';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile';
import Footer from './components/Footer/Footer';
import Search from './pages/Search/Search';
import Aboutus from './pages/Aboutus/Aboutus';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigation />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/profile/:uid" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
