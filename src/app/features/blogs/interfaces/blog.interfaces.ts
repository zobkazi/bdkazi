export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface BlogCategory {
  postId: number;
  categoryId: number;
  category: Category;
}

export interface BlogPost {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  authorId: number;
  coverImage: string | null;
  categories: BlogCategory[];
  tags: string[];
}

export interface BlogResponse {
  posts: BlogPost[];
  total: number;
}
