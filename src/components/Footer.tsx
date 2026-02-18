import React from 'react';
import { Code2, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-white/10 rounded">
                            <Code2 className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-xl tracking-tighter font-tech">StalFlow</span>
                    </div>

                    <div className="flex gap-6">
                        <a
                            href="https://www.instagram.com/stalflow1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors hover:scale-110"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-center md:text-left">
                    <div className="text-gray-600 text-sm">
                        &copy; 2026 StalFlow BRASIL. Todos os direitos reservados.
                    </div>
                    <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-600">
                        <Link to="/politica-de-privacidade" className="hover:text-gray-400 transition-colors">Política de Privacidade</Link>
                        <Link to="/termos-de-uso" className="hover:text-gray-400 transition-colors">Termos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
