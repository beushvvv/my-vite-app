import { Routes, Route } from "react-router-dom";
import { AppProvider } from './context/AppContext';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Gyms from './pages/Gyms.jsx';
import Contacts from './pages/Contacts.jsx';
import Trainers from './pages/Trainers';
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import DetailsPage from "./pages/DetailsPage";
import '@fontsource/inter/400.css';  // Normal weight (Regular)
import '@fontsource/inter/500.css';  // Medium
import '@fontsource/inter/600.css';  // SemiBold
import '@fontsource/inter/700.css';  // Bold
import './App.css';

function AppContent() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/gyms" element={<Gyms />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/items" element={<HomePage />} />
          <Route path="/items/create" element={<CreatePage />} />
          <Route path="/items/edit/:id" element={<EditPage />} />
          <Route path="/items/details/:id" element={<DetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;