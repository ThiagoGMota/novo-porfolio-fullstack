import { getPoem } from '@/app/services/notion';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const SlugPoem = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params; // Para evitar erros em novas versões
    const poem = await getPoem(slug);

    return (
        <div className="flex items-center justify-center min-h-screen bg-transparent p-6 ">
            <div className="bg-white/80 shadow-lg rounded-lg p-8 max-w-2xl w-full">
                <Link href={'/blog'} className='shadow-2xl  py-2 px-4 rounded-lg hover:bg-black hover:text-white my-12'>Voltar</Link>
                <h1 className="text-4xl font-bold text-center my-6">{poem.title}</h1>
                
                <ReactMarkdown
                
                    components={{
                        h1: ({ node, ...props }) => <h1 className='text-3xl my-4' {...props} />,
                        h2: ({ node, ...props }) => <h2 className='text-2xl my-4' {...props} />,
                        h3: ({ node, ...props }) => <h3 className='text-xl my-4' {...props} />,
                        p: ({ node, ...props }) => <p className='text-base my-2 leading-relaxed' {...props} />,
                        em: ({ node, ...props }) => <em className='text-red-500 italic' {...props} />,
                        strong: ({ node, ...props }) => <strong className='font-bold' {...props} />,
                        // Para texto semibold
                        h4: ({ node, ...props }) => <h4 className='text-lg font-semibold my-4' {...props} />,
                        ul: ({ node, ...props }) => <ul className='list-disc list-inside my-2' {...props} />,
                        ol: ({ node, ...props }) => <ol className='list-decimal list-inside my-2' {...props} />,
                        li: ({ node, ...props }) => <li className='my-1' {...props} />,
                        blockquote: ({ node, ...props }) => (
                            <blockquote className='border-l-4 border-gray-400 pl-4 italic text-gray-600 my-4' {...props} />
                        ),
                        code({ node, inline, className, children, ...props }) {
                            return inline ? (
                                <code className='bg-gray-200 p-1 rounded' {...props}>{children}</code>
                            ) : (
                                <pre className='bg-gray-100 p-2 rounded'>
                                    <code>{String(children).replace(/\n$/, '')}</code>
                                </pre>
                            );
                        }
                    }}
                >
                    {poem.content}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default SlugPoem;