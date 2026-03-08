const races = [
  {
    round: 1,
    name: "Component Grand Prix",
    location: "Melbourne, Australia",
    circuit: "Albert Park Circuit",
    date: "MAR 14-16",
    status: "completed",
    winner: "Max Composable",
  },
  {
    round: 2,
    name: "API Arabia Grand Prix",
    location: "Jeddah, Saudi Arabia",
    circuit: "Jeddah Corniche Circuit",
    date: "MAR 21-23",
    status: "completed",
    winner: "Lewis Headless",
  },
  {
    round: 3,
    name: "Headless Grand Prix",
    location: "Suzuka, Japan",
    circuit: "Suzuka International Racing Course",
    date: "APR 4-6",
    status: "upcoming",
  },
  {
    round: 4,
    name: "Modular Grand Prix",
    location: "Shanghai, China",
    circuit: "Shanghai International Circuit",
    date: "APR 18-20",
    status: "upcoming",
  },
  {
    round: 5,
    name: "Stack Grand Prix",
    location: "Miami, USA",
    circuit: "Miami International Autodrome",
    date: "MAY 2-4",
    status: "upcoming",
  },
];

export function RaceSchedule() {
  return (
    <section id="races" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-heading text-4xl sm:text-5xl text-foreground mb-2">
              2026 Race Calendar
            </h2>
            <p className="text-muted-foreground">
              Follow every twist and turn of the season
            </p>
          </div>
          <a
            href="#full-calendar"
            className="hidden sm:flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Races Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {races.map((race) => (
            <RaceCard key={race.round} race={race} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Race {
  round: number;
  name: string;
  location: string;
  circuit: string;
  date: string;
  status: string;
  winner?: string;
}

function RaceCard({ race }: { race: Race }) {
  const isCompleted = race.status === "completed";
  
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all">
      {/* Background Image */}
      <div className="relative h-48 bg-gradient-to-br from-muted to-card overflow-hidden">
        <img
          src={`/placeholder.svg?height=200&width=400`}
          alt={race.circuit}
          className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
        />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 text-xs uppercase tracking-wider rounded-full ${
              isCompleted
                ? "bg-muted text-muted-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {isCompleted ? "Completed" : "Upcoming"}
          </span>
        </div>

        {/* Round Number */}
        <div className="absolute top-4 right-4 font-heading text-6xl text-white/10">
          {String(race.round).padStart(2, "0")}
        </div>
      </div>

      {/* Race Info */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-primary mb-2">
          <span>{race.date}</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">Round {race.round}</span>
        </div>
        
        <h3 className="font-heading text-xl text-foreground mb-2">
          {race.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-1">{race.location}</p>
        <p className="text-xs text-muted-foreground/70">{race.circuit}</p>

        {isCompleted && race.winner && (
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Winner</p>
                <p className="text-sm text-foreground font-medium">{race.winner}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
