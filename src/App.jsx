import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MobilPage from './pages/MobilPage';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MobilForm from "./pages/MobilForm.jsx";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate replace to="/mobil" />} />
                    <Route path="/mobil" element={<MobilPage />} />
                    <Route path="/mobil/new" element={<MobilForm />} />
                    {/* Tambahkan Route lainnya sesuai kebutuhan */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
