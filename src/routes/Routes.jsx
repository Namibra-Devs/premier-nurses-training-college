import { Routes, Route, Outlet } from 'react-router-dom';
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/About/AboutUs";
import Academics from "../Pages/Academics/Academics";
import Admissions from "../Pages/Admissions/Admissions";
import Students from "../Pages/Students/Students";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PageNotFound from "../Pages/PageNotFound";
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

      {/* 404 catch-all */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;