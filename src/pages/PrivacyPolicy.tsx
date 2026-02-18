import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye } from 'lucide-react';

import Seo from '../components/Seo';

const PrivacyPolicy = () => {
    return (
        <div className="pt-24 pb-12 container mx-auto px-6 max-w-4xl">
            <Seo
                title="Política de Privacidade"
                description="Leia nossa Política de Privacidade e saiba como a StalFlow protege seus dados pessoais e respeita sua privacidade."
                canonical="https://stalflow.com.br/politica-de-privacidade"
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold font-tech">Política de Privacidade</h1>
                </div>
                <p className="text-gray-400 mb-8">Última atualização: 18 de Fevereiro de 2026</p>

                <div className="space-y-8 text-gray-300 leading-relaxed bg-white/5 p-8 rounded-2xl border border-white/10">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Lock className="w-5 h-5 text-secondary" /> 1. Introdução
                        </h2>
                        <p>
                            A <strong>StalFlow Global Services</strong> respeita a sua privacidade e está comprometida em proteger os seus dados pessoais.
                            Esta política de privacidade informará como cuidamos dos seus dados pessoais quando você visita nosso site (independentemente de onde você o visite)
                            e lhe falará sobre seus direitos de privacidade e como a lei o protege.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Eye className="w-5 h-5 text-secondary" /> 2. Dados que Coletamos
                        </h2>
                        <p className="mb-4">
                            Podemos coletar, usar, armazenar e transferir diferentes tipos de dados pessoais sobre você, que agrupamos da seguinte forma:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Dados de Identidade:</strong> inclui nome, sobrenome, nome de usuário ou identificador similar.</li>
                            <li><strong>Dados de Contato:</strong> inclui endereço de e-mail e números de telefone fornecidos em formulários de contato.</li>
                            <li><strong>Dados Técnicos:</strong> inclui endereço de protocolo de internet (IP), seus dados de login, tipo e versão do navegador, configuração de fuso horário e localização.</li>
                            <li><strong>Dados de Uso:</strong> inclui informações sobre como você usa nosso site, produtos e serviços.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Como Usamos Seus Dados</h2>
                        <p>
                            Só usaremos seus dados pessoais quando a lei nos permitir. Na maioria das vezes, usaremos seus dados pessoais nas seguintes circunstâncias:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Para responder às suas solicitações de contato ou orçamento.</li>
                            <li>Para melhorar nosso site, produtos/serviços, marketing e relacionamentos com clientes.</li>
                            <li>Para gerenciar nosso relacionamento com você.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Segurança de Dados</h2>
                        <p>
                            Estabelecemos medidas de segurança apropriadas para impedir que seus dados pessoais sejam acidentalmente perdidos, usados ou acessados de forma não autorizada, alterados ou divulgados.
                            Além disso, limitamos o acesso aos seus dados pessoais aos funcionários, agentes, contratados e outros terceiros que tenham uma necessidade comercial de saber.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Seus Direitos Legais</h2>
                        <p>
                            Sob certas circunstâncias, você tem direitos sob as leis de proteção de dados em relação aos seus dados pessoais, incluindo o direito de solicitar acesso, correção,
                            apagar, restringir o processamento, objetar ao processamento e solicitar a portabilidade de dados.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Contato</h2>
                        <p>
                            Se você tiver alguma dúvida sobre esta política de privacidade ou sobre nossas práticas de privacidade, entre em contato conosco através do formulário em nosso site.
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicy;
