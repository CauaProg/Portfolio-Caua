document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // Tradução PT/EN
    // ==========================================================================
    const translations = {
        pt: {
            pageTitle: "Cauã Moraes de Abreu | Portfólio Acadêmico",
            metaDescription: "Portfólio acadêmico de Cauã Moraes de Abreu, estudante do 4º período de Sistemas de Informação.",
            navAbout: "Sobre",
            navProjects: "Projetos",
            navSkills: "Habilidades",
            navExperience: "Experiência",
            navEducation: "Formação",
            heroGreeting: "Olá, meu nome é",
            heroLead: "Estudante de Sistemas de Informação e desenvolvedor de jogos (Unity e C#), com experiência em suporte de TI e monitoria de programação. Brasil · Aberto a oportunidades remotas.",
            aboutTitle: "Sobre Mim",
            aboutP1: "Graduando em <strong>Sistemas de Informação</strong> (previsão de conclusão em 2028) com experiência prática em desenvolvimento de jogos com Unity, suporte de TI e monitoria de programação. Criador de um jogo point-and-click para avaliação de memória em idosos com Alzheimer, unindo engenharia de software e impacto na área da saúde. Domínio de C#, Java, Python, SQL e Git, com experiência em metodologias ágeis (Scrum e Kanban).",
            aboutP2: "Atualmente atuo como Jovem Aprendiz na área de TI da Motiva e estou aberto a oportunidades remotas em Tecnologia, onde possa contribuir para soluções eficientes, colaborar com equipes dinâmicas e continuar aprimorando minhas competências técnicas.",
            projectsTitle: "Projetos em Destaque",
            project1Tag: "ONG GAIARB",
            project1Title: "GAIARB - Gestão de Doadores",
            project1Desc: "Sistema web desenvolvido para auxiliar a ONG GAIARB no gerenciamento de doadores e doações para apoiar mães atípicas. Permite cadastro de doadores, consulta ágil de histórico e integração da API Mercado Pago para captação de recursos.",
            projectMemoryTag: "Unity / C#",
            projectMemoryTitle: "Jogo de Avaliação de Memória",
            projectMemoryDesc: "Jogo point-and-click desenvolvido em Unity e C# no qual o usuário organiza uma mala. O projeto foi criado para auxiliar na medição da capacidade de memória de idosos com Alzheimer.",
            project2Tag: "Banco de Dados",
            project2Title: "Loja Virtual - Controle de Estoque",
            project2Desc: "Sistema desenvolvido para consolidar conhecimentos de banco de dados e backend em Python. Permite o controle completo de estoque de produtos (Adicionar, Listar, Atualizar e Deletar) integrado via terminal a um banco de dados MySQL.",
            sourceCode: "Código Fonte",
            viewSite: "Visualizar Site",
            skillsTitle: "Habilidades Técnicas",
            skillCatLanguages: "Linguagens",
            skillCatWebDb: "Web & Banco de Dados",
            skillCatTools: "Ferramentas & Idiomas",
            apiIntegrations: "Integrações de API",
            englishSkill: "Inglês",
            levelIntermediate: "Intermediário",
            levelAdvanced: "Avançado",
            levelBeginner: "Iniciante",
            experienceTitle: "Experiência Profissional / Acadêmica",
            exp0Title: "Jovem Aprendiz - Assistente Administrativo de TI",
            exp0Period: "Agosto de 2026 - Atualmente",
            exp0Desc: "Suporte técnico de primeiro nível a usuários finais em ambiente de alta demanda, solucionando problemas de hardware e software, e apoio às rotinas diárias do departamento de TI com atividades administrativas e operacionais.",
            resumeBtn: "Currículo",
            exp1Title: "Desenvolvedor de Jogos",
            exp1Period: "Maio de 2025 - Maio de 2026",
            exp1Desc: "Desenvolvimento de jogos em Unity e C# no UnityLab, projeto da empresa júnior Ânimo da Unilasalle, implementando mecânicas e lógica de jogabilidade, corrigindo bugs e otimizando a performance para melhorar a estabilidade do jogo e a experiência do jogador.",
            exp2Title: "Monitor de Programação I",
            exp2Period: "Março de 2026 - Julho de 2026",
            exp2Desc: "Mentoria de alunos em lógica de programação, algoritmos e depuração durante aulas práticas, orientando atividades de resolução de problemas para aplicar conceitos fundamentais em exercícios reais.",
            educationTitle: "Formação Acadêmica",
            edu1Title: "Bacharelado em Sistemas de Informação",
            statusInProgress: "Em andamento",
            edu2Title: "Técnico em Eletromecânica",
            statusCompleted: "Concluído",
            footerMain: "&copy; 2026 Cauã Moraes de Abreu. Desenvolvido com HTML5 e CSS3.",
            footerCredits: "Portfólio de Estudante Acadêmico - Simples e Direto."
        },
        en: {
            pageTitle: "Cauã Moraes de Abreu | Academic Portfolio",
            metaDescription: "Academic portfolio of Cauã Moraes de Abreu, a 4th-semester Information Systems undergraduate student.",
            navAbout: "About",
            navProjects: "Projects",
            navSkills: "Skills",
            navExperience: "Experience",
            navEducation: "Education",
            heroGreeting: "Hi, my name is",
            heroLead: "Information Systems student and game developer (Unity & C#) with experience in IT support and programming instruction. Brazil · Open to remote opportunities.",
            aboutTitle: "About Me",
            aboutP1: "I am an <strong>Information Systems undergraduate</strong> (expected graduation in 2028) with hands-on experience in Unity game development, IT support, and programming instruction. Creator of a point-and-click game for memory assessment in older adults with Alzheimer's disease, combining software engineering with healthcare-oriented impact. Proficient in C#, Java, Python, SQL, and Git, with experience in Agile practices (Scrum and Kanban).",
            aboutP2: "I currently work as a Youth Apprentice in Motiva's IT department and am open to remote opportunities in Technology, where I can contribute to efficient solutions, collaborate with dynamic teams, and keep improving my technical skills.",
            projectsTitle: "Featured Projects",
            project1Tag: "GAIARB NGO",
            project1Title: "GAIARB - Donor Management",
            project1Desc: "Web system developed to help the GAIARB NGO manage donors and donations supporting mothers of children with disabilities. It allows donor registration, quick donation history lookup, and Mercado Pago API integration for fundraising.",
            projectMemoryTag: "Unity / C#",
            projectMemoryTitle: "Memory Assessment Game",
            projectMemoryDesc: "Point-and-click game developed in Unity and C# where the user organizes a suitcase. The project was created to help measure memory capacity in older adults with Alzheimer's disease.",
            project2Tag: "Database",
            project2Title: "Virtual Store - Inventory Management",
            project2Desc: "System developed to strengthen database and Python backend skills. It supports complete product inventory CRUD operations through a terminal interface connected to a MySQL database.",
            sourceCode: "Source Code",
            viewSite: "View Website",
            skillsTitle: "Technical Skills",
            skillCatLanguages: "Languages",
            skillCatWebDb: "Web & Databases",
            skillCatTools: "Tools & Languages",
            apiIntegrations: "API Integrations",
            englishSkill: "English",
            levelIntermediate: "Intermediate",
            levelAdvanced: "Advanced",
            levelBeginner: "Beginner",
            experienceTitle: "Professional / Academic Experience",
            exp0Title: "Youth Apprentice - IT Administrative Assistant",
            exp0Period: "August 2026 - Present",
            exp0Desc: "Provided first-level technical support to end users in a high-demand environment, troubleshooting hardware and software issues, and supported the IT department's daily operations through administrative and operational tasks.",
            resumeBtn: "Resume",
            exp1Title: "Game Developer",
            exp1Period: "May 2025 - May 2026",
            exp1Desc: "Developed games in Unity and C# at UnityLab, a project from Ânimo, Unilasalle's junior company, implementing gameplay mechanics and logic, fixing bugs, and optimizing performance to improve game stability and player experience.",
            exp2Title: "Programming I Teaching Assistant",
            exp2Period: "March 2026 - July 2026",
            exp2Desc: "Mentored students in programming logic, algorithms, and debugging during practical classes, guiding problem-solving activities so they could apply core concepts to real exercises.",
            educationTitle: "Education",
            edu1Title: "Bachelor's Degree in Information Systems",
            statusInProgress: "In Progress",
            edu2Title: "Technical Degree in Electromechanics",
            statusCompleted: "Completed",
            footerMain: "&copy; 2026 Cauã Moraes de Abreu. Built with HTML5 and CSS3.",
            footerCredits: "Academic Student Portfolio - Simple and Direct."
        }
    };

    const typewriterWords = {
        pt: [
            "Desenvolvedor de Software",
            "Desenvolvedor de Jogos (Unity & C#)",
            "Graduando em Sistemas de Informação"
        ],
        en: [
            "Software Developer",
            "Game Developer (Unity & C#)",
            "Information Systems Undergraduate"
        ]
    };

    let currentLanguage = localStorage.getItem("portfolioLanguage") || "pt";
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typewriterTimeout;

    const languageToggle = document.getElementById("languageToggle");
    const typewriterElement = document.getElementById("typewriter");

    function applyLanguage(language) {
        currentLanguage = language;
        localStorage.setItem("portfolioLanguage", language);

        document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
        document.title = translations[language].pageTitle;

        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });

        document.querySelectorAll("[data-i18n-html]").forEach(element => {
            const key = element.getAttribute("data-i18n-html");
            if (translations[language][key]) {
                element.innerHTML = translations[language][key];
            }
        });

        document.querySelectorAll("[data-i18n-content]").forEach(element => {
            const key = element.getAttribute("data-i18n-content");
            if (translations[language][key]) {
                element.setAttribute("content", translations[language][key]);
            }
        });

        if (languageToggle) {
            languageToggle.textContent = language === "pt" ? "EN" : "PT";
            languageToggle.setAttribute("aria-label", language === "pt" ? "Change language to English" : "Mudar idioma para Português");
        }

        restartTypewriter();
    }

    function type() {
        if (!typewriterElement) return;

        const words = typewriterWords[currentLanguage];
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let delay = isDeleting ? 50 : 120;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            delay = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 500;
        }

        typewriterTimeout = setTimeout(type, delay);
    }

    function restartTypewriter() {
        clearTimeout(typewriterTimeout);
        wordIndex = 0;
        charIndex = 0;
        isDeleting = false;

        if (typewriterElement) {
            typewriterElement.textContent = "";
            type();
        }
    }

    if (languageToggle) {
        languageToggle.addEventListener("click", () => {
            applyLanguage(currentLanguage === "pt" ? "en" : "pt");
        });
    }

    applyLanguage(currentLanguage);

    // ==========================================================================
    // Revelação de seções ao rolar a página (Scroll Reveal)
    // ==========================================================================
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(revealCallback, {
            root: null,
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('active'));
    }
});