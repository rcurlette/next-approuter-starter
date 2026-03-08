import Link from "next/link";
import {
  ComponentParameter,
  ComponentProps,
  UniformText,
} from "@uniformdev/next-app-router/component";
import { LinkParamValue } from "@uniformdev/canvas";

export type NavigationLinkProps = {
  label: ComponentParameter<string>;
  href: ComponentParameter<LinkParamValue>;
};

export const NavigationLink = ({
  parameters: { label, href },
  component,
}: ComponentProps<NavigationLinkProps>) => {
  const linkValue = href?.value;
  const url = linkValue?.path || (linkValue as { href?: string })?.href || "#";

  return (
    <Link
      href={url}
      className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider"
    >
      <UniformText
        component={component}
        parameter={label}
        placeholder="Link"
        as="span"
      />
    </Link>
  );
};
