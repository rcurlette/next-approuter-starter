import Link from "next/link";
import {
  ComponentParameter,
  ComponentProps,
  UniformRichText,
  UniformText,
} from "@uniformdev/next-app-router/component";
import { AssetParamValue, LinkParamValue, flattenValues } from "@uniformdev/canvas";

export type HeroSectionProps = {
  seasonLabel: ComponentParameter<string>;
  headingLine1: ComponentParameter<string>;
  headingLine2: ComponentParameter<string>;
  description: ComponentParameter<string>;
  heroImage: ComponentParameter<AssetParamValue>;
  primaryCtaText: ComponentParameter<string>;
  primaryCtaLink: ComponentParameter<LinkParamValue>;
  secondaryCtaText: ComponentParameter<string>;
  secondaryCtaLink: ComponentParameter<LinkParamValue>;
};

export const HeroSection = ({
  parameters: {
    seasonLabel,
    headingLine1,
    headingLine2,
    description,
    heroImage,
    primaryCtaText,
    primaryCtaLink,
    secondaryCtaText,
    secondaryCtaLink,
  },
  component,
}: ComponentProps<HeroSectionProps>) => {
  const image = flattenValues(heroImage?.value, { toSingle: true });
  const primaryLink = primaryCtaLink?.value;
  const secondaryLink = secondaryCtaLink?.value;
  const primaryUrl = primaryLink?.path || (primaryLink as { href?: string })?.href || "#races";
  const secondaryUrl = secondaryLink?.path || (secondaryLink as { href?: string })?.href || "#drivers";

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
          <UniformText
            component={component}
            parameter={seasonLabel}
            placeholder="Season Label"
            className="inline-block bg-primary/20 text-primary px-4 py-1 text-sm uppercase tracking-widest border border-primary/30"
            as="span"
          />
        </div>

        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground mb-6 leading-none">
          <UniformText
            component={component}
            parameter={headingLine1}
            placeholder="Heading Line 1"
            className="block"
            as="span"
          />
          <UniformText
            component={component}
            parameter={headingLine2}
            placeholder="Heading Line 2"
            className="block text-primary"
            as="span"
          />
        </h1>

        <UniformRichText
          component={component}
          parameter={description}
          placeholder="Hero description text"
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10"
        />

        {/* Featured Car Image */}
        {image?.url && (
          <div className="relative w-full max-w-4xl mx-auto mb-10">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-border bg-[#0f172a]">
              <img
                src={image.url}
                alt={image.title || "Hero image"}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f172a] to-transparent p-4">
                <div className="flex items-center justify-center gap-3">
                  <svg viewBox="0 0 40 40" className="w-6 h-6" aria-hidden="true">
                    <path d="M20 4L8 12v16l12 8 12-8V12L20 4z" fill="#4F8FEA" />
                    <path d="M20 4L8 12l12 8 12-8-12-8z" fill="#7CB3F0" />
                    <path d="M20 20l12-8v16l-12 8V20z" fill="#E53935" />
                  </svg>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Uniform Racing UR-26 — Composable DXP Powered
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryUrl}
            className="bg-primary text-primary-foreground px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            <UniformText
              component={component}
              parameter={primaryCtaText}
              placeholder="Primary CTA"
              as="span"
            />
          </Link>
          <Link
            href={secondaryUrl}
            className="bg-card text-foreground px-8 py-4 text-sm font-medium uppercase tracking-wider border border-border hover:bg-muted transition-colors"
          >
            <UniformText
              component={component}
              parameter={secondaryCtaText}
              placeholder="Secondary CTA"
              as="span"
            />
          </Link>
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
};
