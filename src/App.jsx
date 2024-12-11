import { NavBar, NotRouteFound, ScrollToTop } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PersonalizedPage from "./pages/PersonalizedPage/PersonalizedPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/personalized" element={<PersonalizedPage />} />
          <Route path="*" element={<NotRouteFound />} />
        </Routes>
      </Router>
      <ScrollToTop />
    </>
  );
}

export default App;
