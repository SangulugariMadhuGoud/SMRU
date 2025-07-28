import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls window to top whenever the pathname changes */
const ScrollToTop = ({ smooth = true }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? "smooth" : "auto"
    });
  }, [pathname, smooth]);

  return null; // this component renders nothing
};

export default ScrollToTop;
