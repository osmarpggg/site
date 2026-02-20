import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ServiceDetail from './pages/ServiceDetail';
import TermsOfUse from './pages/TermsOfUse';
import Cursor from './components/Cursor';
import CyberForm from './components/CyberForm';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
};

function App() {
    const [isCyberFormOpen, setIsCyberFormOpen] = useState(false);

    return (
        <Router>
            <div className="bg-background min-h-screen text-white selection:bg-primary/30 selection:text-white overflow-x-hidden flex flex-col">
                <Cursor />
                <ScrollToTop />
                <Navbar onOpenCyberForm={() => setIsCyberFormOpen(true)} />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home onOpenCyberForm={() => setIsCyberFormOpen(true)} />} />
                        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
                        <Route path="/termos-de-uso" element={<TermsOfUse />} />
                        <Route path="/servicos/:slug" element={<ServiceDetail />} />
                    </Routes>
                </div>
                <Footer />
                <CyberForm isOpen={isCyberFormOpen} onClose={() => setIsCyberFormOpen(false)} />
            </div>
        </Router>
    );
}

export default App;
