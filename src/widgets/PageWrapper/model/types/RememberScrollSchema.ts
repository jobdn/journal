export type PageUrl = string;
export type PageScroll = number;
export type PageScrollMap = Record<PageUrl, PageScroll>;

export interface RememberScrollSchema {
  pagesScrolls: PageScrollMap;
}
