import React from 'react';
import { Globe, Layout, Smartphone, Code, Cpu, Rocket, ShieldCheck, Cloud } from 'lucide-react';

export const servicesData = [
    {
        id: 1,
        slug: 'sites-profissionais',
        icon: <Globe className="w-12 h-12 text-primary" />,
        title: "Sites Profissionais",
        shortDescription: "Interfaces imersivas e performáticas que convertem visitantes em clientes.",
        heroImage: "https://images.unsplash.com/photo-1467232004587-fc72be097561?q=80&w=2087&auto=format&fit=crop",
        description: "Desenvolvemos sites institucionais e landing pages de alta conversão, focados em design premium e performance técnica. Utilizamos as mais modernas tecnologias web para garantir que sua marca se destaque e carregue instantaneamente em qualquer dispositivo.",
        benefits: [
            "Design Exclusivo e Responsivo",
            "Otimização SEO (Google Friendly)",
            "Alta Velocidade de Carregamento",
            "Integração com Ferramentas de Marketing"
        ],
        process: [
            { title: "Discovery", desc: "Entendimento profundo da marca e público-alvo." },
            { title: "UI/UX Design", desc: "Criação de protótipos visuais de alta fidelidade." },
            { title: "Desenvolvimento", desc: "Codificação limpa e performática." },
            { title: "Lançamento", desc: "Testes finais, deploy e indexação." }
        ],
        technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"]
    },
    {
        id: 2,
        slug: 'webapps-escalaveis',
        icon: <Layout className="w-12 h-12 text-primary" />,
        title: "WebApps Escaláveis",
        shortDescription: "Aplicações web robustas como SaaS e dashboards administrativos.",
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        description: "Transformamos processos complexos em interfaces web intuitivas e poderosas. Seja um SaaS, um painel administrativo ou uma ferramenta interna, nossos WebApps são construídos para escalar com o seu negócio, garantindo segurança e eficiência.",
        benefits: [
            "Arquitetura Escalável",
            "Gestão de Dados em Tempo Real",
            "Painéis Administrativos Intuitivos",
            "Segurança de Dados Avançada"
        ],
        process: [
            { title: "Análise de Requisitos", desc: "Mapeamento completo das funcionalidades." },
            { title: "Arquitetura", desc: "Definição do stack e estrutura de dados." },
            { title: "Desenvolvimento Ágil", desc: "Sprints com entregas contínuas." },
            { title: "Evolução", desc: "Suporte e melhorias constantes." }
        ],
        technologies: ["Next.js", "Node.js", "PostgreSQL", "Supabase"]
    },
    {
        id: 3,
        slug: 'mobile-apps',
        icon: <Smartphone className="w-12 h-12 text-primary" />,
        title: "Mobile Apps",
        shortDescription: "Desenvolvimento nativo e híbrido (iOS/Android) com UX premium.",
        heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
        description: "Levamos sua marca para o bolso do seu cliente. Desenvolvemos aplicativos móveis nativos e híbridos com foco total na experiência do usuário (UX) e performance fluida, garantindo presença nas lojas Apple App Store e Google Play Store.",
        benefits: [
            "UX/UI Mobile First",
            "Performance Nativa",
            "Notificações Push",
            "Funcionalidade Offline"
        ],
        process: [
            { title: "Prototipagem", desc: "Wireframes e design de telas." },
            { title: "Desenvolvimento", desc: "Código otimizado para iOS e Android." },
            { title: "Testes", desc: "Garantia de qualidade em múltiplos devices." },
            { title: "Publicação", desc: "Gestão do processo nas Lojas de Apps." }
        ],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
        id: 4,
        slug: 'sistemas-sob-medida',
        icon: <Code className="w-12 h-12 text-primary" />,
        title: "Sistemas Sob Medida",
        shortDescription: "Software desenhado especificamente para as regras do seu negócio.",
        heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        description: "Não se adapte ao software, faça o software se adaptar a você. Criamos soluções personalizadas que resolvem dores específicas da sua operação, automatizando tarefas e integrando departamentos.",
        benefits: [
            "Aderência Total ao Processo",
            "Integração com Legados",
            "Propriedade do Código",
            "Sem Custos de Licença Recorrentes"
        ],
        process: [
            { title: "Imersão", desc: "Entendemos o dia a dia da sua operação." },
            { title: "Solução", desc: "Desenhamos a arquitetura ideal." },
            { title: "Construção", desc: "Desenvolvimento modular." },
            { title: "Implantação", desc: "Treinamento e virada de chave." }
        ],
        technologies: ["Java", "Python", ".NET", "Microservices"]
    },
    {
        id: 5,
        slug: 'automacao-e-ia',
        icon: <Cpu className="w-12 h-12 text-primary" />,
        title: "Automação e IA",
        shortDescription: "Integrações inteligentes para otimizar fluxos de trabalho.",
        heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        description: "Potencialize sua operação com Inteligência Artificial. Implementamos chatbots, análise de dados preditiva e automação de processos repetitivos para reduzir custos e aumentar a eficiência.",
        benefits: [
            "Redução de Erros Humanos",
            "Atendimento 24/7",
            "Análise Preditiva",
            "Otimização de Custos"
        ],
        process: [
            { title: "Mapeamento", desc: "Identificação de gargalos operacionais." },
            { title: "Modelagem", desc: "Treinamento de modelos ou fluxos." },
            { title: "Integração", desc: "Conexão com sistemas existentes." },
            { title: "Monitoramento", desc: "Melhoria contínua dos algoritmos." }
        ],
        technologies: ["OpenAI API", "Python", "TensorFlow", "RPA"]
    },
    {
        id: 6,
        slug: 'mvps-para-startups',
        icon: <Rocket className="w-12 h-12 text-primary" />,
        title: "MVPs para Startups",
        shortDescription: "Lançamento rápido de produtos viáveis para validação de mercado.",
        heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
        description: "Tire sua ideia do papel em tempo recorde. Focamos no que é essencial para lançar seu Produto Mínimo Viável (MVP), permitindo que você valide sua hipótese de mercado com usuários reais o mais rápido possível.",
        benefits: [
            "Time-to-market Rápido",
            "Foco no Core Business",
            "Baixo Custo Inicial",
            "Escalabilidade Preparada"
        ],
        process: [
            { title: "Lean Inception", desc: "Definição do escopo mínimo." },
            { title: "Sprint Zero", desc: "Setup inicial e arquitetura." },
            { title: "Sprints de Dev", desc: "Desenvolvimento focado." },
            { title: "Launch", desc: "Lançamento para early adopters." }
        ],
        technologies: ["React", "Firebase", "Node.js", "Vercel"]
    },
    {
        id: 7,
        slug: 'auditoria-e-ciberseguranca',
        icon: <ShieldCheck className="w-12 h-12 text-primary" />,
        title: "Auditoria e Cibersegurança",
        shortDescription: "Testes de intrusão, blindagem de código e conformidade.",
        heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        description: "Proteja seu ativo mais valioso: seus dados. Realizamos auditorias completas, testes de intrusão (Pentest) e implementamos as melhores práticas de segurança para garantir a integridade e confidencialidade das suas informações.",
        benefits: [
            "Proteção Contra Ataques",
            "Conformidade LGPD",
            "Segurança de Dados",
            "Confiança do Cliente"
        ],
        process: [
            { title: "Scan", desc: "Varredura de vulnerabilidades." },
            { title: "Análise", desc: "Avaliação de riscos e impacto." },
            { title: "Correção", desc: "Aplicação de patches e melhorias." },
            { title: "Relatório", desc: "Documentação técnica e executiva." }
        ],
        technologies: ["OWASP", "Burp Suite", "SonarQube", "Encryption"]
    },
    {
        id: 8,
        slug: 'infraestrutura-cloud',
        icon: <Cloud className="w-12 h-12 text-primary" />,
        title: "Infraestrutura Cloud",
        shortDescription: "Arquiteturas escaláveis e DevOps para garantir disponibilidade.",
        heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        description: "Migre para a nuvem ou otimize sua infraestrutura atual. Projetamos arquiteturas robustas em AWS, Azure ou Google Cloud, focando em alta disponibilidade, escalabilidade automática e redução de custos operacionais.",
        benefits: [
            "Alta Disponibilidade (99.9%)",
            "Escalabilidade Automática",
            "Redução de Custos",
            "Disaster Recovery"
        ],
        process: [
            { title: "Assessment", desc: "Análise da infraestrutura atual." },
            { title: "Planejamento", desc: "Desenho da arquitetura cloud." },
            { title: "Migração", desc: "Movimentação segura de dados." },
            { title: "Gestão", desc: "Monitoramento e otimização contínua." }
        ],
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform"]
    }
];
