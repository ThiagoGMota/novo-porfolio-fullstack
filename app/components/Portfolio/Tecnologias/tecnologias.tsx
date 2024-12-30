import React from 'react';

interface TecnologiaProps {
    name:       string;
    image:      string;
    expertise:  number;
    versoInfo:  string;
    features?:  string[]; 
}

export const tecnologias: TecnologiaProps[] = [
    {
        name: 'JavaScript',
        image:'/iconsTecnologias/javascript.svg',
        expertise: 70.6,
        versoInfo: 'A linguagem básica do desenvolvimento web.',
        features: ['Manipulação do DOM', 'ES6+', 'Async/Await', 'Promises', 'Fetch API']
    },
    {
        name: 'TypeScript',
        image:'/iconsTecnologias/typescript.svg',
        expertise: 70.5,
        versoInfo: 'Um superconjunto tipado de JavaScript.',
        features: ['Tipos Estáticos', 'Interfaces', 'Generics']
    },
    {
        name: 'Angular 17',
        image:'/iconsTecnologias/angular.svg',
        expertise: 45.0,
        versoInfo: 'Uma plataforma para construir aplicações web.',
        features: ['Componentes', 'Serviços', 'RxJS']
    },
    {
        name: 'PostgreSQL',
        image:'/iconsTecnologias/postgresql.svg',
        expertise: 67.0,
        versoInfo: 'Um sistema de gerenciamento de banco de dados relacional.',
        features: ['Consultas SQL', 'Transações', 'Stored Procedures']
    },
    {
        name: 'Tailwind CSS',
        image:'/iconsTecnologias/tailwind.svg',
        expertise: 80.2,
        versoInfo: 'Um framework CSS utilitário para criar designs personalizados.',
        features: ['Classes Utilitárias', 'Responsividade', 'Personalização']
    },
    {
        name: 'HTML',
        image:'/iconsTecnologias/html.svg',
        expertise: 90.0,
        versoInfo: 'A linguagem de marcação padrão para criar páginas web.',
        features: ['Estrutura de Documentos', 'Semântica', 'Formulários']
    },
    {
        name: 'CSS',
        image:'/iconsTecnologias/css.svg',
        expertise: 80.5,
        versoInfo: 'A linguagem de estilo para descrever a apresentação de documentos HTML.',
        features: ['Flexbox', 'Grid Layout', 'Animações']
    },
    {
        name: 'Next.js',
        image:'/iconsTecnologias/nextjs.svg',
        expertise: 67.0,
        versoInfo: 'Um framework React para aplicações em produção.',
        features: ['Renderização do Lado do Servidor', 'Rotas Dinâmicas', 'API Routes']
    },
    {
        name: 'Node.js',
        image:'/iconsTecnologias/nodejs.svg',
        expertise: 50.5,
        versoInfo: 'Um ambiente de execução JavaScript no lado do servidor.',
        features: ['Express.js', 'APIs RESTful', 'Gerenciamento de Pacotes com NPM']
    },
    {
        name: 'Shell Script',
        image:'/iconsTecnologias/bash.svg',
        expertise: 60.5,
        versoInfo: 'Uma linguagem de script para automação de tarefas no shell.',
        features: ['Automação de Tarefas', 'Manipulação de Arquivos', 'Scripts de Backup']
    }
];