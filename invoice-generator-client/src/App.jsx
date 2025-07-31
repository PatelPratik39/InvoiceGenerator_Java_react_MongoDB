import Dashboard from "./pages/Dashboard/Dashboard";
import LandingPage from "./pages/LandingPage/LandingPage";
import MainPage from "./pages/MainPage";
import PreviewPage from "./pages/PreviewPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import these components (adjust paths as needed)
import Menubar from "./components/Menubar";
import { Toaster } from "react-hot-toast"; // If you are using react-hot-toast

const App = () => {
  return (
    <BrowserRouter>
      <Menubar />
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/generate" element={<MainPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
