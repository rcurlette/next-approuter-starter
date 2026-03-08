export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />
      
      {/* Racing lines pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <span className="inline-block bg-primary/20 text-primary px-4 py-1 text-sm uppercase tracking-widest border border-primary/30">
            2026 Season
          </span>
        </div>
        
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground mb-6 leading-none">
          <span className="block">Where Speed</span>
          <span className="block text-primary">Meets Strategy</span>
        </h1>
        
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          Welcome to Composable GP — the championship where every component matters. 
          Experience the thrill of racing where technology, talent, and teamwork combine for victory.
        </p>

        {/* Featured Car Image */}
        <div className="relative w-full max-w-4xl mx-auto mb-10">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-border bg-[#0f172a]">
            <img
              src="/images/hero-composable-car.jpg"
              alt="The Composable Racing Car - Modular components that assemble into a championship-winning machine"
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f172a] to-transparent p-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                Featured: Composable GP UR-26 — Every Component Matters
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#races"
            className="bg-primary text-primary-foreground px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            View Race Calendar
          </a>
          <a
            href="#drivers"
            className="bg-card text-foreground px-8 py-4 text-sm font-medium uppercase tracking-wider border border-border hover:bg-muted transition-colors"
          >
            Meet the Drivers
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
