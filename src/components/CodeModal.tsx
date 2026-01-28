import React, { useState } from 'react';
import { X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CodeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CodeModal: React.FC<CodeModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="w-full max-w-2xl bg-[#0d1117] border border-[#30363d] rounded-lg shadow-2xl overflow-hidden font-mono text-sm leading-relaxed"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header / Traffic Lights */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-[#30363d] bg-[#161b22]">
                            <div className="flex items-center gap-2">
                                <div onClick={onClose} className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 cursor-pointer transition-colors" />
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                <span className="ml-3 text-[#7d8590] text-xs">projects.tsx</span>
                            </div>
                            <div className="text-[#7d8590]">
                                <Code2 className="w-4 h-4" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 text-[#c9d1d9]">
                            <div className="mb-4">
                                <span className="text-[#ff7b72]">const</span> <span className="text-[#d2a8ff]">NOSSOS_PROJETOS</span> <span className="text-[#ff7b72]">=</span> <span className="text-[#ff7b72]">[</span>
                            </div>

                            <div className="pl-6 group cursor-pointer">
                                <span className="text-[#ff7b72]">{'{'}</span>
                                <div className="pl-6">
                                    <div>
                                        <span className="text-[#79c0ff]">id:</span> <span className="text-[#79c0ff]">1</span>,
                                    </div>
                                    <div>
                                        <span className="text-[#79c0ff]">name:</span> <span className="text-[#a5d6ff]">"StalFlow Global Services"</span>,
                                    </div>
                                    <div>
                                        <span className="text-[#79c0ff]">type:</span> <span className="text-[#a5d6ff]">"Corporate Platform"</span>,
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[#79c0ff]">link:</span>
                                        <a
                                            href="https://app.stalflowgs.com.br"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#a5d6ff] underline decoration-transparent group-hover:decoration-[#a5d6ff] transition-all"
                                        >
                                            "https://app.stalflowgs.com.br"
                                        </a>,
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-[#79c0ff] whitespace-nowrap">description:</span>
                                        <span className="text-[#a5d6ff] max-w-md">
                                            "É basicamente uma plataforma de gestão financeira e de assinaturas online que facilita acompanhar pagamentos, clientes e planos de serviço — ideal para quem vende assinaturas ou serviços contínuos."
                                        </span>
                                    </div>
                                </div>
                                <span className="text-[#ff7b72]">{'}'}</span>,
                            </div>

                            {/* Placeholder for future projects */}
                            <div className="pl-6 mt-2 opacity-50">
                                <span className="text-[#8b949e]">// Mais projetos em desenvolvimento...</span>
                            </div>

                            <div className="mt-4">
                                <span className="text-[#ff7b72]">]</span>;
                            </div>

                            <div className="mt-6 flex items-center gap-2 text-[#8b949e]">
                                <span className="animate-pulse">_</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CodeModal;
