import { NextRequest, NextResponse } from 'next/server';
import Parser from 'rss-parser';
import { FEEDS, BlogPost } from '@/lib/blog-feeds';

const parser = new Parser();

// Simple cache
let cachedPosts: BlogPost[] = [];
let lastFetch = 0;
const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const offset = (page - 1) * limit;

  try {
    const now = Date.now();
    if (cachedPosts.length === 0 || now - lastFetch > CACHE_DURATION) {
      const feedPromises = FEEDS.map(async (feed) => {
        try {
          // Add a timeout to fetch to prevent hanging
          const parsedFeed = await parser.parseURL(feed.url);
          return parsedFeed.items.map((item) => ({
            title: item.title || 'No Title',
            link: item.link || '',
            pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
            contentSnippet: item.contentSnippet || (item.content ? item.content.substring(0, 160) + '...' : ''),
            source: feed.name,
            category: feed.category,
            isoDate: item.isoDate || new Date().toISOString(),
          }));
        } catch (error) {
          console.error(`Error fetching feed ${feed.name}:`, error);
          return [];
        }
      });

      const allResults = await Promise.all(feedPromises);
      cachedPosts = allResults.flat().sort((a, b) => {
        return new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime();
      });
      lastFetch = now;
    }

    const paginatedPosts = cachedPosts.slice(offset, offset + limit);

    return NextResponse.json({
      posts: paginatedPosts,
      hasMore: offset + limit < cachedPosts.length,
      total: cachedPosts.length,
    });
  } catch (error) {
    console.error('Error in blog API:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}
