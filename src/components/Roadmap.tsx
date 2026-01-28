import React from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-tech mb-4 tracking-tight"
                    >
                        NOSSA JORNADA
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Do primeiro código à liderança tecnológica no Sul do Brasil.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-black"
                >
                    {/* Image Container with native aspect ratio */}
                    <div className="relative">
                        <img
                            src="/timeline_banner.png"
                            alt="StalFlow Roadmap 2024-2026"
                            className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-1000 ease-out"
                        />

                        {/* Perfect Blending Gradients (Vignette) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60 pointer-events-none" />

                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-primary/20 blur-3xl -z-10 opacity-20" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Roadmap;
