import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ServiceDetail from './pages/ServiceDetail';
import TermsOfUse from './pages/TermsOfUse';
import Cursor from './components/Cursor';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {
    return (
        <Router>
            <div className="bg-background min-h-screen text-white selection:bg-primary/30 selection:text-white overflow-x-hidden flex flex-col">
                <Cursor />
                <ScrollToTop />
                <Navbar />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
                        <Route path="/termos-de-uso" element={<TermsOfUse />} />
                        <Route path="/servicos/:slug" element={<ServiceDetail />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
