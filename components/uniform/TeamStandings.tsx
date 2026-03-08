import {
  ComponentParameter,
  ComponentProps,
  UniformSlot,
  UniformText,
} from "@uniformdev/next-app-router/component";

export type TeamStandingsProps = {
  title: ComponentParameter<string>;
  subtitle: ComponentParameter<string>;
  showPointsDistribution: ComponentParameter<boolean>;
};

export type TeamStandingsSlots = "teams";

export const TeamStandings = ({
  parameters: { title, subtitle, showPointsDistribution },
  slots,
  component,
}: ComponentProps<TeamStandingsProps, TeamStandingsSlots>) => {
  return (
    <section id="teams" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl text-foreground mb-2">
            <UniformText
              component={component}
              parameter={title}
              placeholder="Section Title"
              as="span"
            />
          </h2>
          <p className="text-muted-foreground">
            <UniformText
              component={component}
              parameter={subtitle}
              placeholder="Section subtitle"
              as="span"
            />
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
              <UniformSlot slot={slots.teams} />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
