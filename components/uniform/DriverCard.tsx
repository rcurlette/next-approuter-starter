import {
  ComponentParameter,
  ComponentProps,
  UniformText,
} from "@uniformdev/next-app-router/component";
import { AssetParamValue, flattenValues } from "@uniformdev/canvas";

export type DriverCardProps = {
  name: ComponentParameter<string>;
  team: ComponentParameter<string>;
  number: ComponentParameter<string>;
  points: ComponentParameter<number>;
  wins: ComponentParameter<number>;
  country: ComponentParameter<string>;
  image: ComponentParameter<AssetParamValue>;
  teamColor: ComponentParameter<string>;
  rank: ComponentParameter<number>;
};

export const DriverCard = ({
  parameters: { name, team, number, points, wins, image, teamColor, rank },
  component,
}: ComponentProps<DriverCardProps>) => {
  const driverImage = flattenValues(image?.value, { toSingle: true });
  const color = teamColor?.value || "#dc2626";
  const driverNumber = number?.value || "00";
  const driverRank = rank?.value || 1;
  const driverPoints = points?.value || 0;
  const driverWins = wins?.value || 0;

  return (
    <div className="group relative bg-background rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors">
      {/* Team color accent */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ backgroundColor: color }}
      />

      {/* Driver Image */}
      <div className="relative aspect-[3/4] bg-muted overflow-hidden">
        {driverImage?.url ? (
          <img
            src={driverImage.url}
            alt={name?.value || "Driver"}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <span className="text-muted-foreground">No Image</span>
          </div>
        )}
        {/* Rank badge */}
        <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-2 py-1 text-xs uppercase tracking-wider">
          #{driverRank}
        </div>
        {/* Number */}
        <div className="absolute bottom-3 right-3 font-heading text-5xl text-white/20 group-hover:text-white/40 transition-colors">
          {driverNumber}
        </div>
      </div>

      {/* Driver Info */}
      <div className="p-4">
        <h3 className="font-heading text-lg text-foreground mb-1">
          <UniformText
            component={component}
            parameter={name}
            placeholder="Driver Name"
            as="span"
          />
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          <UniformText
            component={component}
            parameter={team}
            placeholder="Team Name"
            as="span"
          />
        </p>

        <div className="flex items-center justify-between text-sm">
          <div>
            <span className="text-muted-foreground">Points</span>
            <p className="text-foreground font-medium">{driverPoints}</p>
          </div>
          <div className="text-right">
            <span className="text-muted-foreground">Wins</span>
            <p className="text-foreground font-medium">{driverWins}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
