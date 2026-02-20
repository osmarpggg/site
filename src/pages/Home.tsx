import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Vision from '../components/Vision';
import Features from '../components/Features';
import Contact from '../components/Contact';
import Seo from '../components/Seo';

interface HomeProps {
    onOpenCyberForm: () => void;
}

const Home: React.FC<HomeProps> = ({ onOpenCyberForm }) => {
    return (
        <main>
            <Seo
                title="Home"
                description="StalFlow: Softhouse especializada em desenvolvimento de software de alta performance, apps mobile e sites profissionais. Inove com a gente."
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "StalFlow",
                    "url": "https://stalflow.com.br",
                    "logo": "https://stalflow.com.br/logo.png",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+55-42-98818-6315",
                        "contactType": "customer service"
                    }
                }}
            />
            <Hero onOpenCyberForm={onOpenCyberForm} />
            <Services />
            <About />
            <Vision />
            <Features />
            <Contact />
        </main>
    );
};

export default Home;
