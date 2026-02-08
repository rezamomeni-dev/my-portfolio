export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  source: string;
  category: string;
  isoDate: string;
}

export interface BlogGridProps {
  posts: BlogPost[];
}

export interface BlogCardProps {
  post: BlogPost;
  index: number;
}
