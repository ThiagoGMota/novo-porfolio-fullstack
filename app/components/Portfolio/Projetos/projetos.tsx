interface Projeto {
    id:             number| string;
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
    projetos:   Projeto[];
}

export const projetos: ProjetosPorCategoria = {
    projetos: [
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
            description:`<h1>Blog</h1>
            Blog pessoal usando o Notion como CMS. Este blog esta localizado nesta mesma aplicação, porém o repositorio do projeto esta separado no github. Acessivel pelo link abaixo.`,
            primaryImg: "/projetos/blog/mac-1.png",
            otherImgs: [
                "/projetos/blog/mac-1.png",
                "/projetos/blog/mac-2.png",
                "/projetos/blog/iphone-1.png",
                "/projetos/blog/iphone-2.png",
            ],
            tecnologies:`Next.Js, TailwindCSS, React, NotionApi`,
            peqDescription:'Blog Pessoal',
            github:'https://github.com/ThiagoGMota/blog.git'
        },
        {
            id:4,
            title:"Portfolio",
            description:`<h1>Portfolio</h1>
            Este portfolio, construido com Next.Js, TailwindCSS e React. Projeto onde mostro meus projetos e habilidades como desenvolvedor frontend`,
            primaryImg: "/projetos/portfolio-novo/mac-1.png",
            otherImgs: [
                "/projetos/portfolio-novo/iphone-1.png"
            ],
            tecnologies:`Next.Js, TailwindCSS, React`,
            peqDescription:'Este Portfólio ',
            github:'https://github.com/ThiagoGMota/novo-porfolio-fullstack.git',
            link2:''
        },
        
        {
            id:5,
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
            id:6,
            title:"Quiz",
            primaryImg: "/projetos/quiz/mac.png",
            otherImgs: [
                "/projetos/quiz/mac.png",
                "/projetos/quiz/iphone-1.png",
                "/projetos/quiz/iphone-2.png",
            ],
            description: `<h1>Quiz</h1>
            Mini clone do buzfeed com apenas um unico quiz, projeto do bootcamp da DIO em parceria com o banco Pan`,
            tecnologies:`Angular17, Scss, Json`,
            peqDescription:'Site de quiz',
            github:'https://github.com/ThiagoGMota/Clone-BuzzFeed.git',
            link2:''
        },
        {
            id:7,
            title:"Youjitsu",
            primaryImg: "/projetos/youjitsu/Mac-1.png",
            otherImgs: [
                "/projetos/youjitsu/Mac-1.png",
                "/projetos/youjitsu/Mac-2.png",
            ],
            description: `<h1>Classroom of the Elite</h1>
            Pagina dedicada a divulgação da light novel Youkoso.`,
            tecnologies:`React, Tailwind`,
            peqDescription:'Página incompleta',
            github:'https://github.com/ThiagoGMota/Youjitsu-.git',
            link2:''
        },
        {
            id:8,
            title:"Landing Page",
            primaryImg: "/projetos/lpk/mac1.png",
            otherImgs: [
                "/projetos/lpk/mac1.png",
                "/projetos/lpk/mac2.png",
            ],
            description: `<h1>Landing Page simples</h1>
            Teste de criação de landing page em Angular 18`,
            tecnologies:`Angular 18, Scss`,
            peqDescription:'Página  de teste',
            github:'https://github.com/ThiagoGMota/landing-page.git',
            link2:''
        },
        {
            id:9,
            title:"Odontologia",
            primaryImg: "/projetos/carol/mac-1.png",
            otherImgs: [
                "/projetos/carol/mac-1.png",
                "/projetos/carol/mac-2.png",
                "/projetos/carol/mac-3.png",
            ],
            description: `<h1>Clinica Odontológica</h1>
            Template para site de odontologia, site institucional. Um dos meus primeiros projetos`,
            tecnologies:`HTML, CSS`,
            peqDescription:'Página Institucional',
            github:'https://github.com/ThiagoGMota/Site-Carol-Dentista.git',
            link2:''
        },
        {
            id:10,
            title:"Agencia Fake",
            primaryImg: "/projetos/agencia-fake/mac-1.png",
            otherImgs: [
                "/projetos/agencia-fake/mac-1.png",
                "/projetos/agencia-fake/mac-2.png",
                "/projetos/agencia-fake/iphone-1.png",
                "/projetos/agencia-fake/iphone-2.png",
            ],
            description: `<h1>Agencia Fake</h1>
            Pagina fake de uma agencia de desenvolvimento web.`,
            tecnologies:`React, Tailwind`,
            peqDescription:'Página incompleta',
            github:'https://github.com/ThiagoGMota/SiteFake-AulaProgramacaoBasica.git',
            link2:''
        },
        {
            id:11,
            title:"Blog Sanity",
            primaryImg: "/projetos/danity/m.png",
            otherImgs: [
                "/projetos/danity/m.png",
                "/projetos/danity/i-1.png",
                "/projetos/danity/i-2.png"
            ],
            description: `<h1>Blog usando Sanity</h1>
            Blog constuido usando o Sanity como CMS.`,
            tecnologies:`Nextjs, Tailwind, Sanity`,
            peqDescription:'Blog',
            github:'https://github.com/ThiagoGMota/nextjs14-blog-sanity.git',
            link2:''
        },
        {
            id:12,
            title:"Advocacia",
            primaryImg: "/projetos/advocacia/mac-1.png",
            otherImgs: [
                "/projetos/advocaca/mac-1.png",
                "/projetos/advocaca/mac-2.png",
                "/projetos/advocaca/mac-3.png",
                "/projetos/advocaca/mac-4.png"
            ],
            description: `<h1>Advocacia</h1>
            Site institucional de uma empresa de advocacia.`,
            tecnologies:`HTML, CSS`,
            peqDescription:'Site Institucional',
            github:'https://github.com/ThiagoGMota/AdvocaciaThiago.git',
            link2:''
        },
        {
            id:13,
            title:"Portfólio",
            primaryImg: "/projetos/old-portfolio/m-1.png",
            otherImgs: [
                "/projetos/old-portfolio/m-1.png",
                "/projetos/old-portfolio/m-2.png",
                "/projetos/old-portfolio/m-3.png",
                "/projetos/old-portfolio/m-4.png",
                "/projetos/old-portfolio/m-5.png",
                "/projetos/old-portfolio/i-1.png",
                "/projetos/old-portfolio/i-2.png",
                "/projetos/old-portfolio/i-3.png",
            ],
            description: `<h1>Portfolio</h1>
            Meu antigo portfólio.`,
            tecnologies:`Angular 18, SCSS, HTML`,
            peqDescription:'Antigo Portfólio',
            github:'https://github.com/ThiagoGMota/My-Portfolio.git',
            link2:''
        },
    ]
    
};
