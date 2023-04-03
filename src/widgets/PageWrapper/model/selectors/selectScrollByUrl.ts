import { PageUrl } from "../types/RememberScrollSchema";

export const selectScrollByUrl = (state: StateSchema, page: PageUrl) => {
  return state.scroll.pagesScrolls[page];
};
