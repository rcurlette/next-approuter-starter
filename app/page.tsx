import {
  UniformComposition,
  resolveRouteFromPath,
} from "@uniformdev/next-app-router";
import { resolveComponent } from "@/components/resolveComponent";

export default async function HomePage() {
  return (
    <UniformComposition
      path="/"
      resolveRoute={resolveRouteFromPath}
      resolveComponent={resolveComponent}
    />
  );
}
