import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertTriangle } from 'lucide-react';

import Seo from '../components/Seo';

const TermsOfUse = () => {
    return (
        <div className="pt-24 pb-12 container mx-auto px-6 max-w-4xl">
            <Seo
                title="Termos de Uso"
                description="Conheça os Termos de Uso da StalFlow. Regras e diretrizes para o uso de nossos serviços e website."
                canonical="https://stalflow.com.br/termos-de-uso"
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold font-tech">Termos de Uso</h1>
                </div>
                <p className="text-gray-400 mb-8">Última atualização: 18 de Fevereiro de 2026</p>

                <div className="space-y-8 text-gray-300 leading-relaxed bg-white/5 p-8 rounded-2xl border border-white/10">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-secondary" /> 1. Aceitação dos Termos
                        </h2>
                        <p>
                            Ao acessar e usar o site da <strong>StalFlow Global Services</strong>, você aceita e concorda em estar vinculado aos termos e provisões deste acordo.
                            Além disso, ao usar os serviços particulares deste site, você deve estar sujeito a todas as diretrizes ou regras publicadas aplicáveis a esses serviços.
                            Qualquer participação neste serviço constituirá a aceitação deste acordo. Se você não concordar em cumprir o acima, por favor, não o use.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Propriedade Intelectual</h2>
                        <p>
                            Este site e seu conteúdo original, recursos e funcionalidade são de propriedade da StalFlow Global Services e são protegidos por direitos autorais internacionais, marcas registradas, patentes, segredos comerciais e outras leis de propriedade intelectual ou direitos de propriedade.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-yellow-500" /> 3. Isenção de Responsabilidade
                        </h2>
                        <p>
                            Este site e seus componentes são oferecidos apenas para fins informativos; este site não será responsável pela precisão, utilidade ou disponibilidade de qualquer informação transmitida ou disponibilizada via site, e não será responsável por qualquer erro ou omissão nessas informações.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Limitação de Responsabilidade</h2>
                        <p>
                            Em nenhum caso a StalFlow Global Services, nem seus diretores, funcionários, parceiros, agentes, fornecedores ou afiliados, serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes de (i) seu acesso ou uso ou incapacidade de acessar ou usar o Serviço; (ii) qualquer conduta ou conteúdo de terceiros no Serviço; (iii) qualquer conteúdo obtido do Serviço; e (iv) acesso não autorizado, uso ou alteração de suas transmissões ou conteúdo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Lei Aplicável</h2>
                        <p>
                            Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem levar em conta suas disposições sobre conflitos de leis.
                            Nossa falha em fazer cumprir qualquer direito ou disposição destes Termos não será considerada uma renúncia a esses direitos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Alterações</h2>
                        <p>
                            Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for material, tentaremos fornecer um aviso com pelo menos 30 dias de antecedência antes de quaisquer novos termos entrarem em vigor. O que constitui uma alteração material será determinado a nosso exclusivo critério.
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
};

export default TermsOfUse;
