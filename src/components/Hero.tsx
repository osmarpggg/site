import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import CodeModal from './CodeModal';

import Button from './Button';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <CodeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-2 mb-6"
                    >
                        <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider">
                            StalFlow 2026 Ready
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold font-tech tracking-tighter leading-tight mb-8"
                    >
                        TRANSFORMAMOS <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                            CÓDIGO EM LEGADO
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
                    >
                        Somos uma Softhouse brasileira focada em inovação radical.
                        Desenvolvemos apps, sites e sistemas complexos com a tecnologia
                        que definirá a próxima década.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button
                            href="https://wa.me/5542988186315"
                            external
                            variant="primary"
                            size="lg"
                            icon={<ArrowRight className="w-4 h-4" />}
                        >
                            Iniciar Projeto
                        </Button>
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            variant="outline"
                            size="lg"
                            icon={<Terminal className="w-4 h-4" />}
                        >
                            Ver Portfolio em Código
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs"
            >
                <span>SCROLL</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
