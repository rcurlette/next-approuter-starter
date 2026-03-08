import {
  ComponentParameter,
  ComponentProps,
  UniformText,
} from "@uniformdev/next-app-router/component";
import { AssetParamValue, flattenValues } from "@uniformdev/canvas";

export type TeamRowProps = {
  name: ComponentParameter<string>;
  color: ComponentParameter<string>;
  points: ComponentParameter<number>;
  wins: ComponentParameter<number>;
  position: ComponentParameter<number>;
  logo: ComponentParameter<AssetParamValue>;
  drivers: ComponentParameter<string>;
};

export const TeamRow = ({
  parameters: { name, color, points, wins, position, drivers },
  component,
}: ComponentProps<TeamRowProps>) => {
  const teamColor = color?.value || "#dc2626";
  const teamPosition = position?.value || 1;
  const teamPoints = points?.value || 0;
  const teamWins = wins?.value || 0;
  const teamDrivers = drivers?.value || "";

  return (
    <tr className="border-b border-border/50 hover:bg-card/50 transition-colors group">
      <td className="py-5 px-4">
        <span className="font-heading text-2xl text-foreground">
          {teamPosition}
        </span>
      </td>
      <td className="py-5 px-4">
        <div className="flex items-center gap-3">
          <div
            className="w-1 h-10 rounded-full"
            style={{ backgroundColor: teamColor }}
          />
          <span className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">
            <UniformText
              component={component}
              parameter={name}
              placeholder="Team Name"
              as="span"
            />
          </span>
        </div>
      </td>
      <td className="py-5 px-4 hidden sm:table-cell">
        <div className="text-sm text-muted-foreground">{teamDrivers}</div>
      </td>
      <td className="py-5 px-4 text-center">
        <span className="text-foreground">{teamWins}</span>
      </td>
      <td className="py-5 px-4 text-right">
        <span className="font-heading text-2xl text-foreground">{teamPoints}</span>
      </td>
    </tr>
  );
};

// Helper component for points distribution bar
export const TeamPointsBar = ({
  name,
  points,
  maxPoints,
  color,
}: {
  name: string;
  points: number;
  maxPoints: number;
  color: string;
}) => {
  const percentage = maxPoints > 0 ? (points / maxPoints) * 100 : 0;

  return (
    <div className="flex items-center gap-4">
      <div className="w-24 sm:w-32 text-sm text-muted-foreground truncate">
        {name}
      </div>
      <div className="flex-1 h-8 bg-card rounded overflow-hidden">
        <div
          className="h-full flex items-center justify-end px-3 transition-all duration-1000"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        >
          <span className="text-sm font-medium text-white">{points}</span>
        </div>
      </div>
    </div>
  );
};
