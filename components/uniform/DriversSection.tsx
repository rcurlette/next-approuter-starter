import Link from "next/link";
import {
  ComponentParameter,
  ComponentProps,
  UniformSlot,
  UniformText,
} from "@uniformdev/next-app-router/component";
import { LinkParamValue } from "@uniformdev/canvas";

export type DriversSectionProps = {
  title: ComponentParameter<string>;
  subtitle: ComponentParameter<string>;
  viewAllText: ComponentParameter<string>;
  viewAllLink: ComponentParameter<LinkParamValue>;
};

export type DriversSectionSlots = "drivers";

export const DriversSection = ({
  parameters: { title, subtitle, viewAllText, viewAllLink },
  slots,
  component,
}: ComponentProps<DriversSectionProps, DriversSectionSlots>) => {
  const linkValue = viewAllLink?.value;
  const url = linkValue?.path || linkValue?.href || "#standings";

  return (
    <section id="drivers" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
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
          <Link
            href={url}
            className="hidden sm:flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            <UniformText
              component={component}
              parameter={viewAllText}
              placeholder="View All"
              as="span"
            />
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Drivers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <UniformSlot slot={slots.drivers} />
        </div>
      </div>
    </section>
  );
};
