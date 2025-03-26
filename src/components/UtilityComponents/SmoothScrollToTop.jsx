import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SmoothScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when route changes
  }, [pathname]);

  return null;
};

export default SmoothScrollToTop;
