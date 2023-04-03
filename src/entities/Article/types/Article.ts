import { User } from "entities/User";

export enum ArticleBlockType {
  IMAGE = "IMAGE",
  TEXT = "TEXT",
  CODE = "CODE",
}

export type ArticleListView = "list" | "tile";

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

export const articleTopics = [
  "ALL",
  "IT",
  "SCIENCE",
  "MEAL",
  "POLICY",
] as const;

export type ArticleTopic = (typeof articleTopics)[number];

export type ArticleBlock =
  | ArticleTextBlock
  | ArticleCodeBlock
  | ArticleImageBlock;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleTopic[]; // ! Unique values
  blocks: ArticleBlock[];
  user: User;
}
