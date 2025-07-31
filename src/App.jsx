import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SmoothScrollToTop from './components/UtilityComponents/SmoothScrollToTop';
import AppRoutes from './routes/Routes';

const App = () => {
  AOS.init();
  
  return (
    <Router>
      <SmoothScrollToTop />
      <AppRoutes />
    </Router>
  );
};

export default App;