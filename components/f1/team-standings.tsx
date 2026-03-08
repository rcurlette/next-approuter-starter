const teams = [
  {
    position: 1,
    name: "Uniform Racing",
    points: 533,
    color: "#dc2626",
    drivers: ["Max Composable", "Sergio Slot"],
    wins: 10,
  },
  {
    position: 2,
    name: "Stack Solutions",
    points: 487,
    color: "#0ea5e9",
    drivers: ["Lewis Headless", "George Schema"],
    wins: 7,
  },
  {
    position: 3,
    name: "Modular Motorsport",
    points: 466,
    color: "#f59e0b",
    drivers: ["Charles Content", "Carlos API"],
    wins: 7,
  },
  {
    position: 4,
    name: "Component Racing",
    points: 312,
    color: "#f97316",
    drivers: ["Lando Experience", "Oscar Widget"],
    wins: 2,
  },
  {
    position: 5,
    name: "Headless Engineering",
    points: 256,
    color: "#22c55e",
    drivers: ["Fernando Integration", "Lance Pipeline"],
    wins: 1,
  },
];

export function TeamStandings() {
  return (
    <section id="teams" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl text-foreground mb-2">
            Constructor Standings
          </h2>
          <p className="text-muted-foreground">
            The battle for composable supremacy
          </p>
        </div>

        {/* Standings Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-muted-foreground font-medium">
                  Pos
                </th>
                <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-muted-foreground font-medium">
                  Team
                </th>
                <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-muted-foreground font-medium hidden sm:table-cell">
                  Drivers
                </th>
                <th className="text-center py-4 px-4 text-sm uppercase tracking-wider text-muted-foreground font-medium">
                  Wins
                </th>
                <th className="text-right py-4 px-4 text-sm uppercase tracking-wider text-muted-foreground font-medium">
                  Points
                </th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr
                  key={team.name}
                  className="border-b border-border/50 hover:bg-card/50 transition-colors group"
                >
                  <td className="py-5 px-4">
                    <span className="font-heading text-2xl text-foreground">
                      {team.position}
                    </span>
                  </td>
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-1 h-10 rounded-full"
                        style={{ backgroundColor: team.color }}
                      />
                      <span className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">
                        {team.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-5 px-4 hidden sm:table-cell">
                    <div className="text-sm text-muted-foreground">
                      {team.drivers.join(" / ")}
                    </div>
                  </td>
                  <td className="py-5 px-4 text-center">
                    <span className="text-foreground">{team.wins}</span>
                  </td>
                  <td className="py-5 px-4 text-right">
                    <span className="font-heading text-2xl text-foreground">
                      {team.points}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Progress bars for visual comparison */}
        <div className="mt-12 space-y-4">
          <h3 className="font-heading text-xl text-foreground mb-6">
            Points Distribution
          </h3>
          {teams.map((team) => {
            const maxPoints = teams[0].points;
            const percentage = (team.points / maxPoints) * 100;
            
            return (
              <div key={team.name} className="flex items-center gap-4">
                <div className="w-24 sm:w-32 text-sm text-muted-foreground truncate">
                  {team.name}
                </div>
                <div className="flex-1 h-8 bg-card rounded overflow-hidden">
                  <div
                    className="h-full flex items-center justify-end px-3 transition-all duration-1000"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: team.color,
                    }}
                  >
                    <span className="text-sm font-medium text-white">
                      {team.points}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
