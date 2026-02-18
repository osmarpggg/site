import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const Vision = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Narrative Column */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold font-tech mb-8 tracking-tight leading-tight">
                                O FUTURO É <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AGORA</span>
                                <br /> E É SEU.
                            </h2>
                            <div className="space-y-6 text-lg text-gray-400 leading-relaxed text-justify">
                                <p>
                                    A <strong>Visão 2026</strong> da StalFlow não é sobre prever o futuro, é sobre <strong className="text-white">construí-lo</strong>.
                                    Em um mundo onde a tecnologia avança exponencialmente, esperar pela "próxima grande novidade" é aceitar a obsolescência.
                                </p>
                                <p>
                                    Nossa estratégia é fundamentada na <strong>Inovação Preditiva</strong>. Não apenas adotamos IA, Cloud Computing e Blockchain; nós as integramos
                                    para criar ecossistemas digitais que se auto-otimizam. Para nossos clientes, isso significa sair do ciclo de "atualização" e entrar na era da <strong className="text-white">evolução contínua</strong>.
                                </p>
                                <p>
                                    Escolher a StalFlow é garantir que sua empresa não apenas sobreviva às mudanças tecnológicas dos próximos anos, mas as lidere.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Pillars Column */}
                    <div className="grid grid-cols-1 gap-6">
                        {[
                            {
                                icon: <TrendingUp className="w-6 h-6 text-primary" />,
                                title: "Crescimento Exponencial",
                                desc: "Arquiteturas projetadas para escalar do zero ao infinito sem gargalos técnicos."
                            },
                            {
                                icon: <ShieldCheck className="w-6 h-6 text-secondary" />,
                                title: "Segurança de Nível Militar",
                                desc: "Proteção proativa de dados que antecipa ameaças antes que elas aconteçam."
                            },
                            {
                                icon: <Zap className="w-6 h-6 text-yellow-500" />,
                                title: "Velocidade de Mercado",
                                desc: "Ciclos de desenvolvimento ágeis que colocam seu produto na mão do usuário em tempo recorde."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 hover:bg-white/10 transition-all group"
                            >
                                <div className="p-3 bg-black rounded-lg border border-white/10 group-hover:border-primary/50 transition-colors shadow-lg shadow-primary/5">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-tech mb-2 text-white group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
