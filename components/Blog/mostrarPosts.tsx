import { GetPosts } from '@/app/services/notion';
import React from 'react'
import PreviewPoemCard from './card';
import { format } from 'date-fns';

const ShowPosts = async () => {
    const posts = await GetPosts();

  return (
    <div className='grid sm:grid-cols-2  lg:grid-cols-3  gap-4'>
    {posts.map((poem) => (
        <PreviewPoemCard 
          key={poem.id} 
          titulo={poem.title} 
          data={format(new Date(poem.createdTime), 'dd/MM/yyyy HH:mm')}
          descricao=''
          tags={poem.tags}
          link={`/blog/${poem.slug}`}

        />
      ))}
      </div>
    
  )
}

export default ShowPosts