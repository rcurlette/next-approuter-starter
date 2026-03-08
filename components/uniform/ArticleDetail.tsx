import Link from "next/link";
import {
  ComponentParameter,
  ComponentProps,
  UniformRichText,
  UniformText,
} from "@uniformdev/next-app-router/component";
import { AssetParamValue, flattenValues } from "@uniformdev/canvas";

export type ArticleDetailProps = {
  title: ComponentParameter<string>;
  body: ComponentParameter<string>;
  category: ComponentParameter<string>;
  publishDate: ComponentParameter<string>;
  readTime: ComponentParameter<string>;
  image: ComponentParameter<AssetParamValue>;
  author: ComponentParameter<string>;
};

export const ArticleDetail = ({
  parameters: { title, body, category, publishDate, readTime, image, author },
  component,
}: ComponentProps<ArticleDetailProps>) => {
  const articleImage = flattenValues(image?.value, { toSingle: true });
  const categoryValue = category?.value || "News";
  const readTimeValue = readTime?.value || "5 min read";
  const authorValue = author?.value || "Composable GP Staff";

  return (
    <article className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to News
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 text-sm mb-4">
            <span className="bg-primary text-primary-foreground px-3 py-1 text-xs uppercase tracking-wider">
              {categoryValue}
            </span>
            <span className="text-muted-foreground">{readTimeValue}</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-6">
            <UniformText
              component={component}
              parameter={title}
              placeholder="Article Title"
              as="span"
            />
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>By {authorValue}</span>
            {publishDate?.value && (
              <>
                <span>•</span>
                <span>{publishDate.value}</span>
              </>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {articleImage?.url && (
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8">
            <img
              src={articleImage.url}
              alt={title?.value || "Article image"}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Body Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <UniformRichText
            component={component}
            parameter={body}
            placeholder="Article content goes here..."
          />
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Share this article</p>
          <div className="flex gap-4">
            <button className="p-2 bg-card rounded hover:bg-muted transition-colors">
              <svg
                className="w-5 h-5 text-foreground"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
            <button className="p-2 bg-card rounded hover:bg-muted transition-colors">
              <svg
                className="w-5 h-5 text-foreground"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
