import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Zap, Layers, Server } from 'lucide-react';
import { servicesData } from '../data/services';
import Seo from '../components/Seo';

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = servicesData.find(s => s.slug === slug);

    useEffect(() => {
        if (!service) {
            navigate('/');
        }
    }, [slug, service, navigate]);



    // ... inside component, after service check
    if (!service) return null;

    return (
        <div className="pt-24 pb-12">
            <Seo
                title={service.title}
                description={service.shortDescription}
                canonical={`https://stalflow.com.br/servicos/${service.slug}`}
                image={service.heroImage}
                type="article"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": service.title,
                    "provider": {
                        "@type": "Organization",
                        "name": "StalFlow"
                    },
                    "description": service.description,
                    "areaServed": "BR"
                }}
            />
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex justify-center mb-6">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                                {service.icon}
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-tech mb-4 tracking-tight">{service.title}</h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">{service.shortDescription}</p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-6">
                <Link to="/#services" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-12">
                    <ArrowLeft className="w-4 h-4" /> Voltar para Serviços
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <section>
                            <h2 className="text-2xl font-bold font-tech mb-6 flex items-center gap-2">
                                <Zap className="w-6 h-6 text-secondary" /> O que oferecemos
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed bg-white/5 p-8 rounded-2xl border border-white/10">
                                {service.description}
                            </p>
                        </section>

                        {/* Process */}
                        <section>
                            <h2 className="text-2xl font-bold font-tech mb-8 flex items-center gap-2">
                                <Layers className="w-6 h-6 text-secondary" /> Nosso Processo
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.process.map((step, index) => (
                                    <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                                        <div className="text-4xl font-bold text-white/10 mb-2">0{index + 1}</div>
                                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-gray-400 text-sm">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Benefits Card */}
                        <div className="p-8 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold font-tech mb-6 text-white">Principais Benefícios</h3>
                            <ul className="space-y-4">
                                {service.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="p-8 bg-black rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold font-tech mb-6 flex items-center gap-2">
                                <Server className="w-5 h-5 text-secondary" /> Tecnologias
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {service.technologies.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="p-8 bg-primary/10 rounded-2xl border border-primary/20 text-center">
                            <h3 className="text-xl font-bold text-white mb-4">Pronto para começar?</h3>
                            <p className="text-gray-400 mb-6 text-sm">Vamos transformar sua ideia em realidade com nossa expertise.</p>
                            <a
                                href="https://wa.me/5548999999999" // TODO: Add correct whatsapp number
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all hover:scale-105"
                            >
                                Solicitar Orçamento
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
