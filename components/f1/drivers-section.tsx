const drivers = [
  {
    name: "Max Composable",
    team: "Uniform Racing",
    number: "01",
    points: 312,
    wins: 8,
    country: "Netherlands",
    image: "/placeholder.svg?height=400&width=300",
    teamColor: "#dc2626",
  },
  {
    name: "Lewis Headless",
    team: "Stack Solutions",
    number: "44",
    points: 287,
    wins: 6,
    country: "United Kingdom",
    image: "/placeholder.svg?height=400&width=300",
    teamColor: "#0ea5e9",
  },
  {
    name: "Charles Content",
    team: "Modular Motorsport",
    number: "16",
    points: 245,
    wins: 4,
    country: "Monaco",
    image: "/placeholder.svg?height=400&width=300",
    teamColor: "#f59e0b",
  },
  {
    name: "Carlos API",
    team: "Modular Motorsport",
    number: "55",
    points: 221,
    wins: 3,
    country: "Spain",
    image: "/placeholder.svg?height=400&width=300",
    teamColor: "#f59e0b",
  },
  {
    name: "Lando Experience",
    team: "Component Racing",
    number: "04",
    points: 198,
    wins: 2,
    country: "United Kingdom",
    image: "/placeholder.svg?height=400&width=300",
    teamColor: "#f97316",
  },
];

export function DriversSection() {
  return (
    <section id="drivers" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-heading text-4xl sm:text-5xl text-foreground mb-2">
              Drivers of the Year
            </h2>
            <p className="text-muted-foreground">
              Meet the champions of composable racing
            </p>
          </div>
          <a
            href="#standings"
            className="hidden sm:flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            Full Season Rankings
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Drivers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {drivers.map((driver, index) => (
            <DriverCard key={driver.number} driver={driver} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Driver {
  name: string;
  team: string;
  number: string;
  points: number;
  wins: number;
  country: string;
  image: string;
  teamColor: string;
}

function DriverCard({ driver, rank }: { driver: Driver; rank: number }) {
  return (
    <div className="group relative bg-background rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors">
      {/* Team color accent */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ backgroundColor: driver.teamColor }}
      />
      
      {/* Driver Image */}
      <div className="relative aspect-[3/4] bg-muted overflow-hidden">
        <img
          src={driver.image}
          alt={driver.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        {/* Rank badge */}
        <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-2 py-1 text-xs uppercase tracking-wider">
          #{rank}
        </div>
        {/* Number */}
        <div className="absolute bottom-3 right-3 font-heading text-5xl text-white/20 group-hover:text-white/40 transition-colors">
          {driver.number}
        </div>
      </div>

      {/* Driver Info */}
      <div className="p-4">
        <h3 className="font-heading text-lg text-foreground mb-1">
          {driver.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{driver.team}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div>
            <span className="text-muted-foreground">Points</span>
            <p className="text-foreground font-medium">{driver.points}</p>
          </div>
          <div className="text-right">
            <span className="text-muted-foreground">Wins</span>
            <p className="text-foreground font-medium">{driver.wins}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
