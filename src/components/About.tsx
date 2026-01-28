import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="vision" className="py-24 bg-background border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-tech mb-8 tracking-tighter">
                        VISÃO 2026: <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">O FUTURO DO DIGITAL</span>
                    </h2>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        Nascemos com um propósito claro: não apenas escrever código, mas
                        construir o alicerce digital das empresas do amanhã.
                    </p>
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                        Em um mundo onde a tecnologia avança exponencialmente, nossa missão
                        é garantir que nossos parceiros estejam sempre à frente. Focamos
                        em arquiteturas escaláveis, segurança por design e inovação contínua.
                    </p>

                    <div className="space-y-4">
                        {[
                            "Foco total em Performance e UX",
                            "Arquitetura Limpa e Escalável (Clean Code)",
                            "Segurança e Proteção de Dados",
                            "Metodologias Ágeis de Verdade"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="p-1 bg-accent/10 rounded-full">
                                    <Check className="w-4 h-4 text-accent" />
                                </div>
                                <span className="text-gray-200">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
                    <div className="relative border border-white/10 bg-brand-gray/50 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
                        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="ml-2 font-mono text-xs text-gray-500">system_status.log</span>
                        </div>
                        <div className="space-y-2 font-mono text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">STATUS</span>
                                <span className="text-accent">ONLINE</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">UPTIME</span>
                                <span className="text-white">99.99%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">VERSION</span>
                                <span className="text-primary">v2026.1.0-beta</span>
                            </div>
                            <div className="h-px bg-white/10 my-4" />
                            <div className="text-secondary/80">
                                <span className="text-gray-600">$</span> init_innovation_protocol<br />
                                {'>'} Loading future_assets... [OK]<br />
                                {'>'} Optimizing user_experience... [OK]<br />
                                {'>'} Ready to deploy.
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
