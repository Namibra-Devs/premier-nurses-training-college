import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/About/AboutUs";
import Academics from "../Pages/Academics/Academics";
import Admissions from "../Pages/Admissions/Admissions";
import Students from "../Pages/Students/Students";
import ContactUs from "../Pages/ContactUs/ContactUs";
import RegistrationPage from "../features/ApplicationForm/Register/RegistrationPage";
import LoginPage from "../features/ApplicationForm/Login/LoginPage";
import AppSystem from "../features/ApplicationForm/AppSystem";
import PageNotFound from "../Pages/PageNotFound";
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer/Footer';

// Layout component to handle common page structure
const MainLayout = () => {
  return (
    <>
      <Outlet /> {/* This renders the matched child route */}
      <Footer /> {/* Footer is now included in layout */}
    </>
  );
};

// Layout for auth pages (no footer)
const AuthLayout = () => {
  return <Outlet />;
};

// Private route wrapper
const PrivateRoute = ({ element: Element, ...rest }) => {
  const { currentUser } = useAuth();
  
  return currentUser ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/login-page" replace />
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes with footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/students" element={<Students />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Route>

      {/* Auth routes without footer */}
      <Route element={<AuthLayout />}>
        <Route path="/registration-page" element={<RegistrationPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route 
          path="/application-page" 
          element={<PrivateRoute element={AppSystem} />} 
        />
      </Route>

      {/* 404 catch-all */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;