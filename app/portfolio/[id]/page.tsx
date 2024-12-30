'use client'

import { projetos } from '@/app/components/Portfolio/Projetos/projetos';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

const glassmorphismStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
};

const getImageContainerClass = (imageName: string) => {
  if (imageName.toLowerCase().includes('iphone')) {
    return 'aspect-[792/390]';
  } else if (imageName.toLowerCase().includes('mac')) {
    return 'aspect-[1339/769]';
  } else if (imageName.toLowerCase().includes('ipad')) {
    return 'aspect-[617/855]';
  }
  return 'aspect-video'; // default aspect ratio
};

const ProjetoDetalhes: React.FC = () => {
  const { id } = useParams();

  const projeto = projetos.projetosDestaque.find(proj => proj.id === Number(id));

  if (!projeto) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-gray-800">Projeto não encontrado.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8" style={glassmorphismStyle}>
      <div className="max-w-4xl mx-auto" >
        <div className="p-8 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold mb-6 text-white">{projeto.title}</h1>
          
          <div className={`mb-8 relative ${getImageContainerClass(projeto.primaryImg)}`}>
            <div className="absolute inset-0 flex items-start">
              <Image 
                src={projeto.primaryImg} 
                alt={projeto.title} 
                layout="fill"
                objectFit="contain"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {projeto.tecnologies && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-200">Tecnologias</h2>
              <p className="text-gray-300">{projeto.tecnologies}</p>
            </div>
          )}

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-200">Descrição</h2>
            <div 
              className="prose max-w-none text-gray-300" 
              dangerouslySetInnerHTML={{ __html: projeto.description }} 
            />
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href={projeto.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
            >
              <Github className="mr-2" size={20} />
              Ver no GitHub
            </a>
            {projeto.link2 && (
              <a 
                href={projeto.link2} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
              >
                <ExternalLink className="mr-2" size={20} />
                Ver Projeto
              </a>
            )}
          </div>

          {projeto.otherImgs && projeto.otherImgs.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-200">Outras Imagens</h2>
              <div className="grid grid-cols-1 gap-4">
                {projeto.otherImgs.map((imgSrc, index) => (
                  <div key={index} className={`${getImageContainerClass(imgSrc)} relative`}>
                    <div className="absolute inset-0 flex items-start">
                      <Image 
                        src={imgSrc} 
                        layout="fill"
                        objectFit="contain"
                        alt={`Imagem ${index + 1}`}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjetoDetalhes;

