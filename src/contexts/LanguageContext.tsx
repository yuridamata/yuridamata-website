import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'pt' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation strings
const translations = {
  pt: {
    // Header
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.resume': 'Currículo',
    
    // Home page
    'hero.subtitle': 'Desenvolvedor de Software & Entusiasta de Tecnologia',
    'hero.description': 'Apaixonado por criar soluções inovadoras com tecnologias web modernas. Especializado em React, TypeScript e desenvolvimento full-stack.',
    'hero.readBlog': 'Ler Blog',
    'hero.viewProjects': 'Ver Projetos',
    
    // About section
    'about.title': 'Sobre Mim',
    'about.description1': 'Sou um desenvolvedor de software apaixonado com experiência em tecnologias web modernas. Adoro construir aplicações escaláveis e compartilhar conhecimento através do meu blog.',
    'about.description2': 'Quando não estou codificando, você pode me encontrar explorando novas tecnologias, contribuindo para projetos open source, ou escrevendo sobre as últimas tendências em desenvolvimento de software.',
    'about.viewResume': 'Ver Currículo',
    
    // Skills
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Ferramentas & Outros',
    
    // Projects section
    'projects.title': 'Projetos em Destaque',
    'projects.description': 'Aqui estão alguns dos projetos em que tenho trabalhado recentemente.',
    'projects.personalWebsite': 'Site Pessoal',
    'projects.personalWebsiteDesc': 'Site de portfólio moderno construído com Vite, React e Tailwind CSS.',
    'projects.projectName': 'Nome do Projeto',
    'projects.projectDesc': 'Descrição do seu projeto virá aqui.',
    'projects.comingSoon': 'Em Breve',
    'projects.inDevelopment': 'Em Desenvolvimento',
    'projects.projectScreenshot': 'Screenshot do Projeto',
    
    // Resume page
    'resume.title': 'Currículo',
    'resume.name': 'Andrew Yuri da Silva Mata',
    'resume.address': 'Brasília, Brasil - Distrito Federal',
    'resume.phone': '55 6198129-9885',
    'resume.email': 'yuridamata@gmail.com',
    'resume.summary': 'Resumo Profissional',
    'resume.summaryText': 'Profissional de TI com mais de 8 anos de experiência projetando, desenvolvendo e implantando aplicações web escaláveis, gerenciando infraestrutura de nível empresarial e entregando soluções inovadoras que geram impacto mensurável nos negócios. Traz expertise comprovada adquirida no Banco do Brasil — um dos maiores bancos da América Latina e líder em serviços financeiros. Reconhecido pela proficiência em desenvolvimento full-stack, administração de servidores Linux, práticas DevOps e gerenciamento de banco de dados, com um histórico sólido liderando projetos estratégicos em soluções de analytics e IA para organizações de grande escala. Apto a construir equipes de alta performance e promover colaboração interfuncional em ambientes de ritmo acelerado.',
    'resume.experience': 'Experiência Profissional',
    'resume.education': 'Educação & Certificações',
    'resume.skills': 'Habilidades Técnicas',
    'resume.languages': 'Idiomas',
    'resume.downloadPdf': 'Download PDF',
    'resume.present': 'Presente',
    
    // Education
    'resume.edu1.title': 'Bacharelado em Ciência da Computação',
    'resume.edu1.institution': 'Universidade de Brasília (UnB)',
    'resume.edu1.year': '2018',
    'resume.edu2.title': 'Pós-graduação em Engenharia de Software',
    'resume.edu2.institution': 'Universidade Católica de Brasília (UCB)',
    'resume.edu2.year': '2020',
    'resume.edu3.title': 'Pós-graduação em Arquitetura de Software',
    'resume.edu3.institution': 'Anhanguera',
    'resume.edu3.year': '2022',
    'resume.edu4.title': 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    'resume.edu4.institution': 'Microsoft',
    'resume.edu4.year': '2025',
    
    // Experience entries
    'resume.exp1.title': 'Engenheiro de Software / Tech Lead – Iniciativa de Unificação de Sistemas Administrativos',
    'resume.exp1.company': 'Banco do Brasil',
    'resume.exp1.location': 'Brasília, Brasil',
    'resume.exp1.period': '2016 – 2023',
    'resume.exp1.desc1': 'Contribuiu para um projeto de unificação nacional, consolidando equipes de tecnologia de todos os 26 estados e do Distrito Federal em uma unidade centralizada em Brasília, eliminando estruturas duplicadas e otimizando custos operacionais.',
    'resume.exp1.desc2': 'Desenvolveu uma plataforma CRM personalizada do zero, integrando todos os sites de filiais estaduais em uma única solução nacional, resultando em economia significativa de custos de manutenção e experiência de usuário consistente.',
    'resume.exp1.desc3': 'Administrou servidores Linux centralizados suportando mais de 80.000 funcionários, reduzindo hardware, licenciamento e despesas operacionais ao descomissionar infraestruturas estaduais redundantes.',
    'resume.exp1.desc4': 'Adaptou e implantou um sistema OS Ticket auto-hospedado, centralizando demandas de suporte interno em todo o país, reduzindo tempos de resolução e melhorando a qualidade do serviço.',
    'resume.exp1.promoted': 'Promovido a Tech Lead, onde:',
    'resume.exp1.desc5': 'Implementou pipelines CI/CD para otimizar deployments.',
    'resume.exp1.desc6': 'Estabeleceu fluxos de revisão de código para melhorar qualidade e manutenibilidade do código.',
    'resume.exp1.desc7': 'Introduziu melhores práticas de DevOps que aumentaram a frequência de deployment e reduziram incidentes de rollback.',
    'resume.exp1.desc8': 'Liderou e orientou uma equipe de 4 desenvolvedores de software, supervisionando decisões de arquitetura, planejamento de sprints e avaliações de performance.',
    
    'resume.exp2.title': 'Engenheiro de Software – Equipe de Plataforma de IA & Analytics',
    'resume.exp2.company': 'Banco do Brasil',
    'resume.exp2.location': 'Brasília, Brasil',
    'resume.exp2.period': '2023 – Presente',
    'resume.exp2.desc1': 'Trabalhou no desenvolvimento de uma Plataforma de IA & Analytics centralizada para dar à força de trabalho do Banco do Brasil acesso simplificado a ferramentas avançadas de analytics e IA.',
    'resume.exp2.desc2': 'Trabalhou na equipe que lançou um portal unificado consolidando todas as ofertas de IA/Analytics em uma interface intuitiva, melhorando as taxas de adoção e reduzindo o tempo de onboarding dos usuários.',
    'resume.exp2.desc3': 'Construiu uma aplicação web gamificada para encorajar o desenvolvimento de habilidades em IA e analytics, aumentando o engajamento com recursos de aprendizagem.',
    'resume.exp2.desc4': 'Colaborou com cientistas de dados, designers UX e stakeholders de negócio para alinhar as funcionalidades da plataforma com objetivos estratégicos.',
    
    'resume.exp3.title': 'Desenvolvedor Full-Stack',
    'resume.exp3.company': 'Freelance',
    'resume.exp3.location': 'Remoto',
    'resume.exp3.period': 'Freelance',
    'resume.exp3.desc1': 'Entregou desenvolvimento end-to-end para plataformas de e-commerce, sites institucionais e ferramentas de automação de workflow.',
    'resume.exp3.desc2': 'Projetou e implementou chatbots integrando com modelos OpenAI GPT para automação de atendimento ao cliente.',
    'resume.exp3.desc3': 'Forneceu serviços de consultoria em infraestrutura, deployment e otimização de performance.',
    
    // Skills
    'resume.skills.core': 'Competências Principais',
    'resume.skills.additional': 'Habilidades Adicionais',
    'resume.skills.languages.title': 'Linguagens',
    'resume.skills.frontend.title': 'Frameworks Front-End',
    'resume.skills.backend.title': 'Frameworks Back-End',
    'resume.skills.databases.title': 'Bancos de Dados',
    'resume.skills.infrastructure.title': 'Infraestrutura & Ferramentas',
    'resume.skills.tools.title': 'Ferramentas & Plataformas',
    
    'resume.languages.portuguese': 'Português: Nativo',
    'resume.languages.english': 'Inglês: Avançado',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.resume': 'Resume',
    
    // Home page
    'hero.subtitle': 'Software Developer & Technology Enthusiast',
    'hero.description': 'Passionate about creating innovative solutions with modern web technologies. Specialized in React, TypeScript, and full-stack development.',
    'hero.readBlog': 'Read Blog',
    'hero.viewProjects': 'View Projects',
    
    // About section
    'about.title': 'About Me',
    'about.description1': 'I\'m a passionate software developer with expertise in modern web technologies. I love building scalable applications and sharing knowledge through my blog.',
    'about.description2': 'When I\'m not coding, you can find me exploring new technologies, contributing to open source projects, or writing about the latest trends in software development.',
    'about.viewResume': 'View Resume',
    
    // Skills
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools & Others',
    
    // Projects section
    'projects.title': 'Featured Projects',
    'projects.description': 'Here are some of the projects I\'ve been working on recently.',
    'projects.personalWebsite': 'Personal Website',
    'projects.personalWebsiteDesc': 'Modern portfolio website built with Vite, React, and Tailwind CSS.',
    'projects.projectName': 'Project Name',
    'projects.projectDesc': 'Description of your project will go here.',
    'projects.comingSoon': 'Coming Soon',
    'projects.inDevelopment': 'In Development',
    'projects.projectScreenshot': 'Project Screenshot',
    
    // Resume page
    'resume.title': 'Resume',
    'resume.name': 'Andrew Yuri da Silva Mata',
    'resume.address': 'Brasília, Brazil - Distrito Federal',
    'resume.phone': '55 6198129-9885',
    'resume.email': 'yuridamata@gmail.com',
    'resume.summary': 'Professional Summary',
    'resume.summaryText': 'Results-driven IT professional with over 8 years of experience designing, developing, and deploying scalable web applications, managing enterprise-level infrastructure, and delivering innovative solutions that drive measurable business impact. Brings proven expertise gained at Banco do Brasil, one of the largest banks in Latin America and a leader in financial services. Recognized for proficiency in full-stack development, Linux server administration, DevOps practices, and database management, with a strong track record leading strategic projects in analytics and AI solutions for large-scale organizations. Adept at building high-performance teams and fostering cross-functional collaboration in fast-paced environments.',
    'resume.experience': 'Professional Experience',
    'resume.education': 'Education & Certifications',
    'resume.skills': 'Technical Skills',
    'resume.languages': 'Languages',
    'resume.downloadPdf': 'Download PDF',
    'resume.present': 'Present',
    
    // Education
    'resume.edu1.title': 'Bachelor\'s in Computer Science',
    'resume.edu1.institution': 'University of Brasília (UnB)',
    'resume.edu1.year': '2018',
    'resume.edu2.title': 'Postgraduate in Software Engineering',
    'resume.edu2.institution': 'Catholic University of Brasília (UCB)',
    'resume.edu2.year': '2020',
    'resume.edu3.title': 'Postgraduate in Software Architecture',
    'resume.edu3.institution': 'Anhanguera',
    'resume.edu3.year': '2022',
    'resume.edu4.title': 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    'resume.edu4.institution': 'Microsoft',
    'resume.edu4.year': '2025',
    
    // Experience entries
    'resume.exp1.title': 'Software Engineer / Tech Lead – Administrative Systems Unification Initiative',
    'resume.exp1.company': 'Banco do Brasil',
    'resume.exp1.location': 'Brasília, Brazil',
    'resume.exp1.period': '2016 – 2023',
    'resume.exp1.desc1': 'Contributed to a nationwide unification project, consolidating tech teams from all 26 states and the Federal District into a centralized unit in Brasília, eliminating duplicated structures and optimizing operational costs.',
    'resume.exp1.desc2': 'Developed a custom CRM platform from scratch, integrating all state-level branch websites into a single nationwide solution, resulting in significant maintenance cost savings and consistent user experience.',
    'resume.exp1.desc3': 'Administered centralized Linux servers supporting over 80,000 employees, reducing hardware, licensing, and operational expenses by decommissioning redundant state-level infrastructures.',
    'resume.exp1.desc4': 'Adapted and deployed a self-hosted OS Ticket system, centralizing internal support demands across the entire country, reducing resolution times and improving service quality.',
    'resume.exp1.promoted': 'Promoted to Tech Lead, where I:',
    'resume.exp1.desc5': 'Implemented CI/CD pipelines to streamline deployments.',
    'resume.exp1.desc6': 'Established code review workflows to improve code quality and maintainability.',
    'resume.exp1.desc7': 'Introduced DevOps best practices that increased deployment frequency and reduced rollback incidents.',
    'resume.exp1.desc8': 'Led and mentored a team of 4 software developers, overseeing architecture decisions, sprint planning, and performance evaluations.',
    
    'resume.exp2.title': 'Software Engineer – AI & Analytics Platform Team',
    'resume.exp2.company': 'Banco do Brasil',
    'resume.exp2.location': 'Brasília, Brazil',
    'resume.exp2.period': '2023 – Present',
    'resume.exp2.desc1': 'Worked on the development of a centralized AI & Analytics Platform to give Banco do Brasil\'s workforce streamlined access to advanced analytics and AI tools.',
    'resume.exp2.desc2': 'Worked on the team that launched a unified portal consolidating all AI/Analytics offerings into one intuitive interface, improving adoption rates and reducing user onboarding time.',
    'resume.exp2.desc3': 'Built a gamified web application to encourage skill development in AI and analytics, increasing engagement with learning resources.',
    'resume.exp2.desc4': 'Collaborated with data scientists, UX designers, and business stakeholders to align platform features with strategic objectives.',
    
    'resume.exp3.title': 'Full-Stack Engineer',
    'resume.exp3.company': 'Freelance Developer',
    'resume.exp3.location': 'Remote',
    'resume.exp3.period': 'Freelance',
    'resume.exp3.desc1': 'Delivered end-to-end development for e-commerce platforms, institutional websites, and workflow automation tools.',
    'resume.exp3.desc2': 'Designed and implemented chatbots integrating with OpenAI GPT models for customer service automation.',
    'resume.exp3.desc3': 'Provided consulting services on infrastructure, deployment, and performance optimization.',
    
    // Skills
    'resume.skills.core': 'Core Competencies',
    'resume.skills.additional': 'Additional Skills',
    'resume.skills.languages.title': 'Languages',
    'resume.skills.frontend.title': 'Front-End Frameworks',
    'resume.skills.backend.title': 'Back-End Frameworks',
    'resume.skills.databases.title': 'Databases',
    'resume.skills.infrastructure.title': 'Infrastructure & Tools',
    'resume.skills.tools.title': 'Tools & Platforms',
    
    'resume.languages.portuguese': 'Portuguese: Native',
    'resume.languages.english': 'English: Advanced',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  }
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('pt')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
