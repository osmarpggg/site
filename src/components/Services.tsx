import React from 'react';
import { Layout, Smartphone, Globe, Code, Cpu, Rocket, ShieldCheck, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Sites Profissionais",
        description: "Interfaces imersivas e performáticas que convertem visitantes em clientes."
    },
    {
        icon: <Layout className="w-8 h-8" />,
        title: "WebApps Escaláveis",
        description: "Aplicações web robustas como SaaS e dashboards administrativos."
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Mobile Apps",
        description: "Desenvolvimento nativo e híbrido (iOS/Android) com UX premium."
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: "Sistemas Sob Medida",
        description: "Software desenhado especificamente para as regras do seu negócio."
    },
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "Automação e IA",
        description: "Integrações inteligentes para otimizar fluxos de trabalho."
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "MVPs para Startups",
        description: "Lançamento rápido de produtos viáveis para validação de mercado e crescimento."
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Auditoria e Cibersegurança",
        description: "Testes de intrusão, blindagem de código e conformidade com OWASP."
    },
    {
        icon: <Cloud className="w-8 h-8" />,
        title: "Infraestrutura Cloud",
        description: "Arquiteturas escaláveis e DevOps para garantir alta disponibilidade."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-brand-dark relative">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-tech mb-6 tracking-tight">NOSSOS SERVIÇOS</h2>
                    <div className="w-20 h-1 bg-primary mb-6" />
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Da concepção ao deploy, oferecemos um ciclo completo de desenvolvimento
                        focado na qualidade técnica e na experiência do usuário.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors rounded-xl backdrop-blur-sm"
                        >
                            <div className="mb-6 p-4 bg-background rounded-lg w-fit text-primary group-hover:scale-110 group-hover:text-secondary transition-all duration-300 border border-white/5 shadow-lg shadow-black/50">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-tech">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
