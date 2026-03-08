import {
  ComponentParameter,
  ComponentProps,
  UniformSlot,
  UniformText,
} from "@uniformdev/next-app-router/component";

export type FooterLinkGroupProps = {
  title: ComponentParameter<string>;
};

export type FooterLinkGroupSlots = "links";

export const FooterLinkGroup = ({
  parameters: { title },
  slots,
  component,
}: ComponentProps<FooterLinkGroupProps, FooterLinkGroupSlots>) => {
  return (
    <div>
      <h4 className="font-heading text-sm uppercase tracking-wider text-foreground mb-4">
        <UniformText
          component={component}
          parameter={title}
          placeholder="Group Title"
          as="span"
        />
      </h4>
      <ul className="space-y-2">
        <UniformSlot slot={slots.links} />
      </ul>
    </div>
  );
};
