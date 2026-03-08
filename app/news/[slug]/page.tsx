import Link from "next/link";
import { notFound } from "next/navigation";

const articles: Record<string, {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  authorRole: string;
  content: string[];
}> = {
  "uniform-racing-composable-aero-package": {
    id: 1,
    title: "Uniform Racing Unveils Revolutionary Composable Aero Package",
    category: "Technology",
    date: "Mar 8, 2026",
    readTime: "4 min read",
    image: "/images/news-aero.jpg",
    author: "Sarah Component",
    authorRole: "Technical Editor",
    content: [
      "In a move that could reshape the future of Formula 1 aerodynamics, Uniform Racing has unveiled their groundbreaking Composable Aero Package ahead of the Component Grand Prix in Melbourne. The revolutionary front wing design introduces modular sections that can be individually swapped during pit stops, giving engineers unprecedented flexibility to adapt to changing track conditions.",
      "\"We've been working on this concept for over two years,\" explains Technical Director Marcus Schema. \"The traditional approach treats the front wing as a single unit. Our composable design breaks it into five distinct modules—each optimized for different scenarios. Need more downforce in sector two? Swap in the high-load endplate. Struggling with tire degradation? Install the low-drag center section.\"",
      "The technology draws inspiration from modern software architecture principles. Just as composable digital experience platforms allow businesses to swap components without rebuilding entire systems, Uniform Racing's aero package enables real-time aerodynamic customization without the time penalty of traditional wing changes.",
      "The FIA approved the design after extensive safety testing, though some rival teams have expressed concerns. \"It's innovative, I'll give them that,\" said Stack Solutions team principal James Headless. \"But we'll be watching closely to ensure it complies with regulations. The spirit of the rules is one thing; finding loopholes is another.\"",
      "Initial wind tunnel data suggests the composable wing could provide a 0.3-second per lap advantage in optimal conditions. More importantly, it allows teams to fine-tune setups between qualifying and the race—a strategic element that could prove decisive in tight championship battles.",
      "Uniform Racing's lead driver, Max Composable, has been instrumental in developing the system. \"As a driver, you feel every small change in the car,\" he explains. \"This gives us options we've never had before. If the track evolves differently than expected, we can adapt. It's like having multiple cars in one.\"",
      "The first competitive test comes this weekend at Albert Park. All eyes will be on the Uniform garage as the pit crew demonstrates whether the modular system can be executed within the tight time constraints of a Formula 1 pit stop. If successful, expect other teams to fast-track their own composable solutions for the 2027 season."
    ]
  },
  "max-composable-takes-pole": {
    id: 2,
    title: "Max Composable Takes Pole in Stunning Qualifying Session",
    category: "Race Weekend",
    date: "Mar 7, 2026",
    readTime: "3 min read",
    image: "/images/news-qualifying.jpg",
    author: "David Integration",
    authorRole: "Race Correspondent",
    content: [
      "Championship leader Max Composable delivered a masterclass in qualifying at the Albert Park Circuit, securing pole position with a lap time that left his rivals stunned. The Uniform Racing driver's 1:17.234 was over half a second faster than second-placed Lewis Headless, sending a clear message about his title intentions.",
      "\"The car was absolutely on rails today,\" beamed Composable after climbing from his cockpit. \"Everything just clicked. The team gave me a perfect setup, and the new aero package is working even better than we hoped. When you have confidence in the car, you can push to the absolute limit.\"",
      "The session was not without drama. In Q2, Charles Content's Modular Motorsport machine suffered a sudden loss of power, forcing him to abandon his lap and coast back to the pits. The Monaco driver will start from 11th, a significant blow to his championship hopes.",
      "Lewis Headless produced his best qualifying performance of the season to claim the front row for Stack Solutions. \"Half a second is a lot, but we'll take second,\" he said pragmatically. \"Race pace is a different story. These new tire compounds could shake things up tomorrow.\"",
      "The battle for third was intense, with Lando Experience edging out Carlos API by just 0.043 seconds. Component Racing's upgrade package appears to have closed the gap to the frontrunners, setting up what promises to be an enthralling race.",
      "Notably, this marks the first time the top five have been covered by less than 0.8 seconds this season, suggesting the new regulations are achieving their goal of closer competition. Team principals up and down the pit lane are predicting a strategy-heavy race with multiple pit stop variations.",
      "The Composable GP gets underway at 15:00 local time on Sunday. With clear skies forecast and track temperatures expected to exceed 40°C, tire management will be crucial. Max Composable starts as the clear favorite, but in Formula 1, nothing is ever certain until the checkered flag falls."
    ]
  },
  "stack-solutions-technical-partnership": {
    id: 3,
    title: "Stack Solutions Announces Major Technical Partnership",
    category: "Teams",
    date: "Mar 6, 2026",
    readTime: "2 min read",
    image: "/images/news-partnership.jpg",
    author: "Elena Frontend",
    authorRole: "Business Editor",
    content: [
      "Stack Solutions has announced a landmark multi-year technical partnership with ContentLayer, a leading headless CMS provider, in a deal that signals the increasing convergence of digital technology and motorsport engineering.",
      "The partnership will see ContentLayer's advanced data management systems integrated throughout Stack Solutions' operations, from real-time telemetry analysis to fan engagement platforms. Financial terms were not disclosed, but sources suggest the deal is worth upwards of $50 million over four years.",
      "\"Modern Formula 1 is as much about data as it is about driving,\" said Stack Solutions CEO Amanda API at the announcement ceremony. \"We generate terabytes of information every race weekend. ContentLayer's headless architecture gives us the flexibility to access, analyze, and act on that data faster than ever before.\"",
      "The partnership extends beyond the race track. Stack Solutions will leverage ContentLayer's platform to deliver personalized content experiences to their 15 million global fans. Dynamic content delivery, real-time race updates, and interactive features will be powered by the new system.",
      "For ContentLayer, the deal represents a major entry into sports technology. \"Formula 1 teams are solving some of the most complex real-time data challenges in any industry,\" explained ContentLayer CTO James Module. \"Working with Stack Solutions will push our technology to new limits and accelerate innovations that benefit all our customers.\"",
      "Industry analysts see the partnership as part of a broader trend. Teams are increasingly viewing technology partnerships not just as sponsorship deals, but as genuine competitive advantages. The data processing capabilities that help win races are directly applicable to business operations.",
      "The integration begins immediately, with full deployment expected by the European racing season. Stack Solutions hopes the enhanced data capabilities will help close the gap to championship leaders Uniform Racing."
    ]
  },
  "component-racing-factory-tour": {
    id: 4,
    title: "Behind the Scenes: How Component Racing Builds Their Cars",
    category: "Features",
    date: "Mar 5, 2026",
    readTime: "6 min read",
    image: "/images/news-factory.jpg",
    author: "Michael Render",
    authorRole: "Features Writer",
    content: [
      "The Component Racing Technology Centre sits at the end of an unassuming industrial road in the English Midlands. From the outside, you'd never guess that behind these walls, 850 engineers are building machines capable of reaching 230 mph. But step inside, and you enter a world where precision is measured in microns and innovation happens daily.",
      "\"Welcome to our factory,\" grins Technical Director Sofia Slot, leading me through airport-style security. \"What you'll see today represents about 800,000 engineering hours of work. Every car we produce is essentially a rolling laboratory.\"",
      "The tour begins in the design suite, where rows of engineers work on oversized monitors displaying CAD models of components that won't see a race track for another eighteen months. \"We're already designing the 2028 car,\" Sofia explains. \"In F1, you're always living in the future.\"",
      "The composites department is where carbon fiber dreams become reality. Vast autoclaves—industrial ovens the size of shipping containers—cure the carbon fiber layers into impossibly strong yet featherlight structures. A single chassis takes three weeks to manufacture and uses over 10,000 individual pieces of carbon fiber, each placed by hand with surgical precision.",
      "\"The human touch still matters,\" says composite technician Ahmed Layer, who has worked at Component Racing for fifteen years. \"Machines can cut the pieces, but understanding how carbon fiber behaves under stress—that's experience you can't automate.\"",
      "The machine shop operates 24/7, CNC mills carving titanium and aluminum into suspension components, gearbox casings, and the thousand other bespoke parts that make an F1 car. Some pieces take 40 hours to machine from a single block of metal, with tolerances tighter than a human hair.",
      "Perhaps most impressive is the assembly area, where two cars take shape simultaneously on elevated platforms. Every bolt is torqued to precise specifications. Every wire is routed according to detailed diagrams. Assembling a complete car from components takes approximately two weeks, but the real work happens in the months of design and manufacturing that precede it.",
      "\"People ask why F1 is so expensive,\" Sofia reflects as we conclude the tour. \"Walk through this building and you understand. Every gram has been considered. Every component has been optimized. We're not just building a car—we're building the fastest car we possibly can, within the rules, using every resource available. That pursuit of perfection is what Formula 1 is all about.\"",
      "Component Racing's 2026 challenger rolls out next month. Based on what I've seen today, their rivals should be worried."
    ]
  }
};

const slugMap: Record<number, string> = {
  1: "uniform-racing-composable-aero-package",
  2: "max-composable-takes-pole",
  3: "stack-solutions-technical-partnership",
  4: "component-racing-factory-tour"
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  // Get related articles (excluding current)
  const relatedSlugs = Object.keys(articles).filter(s => s !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="w-8 h-8" aria-hidden="true">
                <path d="M20 4L8 12v16l12 8 12-8V12L20 4z" fill="#4F8FEA"/>
                <path d="M20 4L8 12l12 8 12-8-12-8z" fill="#7CB3F0"/>
                <path d="M20 20l12-8v16l-12 8V20z" fill="#E53935"/>
              </svg>
              <span className="font-heading text-lg tracking-wide text-foreground">
                COMPOSABLE GP
              </span>
            </Link>
            <Link 
              href="/#news" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to News
            </Link>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="pt-24 pb-16">
        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 md:h-96 mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta */}
          <div className="mb-6">
            <span className="inline-block bg-primary/20 text-primary px-3 py-1 text-xs uppercase tracking-wider mb-4">
              {article.category}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs font-medium">{article.author.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <p className="text-foreground">{article.author}</p>
                  <p className="text-xs">{article.authorRole}</p>
                </div>
              </div>
              <span className="hidden sm:inline">|</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-foreground/90 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Share this article</p>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors" aria-label="Share on X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors" aria-label="Share on Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors" aria-label="Copy link">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="font-heading text-2xl text-foreground mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedSlugs.map((relatedSlug) => {
                const related = articles[relatedSlug];
                return (
                  <Link
                    key={relatedSlug}
                    href={`/news/${relatedSlug}`}
                    className="group block bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs uppercase tracking-wider text-primary">
                        {related.category}
                      </span>
                      <h3 className="font-heading text-base text-foreground mt-1 group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            2026 Composable GP. A tribute to composable architecture.
          </p>
        </div>
      </footer>
    </div>
  );
}
