import { MetadataRoute } from 'next';

import { getSitemapPostList } from '@/lib/post';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postList = await getSitemapPostList();
  const baseUrl = 'https://www.heejae.dev';
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postList,
  ];
}
