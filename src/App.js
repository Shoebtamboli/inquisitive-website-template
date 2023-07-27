import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import NotFoundPage from "./pages/NotFoundPage";

const theme = createTheme();

export default function App() {
  const location = useLocation();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>

        {location.pathname !== "*" &&
          !location.pathname.match(/^\/\w+\/?$/i) && <NewsLetter />}
        {location.pathname !== "*" &&
          !location.pathname.match(/^\/\w+\/?$/i) && <Footer />}
      </ThemeProvider>
    </React.Fragment>
  );
}
