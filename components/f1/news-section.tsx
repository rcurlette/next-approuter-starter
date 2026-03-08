import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    slug: "uniform-racing-composable-aero-package",
    title: "Uniform Racing Unveils Revolutionary Composable Aero Package",
    excerpt: "The new front wing design uses modular components that can be swapped mid-race, giving teams unprecedented flexibility.",
    category: "Technology",
    date: "Mar 8, 2026",
    readTime: "4 min read",
    image: "/images/news-aero.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: "max-composable-takes-pole",
    title: "Max Composable Takes Pole in Stunning Qualifying Session",
    excerpt: "The championship leader set a blistering lap time, outpacing his rivals by over half a second.",
    category: "Race Weekend",
    date: "Mar 7, 2026",
    readTime: "3 min read",
    image: "/images/news-qualifying.jpg",
    featured: false,
  },
  {
    id: 3,
    slug: "stack-solutions-technical-partnership",
    title: "Stack Solutions Announces Major Technical Partnership",
    excerpt: "The team has signed a multi-year deal with a leading headless CMS provider to optimize their data infrastructure.",
    category: "Teams",
    date: "Mar 6, 2026",
    readTime: "2 min read",
    image: "/images/news-partnership.jpg",
    featured: false,
  },
  {
    id: 4,
    slug: "component-racing-factory-tour",
    title: "Behind the Scenes: How Component Racing Builds Their Cars",
    excerpt: "An exclusive look at the factory where modular engineering meets racing excellence.",
    category: "Features",
    date: "Mar 5, 2026",
    readTime: "6 min read",
    image: "/images/news-factory.jpg",
    featured: false,
  },
];

export function NewsSection() {
  const featured = newsArticles.find((a) => a.featured);
  const regular = newsArticles.filter((a) => !a.featured);

  return (
    <section id="news" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-heading text-4xl sm:text-5xl text-foreground mb-2">
              Latest News
            </h2>
            <p className="text-muted-foreground">
              Stay up to date with the paddock
            </p>
          </div>
          <a
            href="#all-news"
            className="hidden sm:flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          {featured && (
            <Link href={`/news/${featured.slug}`} className="lg:row-span-2 group">
              <article className="relative h-full bg-background rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors">
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs uppercase tracking-wider">
                    {featured.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span>{featured.date}</span>
                    <span>•</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <h3 className="font-heading text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-muted-foreground">{featured.excerpt}</p>
                </div>
              </article>
            </Link>
          )}

          {/* Regular Articles */}
          <div className="flex flex-col gap-6">
            {regular.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="group flex gap-4 bg-background rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
              >
                <div className="relative w-32 sm:w-40 flex-shrink-0 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-wider text-primary mb-2">
                    {article.category}
                  </span>
                  <h3 className="font-heading text-base sm:text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
