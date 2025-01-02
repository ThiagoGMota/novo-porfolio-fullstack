'use server'

import { Client } from '@notionhq/client';
import { NotionDatabaseResponse } from '../interface/notion';

import { NotionToMarkdown } from "notion-to-md";

const databaseId = '16e08657-0fb4-8022-b1a1-c70f562ca018';
const notion = new Client({ auth: process.env.NOTION_API_KEY });
export async function GetPosts () {

    const response = await notion.databases.query({
      database_id: databaseId,
      /* filter: {
        or: [
          {
            property: 'In stock',
            checkbox: {
              equals: true,
            },
          },
          {
            property: 'Cost of next trip',
            number: {
              greater_than_or_equal_to: 2,
            },
          },
        ],
      },
      sorts: [
        {
          property: 'Last ordered',
          direction: 'ascending',
        },
      ], */
    });

    const typedResponse = (response as unknown) as NotionDatabaseResponse;

    return typedResponse.results.map((post) => {
      return{
        id: post.id,
        title: post.properties.title.title[0].plain_text,
        slug: post.properties.slug.rich_text[0].plain_text,
        tags: post.properties.tags.multi_select.map((tag) => tag.name),
        createdTime: post.created_time,
      }
    })
    /* console.log(JSON.stringify(response, null, 2)); */
}
export async function getPoem(slug:string) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: 'slug',
          rich_text: {
            equals: slug,
          },
        },
        
      ],
    },
   
  });
  const pageId = response.results[0].id
  console.log(JSON.stringify(pageId, null, 2));

  const n2m = new NotionToMarkdown({ notionClient: notion });
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  
  return {
    title : response.results[0].properties.title.title[0].plain_text,
    content : mdString.parent
  }

   

}
