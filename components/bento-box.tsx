import {
  ComponentParameter,
  ComponentProps,
  UniformSlot,
  UniformText,
} from "@uniformdev/next-app-router/component";

export type BentoBoxProps = {
  title: ComponentParameter<string>;
  description: ComponentParameter<string>;
};

export type BentoBoxSlots = "items";

export const BentoBoxComponent = ({
  slots,
  component,
}: ComponentProps<BentoBoxProps, BentoBoxSlots>) => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <UniformText
            component={component}
            parameter={component.parameters?.title}
            as="h2"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            placeholder="Section title"
          />
          <UniformText
            component={component}
            parameter={component.parameters?.description}
            as="p"
            className="mt-3 text-lg text-muted-foreground leading-relaxed"
            placeholder="Section description"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <UniformSlot slot={slots.items} />
        </div>
      </div>
    </section>
  );
};
