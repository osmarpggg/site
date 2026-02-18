import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';

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
                    {servicesData.map((service, index) => (
                        <Link key={index} to={`/servicos/${service.slug}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group h-full p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl backdrop-blur-sm cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
                            >
                                <div className="mb-6 p-4 bg-background rounded-lg w-fit text-primary group-hover:scale-110 group-hover:text-secondary transition-all duration-300 border border-white/5 shadow-lg shadow-black/50">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-tech group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                    {service.shortDescription}
                                </p>
                                <div className="mt-6 flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                                    Saiba mais →
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
