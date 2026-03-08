import {
  ComponentParameter,
  ComponentProps,
  UniformText,
} from "@uniformdev/next-app-router/component";
import { AssetParamValue, flattenValues } from "@uniformdev/canvas";

export type RaceCardProps = {
  name: ComponentParameter<string>;
  round: ComponentParameter<number>;
  location: ComponentParameter<string>;
  circuit: ComponentParameter<string>;
  date: ComponentParameter<string>;
  status: ComponentParameter<string>;
  winner: ComponentParameter<string>;
  image: ComponentParameter<AssetParamValue>;
};

export const RaceCard = ({
  parameters: { name, round, location, circuit, date, status, winner, image },
  component,
}: ComponentProps<RaceCardProps>) => {
  const raceImage = flattenValues(image?.value, { toSingle: true });
  const raceRound = round?.value || 1;
  const isCompleted = status?.value === "completed";
  const winnerName = winner?.value;

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all">
      {/* Background Image */}
      <div className="relative h-48 bg-gradient-to-br from-muted to-card overflow-hidden">
        {raceImage?.url ? (
          <img
            src={raceImage.url}
            alt={circuit?.value || "Circuit"}
            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-muted-foreground">No Image</span>
          </div>
        )}

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
          {String(raceRound).padStart(2, "0")}
        </div>
      </div>

      {/* Race Info */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-primary mb-2">
          <UniformText
            component={component}
            parameter={date}
            placeholder="Date"
            as="span"
          />
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">Round {raceRound}</span>
        </div>

        <h3 className="font-heading text-xl text-foreground mb-2">
          <UniformText
            component={component}
            parameter={name}
            placeholder="Race Name"
            as="span"
          />
        </h3>

        <p className="text-sm text-muted-foreground mb-1">
          <UniformText
            component={component}
            parameter={location}
            placeholder="Location"
            as="span"
          />
        </p>
        <p className="text-xs text-muted-foreground/70">
          <UniformText
            component={component}
            parameter={circuit}
            placeholder="Circuit"
            as="span"
          />
        </p>

        {isCompleted && winnerName && (
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-accent-foreground"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Winner</p>
                <p className="text-sm text-foreground font-medium">{winnerName}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
