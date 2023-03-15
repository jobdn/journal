export enum ArticleBlockType {
  IMAGE = "IMAGE",
  TEXT = "TEXT",
  CODE = "CODE",
}

export interface BaseArticleBlock {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleTextBlock extends BaseArticleBlock {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
  title?: string;
}

export interface ArticleCodeBlock extends BaseArticleBlock {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends BaseArticleBlock {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export type ArticleType = "IT" | "SCIENCE" | "HEALTH";

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[]; // ! Unique values
  blocks: Array<ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock>;
}
