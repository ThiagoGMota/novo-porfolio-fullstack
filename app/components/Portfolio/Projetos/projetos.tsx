interface Projeto {
    id:             number;
    title:          string;
    primaryImg:     string;
    tecnologies?:   string;
    otherImgs?:     string[];
    description:    string;
    peqDescription: string; 
    github:         string;
    link2?:         string; 
}

export interface ProjetosPorCategoria {
    projetosDestaque:   Projeto[];
    projetosTodos:      Projeto[];
}

export const projetos: ProjetosPorCategoria = {
    projetosDestaque: [
        {
            id:1,
            title:"Coffee Shop",
            primaryImg: "/projetos/coffee-shop/mac-1.png",
            otherImgs: [
                "/projetos/coffee-shop/mac-1.png",
                "/projetos/coffee-shop/mac-2.png",
                "/projetos/coffee-shop/mac-3.png",
                "/projetos/coffee-shop/iphone-1.png",
                "/projetos/coffee-shop/iphone-2.png",
                "/projetos/coffee-shop/iphone-3.png",
/*                 "/projetos/coffee-shop/ipad-1.png",
 */            ],
            description: `<h1>Ecommerce</h1>
            Projeto frontend de um ecommerce de café. 
            Utilizando as tecnologias Next.Js, TailwindCSS, React, Context API, ShadcnUi.
            Este projeto foi construido com intuito de melhorar minhas habilidades e explorar novos layouts, è apenas um projeto de teste, por isso não esta hospedado`,
            tecnologies:`Next.Js, TailwindCSS, React, Context API, ShadcnUi`,
            peqDescription: "Frontend de um Ecommerce de café",
            github: "https://github.com/ThiagoGMota/coffee-shop",
            link2: "/404"
        },
        {
            id:2,
            title:"Gestor Pessoal - Landing Page",
            primaryImg: "/projetos/my-money/Mac-1.png",
            otherImgs: [
                "/projetos/my-money/Mac-1.png",
                "/projetos/my-money/Mac-2.png",
                "/projetos/my-money/Mac-3.png",
                "/projetos/my-money/iPhone-1.png",
                "/projetos/my-money/iPhone-2.png",
            ],
            description: `<h1>Landing Page</h1>
            Landing Page construida para promoção da futura aplicação MyMoney, um gestor pessoal`,
            tecnologies:`React, Next.Js, TailwindCSS`,
            peqDescription:'Landing Page de um site de finanças pessoais, com o intuito de divulgação',
            github:'https://github.com/ThiagoGMota/MyMoney-webApp.git'
        },
        {
            id:3,
            title:"Blog",
            description:`Blog de poemas construido usando o Notion como CMS`,
            primaryImg: "/projetos/blog/mac-1.png",
            otherImgs: [],
            tecnologies:`Next.Js, TailwindCSS, React, NotionApi`,
            peqDescription:'Blog de poemas',
            github:'https://github.com/ThiagoGMota/blog.git'
        },
        {
            id:4,
            title:"Portfolio",
            description:`<h1>Portfolio</h1>
            Este portfolio, construido com Next.Js, TailwindCSS e React. Projeto onde mostro meus projetos e habilidades como desenvolvedor frontend`,
            primaryImg: "/projetos/portfolio/mac-1.png",
            otherImgs: [],
            tecnologies:`Next.Js, TailwindCSS, React`,
            peqDescription:'Este Portfólio ',
            github:''
        },
        
        {
            id:6,
            title:'Sherlock Holmes Box',
            primaryImg:"/projetos/sherlock/Mac-1.png",
            otherImgs:[
                "/projetos/sherlock/Mac-1.png",
                "/projetos/sherlock/Mac-2.png",
                "/projetos/sherlock/Mac-3.png",
                "/projetos/sherlock/Mac-4.png",
                "/projetos/sherlock/iPhone-1.png",
                "/projetos/sherlock/iPhone-2.png",
            ],
            description:"Projeto pessoal, criação de uma landing page de vendas de um box comemorativ os dos livros Sherlock Holmes.",
            tecnologies:"HTML, CSS",
            peqDescription:"Landing Page de vendas de um box comemorativo",
            github:"https://github.com/ThiagoGMota/lp-sherlock-holmes.git",
            link2:"https://thiagogmota.github.io/lp-sherlock-holmes/"
        }
    ],
    projetosTodos:[
        {
            id:1,
            title:"Coffee Shop",
            primaryImg: "/projetos/coffee-shop/mac-1.png",
            otherImgs: [
                "/projetos/coffee-shop/mac-1.png",
                "/projetos/coffee-shop/mac-2.png",
                "/projetos/coffee-shop/mac-3.png",
                "/projetos/coffee-shop/iphone-1.png",
                "/projetos/coffee-shop/iphone-2.png",
                "/projetos/coffee-shop/iphone-3.png",
/*                 "/projetos/coffee-shop/ipad-1.png",
 */            ],
            description: `<h1>Ecommerce</h1>
            Projeto frontend de um ecommerce de café. 
            Utilizando as tecnologias Next.Js, TailwindCSS, React, Context API, ShadcnUi.
            Este projeto foi construido com intuito de melhorar minhas habilidades e explorar novos layouts, è apenas um projeto de teste, por isso não esta hospedado`,
            tecnologies:`Next.Js, TailwindCSS, React, Context API, ShadcnUi`,
            peqDescription: "Frontend de um Ecommerce de café",
            github: "https://github.com/ThiagoGMota/coffee-shop",
            link2: "/404"
        },
        {
            id:2,
            title:"Gestor Pessoal - Landing Page",
            primaryImg: "/projetos/my-money/Mac-1.png",
            otherImgs: [
                "/projetos/my-money/Mac-1.png",
                "/projetos/my-money/Mac-2.png",
                "/projetos/my-money/Mac-3.png",
                "/projetos/my-money/iPhone-1.png",
                "/projetos/my-money/iPhone-2.png",
            ],
            description: `<h1>Landing Page</h1>
            Landing Page construida para promoção da futura aplicação MyMoney, um gestor pessoal`,
            tecnologies:`React, Next.Js, TailwindCSS`,
            peqDescription:'Landing Page de um site de finanças pessoais, com o intuito de divulgação',
            github:'https://github.com/ThiagoGMota/MyMoney-webApp.git'
        },
        
        {
            id:4,
            title:'Sherlock Holmes Box',
            primaryImg:"/projetos/sherlock/Mac-1.png",
            otherImgs:[
                "/projetos/sherlock/Mac-1.png",
                "/projetos/sherlock/Mac-2.png",
                "/projetos/sherlock/Mac-3.png",
                "/projetos/sherlock/Mac-4.png",
                "/projetos/sherlock/iPhone-1.png",
                "/projetos/sherlock/iPhone-2.png",
            ],
            description:"Projeto pessoal, criação de uma landing page de vendas de um box comemorativ os dos livros Sherlock Holmes.",
            tecnologies:"HTML, CSS",
            peqDescription:"Landing Page de vendas de um box comemorativo",
            github:"https://github.com/ThiagoGMota/lp-sherlock-holmes.git",
            link2:"https://thiagogmota.github.io/lp-sherlock-holmes/"
        },
        {
            id:3,
            title:"Clone BuzzFeed",
            primaryImg: "/projetos/mini-buzzfeed/mac-1.png",
            otherImgs: [],
            description: `<h1>Mini CLone BuzzFeed</h1>
            Mini clone do buzfeed com apenas um unico quiz, projeto do bootcamp da DIO em parceria com o banco Pan`,
            tecnologies:`Angular17, Scss, Json`,
            peqDescription:'Site de quiz',
            github:'https://github.com/ThiagoGMota/Clone-BuzzFeed.git'
        },
    ]
    
};
