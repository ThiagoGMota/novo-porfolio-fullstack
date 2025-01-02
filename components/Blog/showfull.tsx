import React from 'react'
import { format } from 'date-fns';
import { getPoem } from '@/app/services/notion';
import ReactMarkdown from 'react-markdown';

const ShowFullPoem = async ({params}:{params:{slug:string}}) => {
    const poem = await getPoem(params.slug);

  return (
    <>
    <h1>{poem.title}</h1>
    <ReactMarkdown>{poem.content}</ReactMarkdown>
    </>
    
  )
}
//format(new Date(poem.createdTime), 'dd/MM/yyyy HH:mm')}
export default ShowFullPoem;