import React from 'react';
import { Shield, Zap, Code2, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
    const features = [
        {
            icon: <Code2 className="w-6 h-6 text-primary" />,
            title: "Código de Elite",
            text: "Não entregamos 'spaghetti code'. Nossos sistemas são modulares, testados e projetados para escalar."
        },
        {
            icon: <Zap className="w-6 h-6 text-yellow-400" />,
            title: "Alta Performance",
            text: "Otimização obsessiva. Aplicações leves, rápidas e que respeitam o tempo do seu usuário."
        },
        {
            icon: <Shield className="w-6 h-6 text-accent" />,
            title: "Segurança 360º",
            text: "Proteção de dados, criptografia e conformidade com as melhores práticas de segurança (OWASP)."
        },
        {
            icon: <Users className="w-6 h-6 text-secondary" />,
            title: "Parceria Estratégica",
            text: "Não somos apenas fornecedores. Entendemos seu modelo de negócio e propomos soluções reais."
        }
    ];

    return (
        <section id="features" className="py-24 bg-brand-gray relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-background/50 border border-white/5 p-6 rounded-xl hover:bg-white/5 transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="p-3 bg-white/5 w-fit rounded-lg mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="order-1 lg:order-2 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-5xl font-bold font-tech mb-6 leading-tight">
                            POR QUE <br />
                            ESCOLHER A <br />
                            <span className="text-primary">StalFlow?</span>
                        </h2>
                        <div className="w-20 h-1 bg-white/20 mb-8" />
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            Em um mercado cheio de promessas vazias, nós entregamos engenharia de verdade.
                            Combinamos a agilidade de uma startup com a robustez de uma grande corporação.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Stack tecnológica moderna (React, Next.js, Node)",
                                "Deploy automatizado (CI/CD)",
                                "Design System exclusivo para sua marca",
                                "Suporte contínuo e evolução"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
