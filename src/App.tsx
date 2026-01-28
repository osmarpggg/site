import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-background min-h-screen text-white selection:bg-primary/30 selection:text-white overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <About />
                <Roadmap />
                <Features />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
