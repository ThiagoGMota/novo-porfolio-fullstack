import { CheckSquare, Code, Database, Eye, Globe, Search, Server, ShoppingCart, Zap } from 'lucide-react';

interface ServiceProps {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const services: ServiceProps[] = [
    {
        id: 1,
        title: 'Desenvolvimento Web',
        description: 'Criação de websites responsivos e otimizados.',
        icon: <Globe />,
    },
    {
        id: 2,
        title: 'Aplicações Web',
        description: 'Desenvolvimento de aplicações interativas usando React e Next.js.',
        icon: <Code />,
    },
    {
        id: 3,
        title: 'SEO',
        description: 'Otimização de sites para melhorar a visibilidade nos motores de busca.',
        icon: <Search />,
    },
    {
        id: 4,
        title: 'Desenvolvimento de APIs',
        description: 'Criação de APIs RESTful ou GraphQL para integração com front-end e outros serviços.',
        icon: <Server />,
    },
    {
        id: 5,
        title: 'Integração com Banco de Dados',
        description: 'Configuração e gerenciamento de bancos de dados, como MongoDB, PostgreSQL ou MySQL, para armazenamento eficiente de dados.',
        icon: <Database />,
    },
    /* {
        id: 6,
        title: 'E-commerce',
        description: 'Desenvolvimento de lojas virtuais personalizadas, incluindo integração com gateways de pagamento e gerenciamento de produtos.',
        icon: <ShoppingCart />,
    }, */
    /* {
        id: 7,
        title: 'Testes e Garantia de Qualidade',
        description: 'Implementação de testes automatizados e manuais para garantir a qualidade do software.',
        icon: <CheckSquare />,
    }, */
    {
        id: 8,
        title: 'Otimização de Performance',
        description: 'Análise e melhorias na performance do site, garantindo tempos de carregamento rápidos e uma boa experiência do usuário.',
        icon: <Zap />,
    },
    {
        id: 9,
        title: 'Acessibilidade Web',
        description: 'Implementação de práticas para garantir que os sites sejam acessíveis a todos os usuários, incluindo aqueles com deficiências.',
        icon: <Eye />,
    },
];
