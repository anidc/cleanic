import './App.scss';
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation/Navigation';
import Signup from './pages/Signup/Signup';
import { AuthProvider } from './contexts/AuthContext';
import Profile from './pages/Profile/Profile';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile';
import Footer from './components/footer/Footer';
import Search from './pages/Search/Search';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
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
