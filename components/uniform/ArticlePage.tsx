import {
  ComponentProps,
  UniformSlot,
} from "@uniformdev/next-app-router/component";

export type ArticlePageSlots = "content";

export const ArticlePage = ({
  slots,
}: ComponentProps<unknown, ArticlePageSlots>) => {
  return <UniformSlot slot={slots.content} />;
};
