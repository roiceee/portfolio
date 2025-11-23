interface ArticleContentText {
  type: "text";
  text: string;
}

interface ArticleContentParagraph {
  type: "paragraph";
  children: ArticleContentText[];
}

type ArticleContent = ArticleContentParagraph[];

interface ArticleTagAttributes {
  tag: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ArticleTag {
  id: number;
  attributes: ArticleTagAttributes;
}

interface ArticleArchiveAttributes {
  archive: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ArticleArchive {
  data: {
    id: number;
    attributes: ArticleArchiveAttributes;
  };
}

interface ArticleAttributes {
  title: string;
  date_published: string;
  content?: ArticleContent;
  excerpt: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  embedHtml?: string;
  portfolio_blog_tags: {
    data: ArticleTag[];
  };
  portfolio_blog_archive: ArticleArchive;
}

interface ArticleData {
  id: number;
  attributes: ArticleAttributes;
}

interface ArticleResponse {
  data: ArticleData[];
  meta: {};
}

export type {
  ArticleContent,
  ArticleTag,
  ArticleArchive,
  ArticleAttributes,
  ArticleData,
  ArticleResponse,
};
