import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

interface NavbarProps {
    onOpenCyberForm: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCyberForm }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => { setScrolled(window.scrollY > 20); };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Serviços', href: '#services' },
        { name: 'Visão', href: '#vision' },
        { name: 'Diferenciais', href: '#features' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${scrolled
                ? 'bg-black/40 backdrop-blur-xl border-white/5 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 group cursor-pointer relative">
                    <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="p-2 bg-black/50 border border-white/10 rounded-lg group-hover:border-primary/50 transition-colors relative z-10">
                        <Code2 className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-tech font-bold text-xl tracking-tighter relative z-10 group-hover:text-primary transition-colors">
                        StalFlow
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-gray-400 hover:text-white text-sm font-medium transition-colors py-2 group"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                        </a>
                    ))}
                    <Button
                        onClick={onOpenCyberForm}
                        size="sm"
                        variant="primary"
                        icon={<Play className="w-3 h-3 fill-current" />}
                    >
                        Solicitar projeto
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-primary text-lg font-medium py-2 border-b border-white/5 hover:border-primary/30 transition-all pl-2 hover:pl-4"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="mt-4">
                                <Button
                                    onClick={() => { onOpenCyberForm(); setIsOpen(false); }}
                                    className="w-full justify-center"
                                >
                                    Solicitar projeto
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
