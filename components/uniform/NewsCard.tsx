import Link from "next/link";
import {
  ComponentParameter,
  ComponentProps,
  UniformText,
} from "@uniformdev/next-app-router/component";
import { AssetParamValue, flattenValues } from "@uniformdev/canvas";

export type NewsCardProps = {
  title: ComponentParameter<string>;
  slug: ComponentParameter<string>;
  excerpt: ComponentParameter<string>;
  category: ComponentParameter<string>;
  readTime: ComponentParameter<string>;
  image: ComponentParameter<AssetParamValue>;
  isFeatured: ComponentParameter<boolean>;
};

export const NewsCard = ({
  parameters: { title, slug, excerpt, category, readTime, image, isFeatured },
  component,
}: ComponentProps<NewsCardProps>) => {
  const articleImage = flattenValues(image?.value, { toSingle: true });
  const articleSlug = slug?.value || "article";
  const isFeaturedArticle = isFeatured?.value || false;
  const categoryValue = category?.value || "News";
  const readTimeValue = readTime?.value || "3 min read";

  if (isFeaturedArticle) {
    return (
      <Link href={`/news/${articleSlug}`} className="lg:row-span-2 group">
        <article className="relative h-full bg-background rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors">
          <div className="relative h-64 lg:h-80 overflow-hidden">
            {articleImage?.url ? (
              <img
                src={articleImage.url}
                alt={title?.value || "Article"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">No Image</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs uppercase tracking-wider">
              {categoryValue}
            </span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
              <span>{readTimeValue}</span>
            </div>
            <h3 className="font-heading text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
              <UniformText
                component={component}
                parameter={title}
                placeholder="Article Title"
                as="span"
              />
            </h3>
            <p className="text-muted-foreground">
              <UniformText
                component={component}
                parameter={excerpt}
                placeholder="Article excerpt"
                as="span"
              />
            </p>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link
      href={`/news/${articleSlug}`}
      className="group flex gap-4 bg-background rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
    >
      <div className="relative w-32 sm:w-40 flex-shrink-0 overflow-hidden">
        {articleImage?.url ? (
          <img
            src={articleImage.url}
            alt={title?.value || "Article"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground text-xs">No Image</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col justify-center">
        <span className="text-xs uppercase tracking-wider text-primary mb-2">
          {categoryValue}
        </span>
        <h3 className="font-heading text-base sm:text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          <UniformText
            component={component}
            parameter={title}
            placeholder="Article Title"
            as="span"
          />
        </h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{readTimeValue}</span>
        </div>
      </div>
    </Link>
  );
};
