import {
  UniformComposition,
  UniformPageParameters,
  resolveRouteFromPath,
} from "@uniformdev/next-app-router";
import { resolveComponent } from "@/components/resolveComponent";
import { notFound } from "next/navigation";

// Enable ISR: pages are generated on first visit and cached
export const generateStaticParams = async () => {
  return [];
};

export default async function UniformPage(props: UniformPageParameters) {
  const { slug } = await props.params;
  const path = "/" + (slug?.join("/") || "");

  try {
    return (
      <main className="min-h-screen bg-background">
        <UniformComposition
          path={path}
          resolveRoute={resolveRouteFromPath}
          resolveComponent={resolveComponent}
        />
      </main>
    );
  } catch (error) {
    console.error("Error loading composition for path:", path, error);
    notFound();
  }
}
