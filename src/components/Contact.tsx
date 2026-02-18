import React from 'react';
import { MessageSquare } from 'lucide-react';
import Button from './Button';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-brand-dark">
            {/* Skewed Background */}
            <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-left scale-110 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold font-tech mb-8 tracking-tighter">
                        VAMOS CONSTRUIR <br />
                        <span className="text-primary">ALGO GRANDE?</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Seu projeto merece a atenção de quem entende de código,
                        produto e negócios. Entre em contato e agende uma consultoria inicial sem compromisso.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Button
                            href="https://wa.me/5542988186315"
                            external
                            variant="primary" // Changed to primary for better visibility in this context
                            size="lg"
                            icon={<MessageSquare className="w-5 h-5" />}
                        >
                            WhatsApp Comercial
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
