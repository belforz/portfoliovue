// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba",
    textSub: "#FF0000",
    textSubUnline: "#0FFF50"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Olá, meu nome é",
    name: "Leandro Belfor",
    message: "Sou estudande de Análise e Desenvolvimento de Sistemas, cai de paraquedas nesse mundo digital e olha que até que meu pouso foi bem, que tal conhecer-lo?",
    basedLocation: "São Paulo, SP",
    resumeLink: "https://drive.google.com/file/d/1qfaXldO9Ih7YUhdrHFlKLcZhoD6AxmGk/view?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        // link: "images/logo1.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/eufundo.png'
}

const socialMediaLinks = {
    github: "https://github.com/belforz",
    linkedin: "https://www.linkedin.com/in/leandro-belfor-ba3640143/",
    // medium: "https://medium.com/@mimaishel",
    // stackoverflow: "",
    // xtwitter: "https://twitter.com/mimaishel"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "Uma paixão por códigos, letras e problemas seja em Java, Javascript, PHP & outras. ",
        "Responsável, comunicativo, proativo, conciso nas palavras e amante de cinema viu? Estou estudando e trabalhando dentro do mundo do Desenvolvimento por mais de 1 ano e meio, atualmente estou na busca de um estágio ou vaga junior que adentre no mundo da Tecnologia."
    ], // Separated items are paragraphs
    techStack: [
        "PHP",
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL Language",
        "No-SQL"
    ],
    photo1Link: "images/portrato1.jpg",
    photo2Link: "images/portrato2.jpg",
    
    
}

// --💪🤝--- Skills Section ---


const skills = {
    hardSkills: [
        "PHP",
        "Java",
        "PHP",
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "Python",
        "Noções de C & C++ & Ruby",
        "React",
        "ReactNative",
        "Vue.js",
        "Node,js",
        "Springboot",
        "IntelliJeA",
        "Android Studio",
        "SQL Language",
        "No-SQL",
        "Ingles",
        "Espanhol"
    ], softSkills:[
        "Sociabilidade",
        "Comunicação",
        "Trabalho em Grupo",
        "Inovação",
        "Curiosidade",
        "Proatividade"
    ]
}
  
// --- 🛡️ Experience Section ---
const experiences = [

    {
        position: "Desenvolvedor Freelancer",
        company: {
            name: "Grupo R&M Administração.",
            
        },
        duration: "Mai 2024 - Mai 2024",
        bulletPoints: [
           "Construção e Desenvolvimento de um site que atualiza a nova imagem e estrutura da empresa", 
            "de acordo com os designs elaborados, com seu aspectos minimalistas", 
            "através de tecnologias como PHP, JS e CSS."
        ],
        hashtags: [
            "PHP",
            "locaweb",
            "JS",
            "CSS",
            "HTML",
            
        ]
    },
    {
        position: "Desenvolvedor Freelancer",
        company: {
            name: "Time Solutions LTDA.",
            
        },
        duration: "Dez 2023 - Março 2024",
        bulletPoints: [
            "Planejamento e Estruturação de sites para a limpeza de nome de pessoas em inadimplência com utilização de tecnologia JavaScript, HTML e CSS com mascaramento de rotas além de um serviço para o cancelamentode CPNJ, seguindo as boas práticas do mercado.",
            "Estilo em landing page ecom utilização das tecnologias SCSS, JavaScript e HTML",
            "Hospedagem de contéudo e UX Design"
        ],
        hashtags: [
            "Laravel",
            "PHP",
            "JavaScript",
            "Vue.js",
            "HTML",
            
        ]
    },
    {
        position: "Garçom",
        company: {
            name: "AGA CARNEIRO RESTAURANTE",
        },
        duration: "Jun 2022 - Maio 2024",
        bulletPoints: [
            "Atendimento ao Cliente, Recepção",
            "Comunicação em Inglês para Estrangeiros.",
        ],
        hashtags: [
            "Inglês",
            "Comunicação",
            "Trabalho em Grupo",
            "Dinâmica Social"
        ]
    },

    {
        position: "Assistente",
        company: {
            name: "AISEC no Brasil",
        },
        duration: "Ago 2018 - Dez 2018",
        bulletPoints: [
            "Acompanhamento de intercambistas na região de Belém",
            "Lidar com suas rotinas nos projetos sociais da cidade",
            "Uso continuo do Inglês para sua sustenção"
        ],
        hashtags: [
            "Inglês",
            "Comunicação",
            "Trabalho em Grupo",
            "Dinâmica Social"
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "R&M Administração",
        yearCompleted: "2024",
        description: "Com seus aspectos minimalistas, através de tecnologias como PHP, JS e CSS, uma atualização do site da empresa envolvendo práticas de UX design",
        techStack: "JavaScript, CSS, HTML & PHP",
        links: [
            {
                label: "GitHub",
                type: "git",
                url: "https://github.com/belforz/rmadministracao"
            },
            {
                label: "Website",
                type: "external",
                url: "https://rmadministracao.com.br"
            }
        ],
        imageLink: "images/r&m.png",
        alignLeft: true,
        isImportant: false
    },
    {
        projectName: "BaixaCNPJ",
        yearCompleted: "2024",
        description: "Site de venda para a finalização de processos de CNPJ, diminuindo etapas com a utilização de UX design para atração de público.",
        techStack: "JavaScript, CSS, HTML & PHP",
        links: [
            {
                label: "GitHub",
                type: "git",
                url: "https://github.com/belforz/baixaCNPJ"
            }
        ],
        imageLink: "images/baixacnpj.png",
        alignLeft: false,
        isImportant: false
    },
    {
        projectName: "LimpaNome",
        yearCompleted: "2024",
        description: "Uma interface mais atraente para a limpeza de nome, abreviando processos.",
        techStack: "PHP, HTML, CSS, JS",
        links: [
            {
                label: "GitHub",
                type: "git",
                url: "https://github.com/belforz/LimpaNome"
            }
        ],
        imageLink: "images/Zaion.png",
        alignLeft: true,
        isImportant: false
    },
    {
        projectName: "Bom Vizinho",
        yearCompleted: "2023",
        description: "Um web aplicativo de serviços voluntários para idosos.",
        techStack: "HTML, CSS, JS, Java, PostgreSQL, Vercel, SwaggerUi",
        links: [
            {
                label: "GitHub",
                type: "git",
                url: "https://github.com/belforz/voluntariado-site"
            },
            {
                label: "Website",
                type: "external",
                url: "https://sistemas-bomvizinho.com.br"
            }
        ],
        imageLink: "images/BomVizinho.png",
        alignLeft: false,
        isImportant: true
    },
    {
    computed: {
        sortedWorks() {
            // Movendo o projeto importante para o topo
            return this.content.slice().sort((a, b) => b.isImportant - a.isImportant);
        },
        projInitial() {
            // Exibe inicialmente os primeiros projetos importantes e os normais
            return this.sortedWorks.slice(0, 2); // Exemplo de corte inicial
        }}}
];


const archiveLink = "https://github.com/belforz?tab=repositories"

// --- 📭 Contact Section ---

const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Atualmente na procura de estágio ou vaga junior,",
            "Também a procura de projetos em time. "
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "macedobeiramar@hotmail.com", // email takes precedance
            
        },
        responseTimeMessage: "... e eu vou lhe responder dentro de 24 horas"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact, skills
    
    
    
}