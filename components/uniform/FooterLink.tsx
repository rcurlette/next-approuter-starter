import Link from "next/link";
import {
  ComponentParameter,
  ComponentProps,
  UniformText,
} from "@uniformdev/next-app-router/component";
import { LinkParamValue } from "@uniformdev/canvas";

export type FooterLinkProps = {
  label: ComponentParameter<string>;
  href: ComponentParameter<LinkParamValue>;
};

export const FooterLink = ({
  parameters: { label, href },
  component,
}: ComponentProps<FooterLinkProps>) => {
  const linkValue = href?.value;
  const url = linkValue?.path || linkValue?.href || "#";

  return (
    <li>
      <Link
        href={url}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <UniformText
          component={component}
          parameter={label}
          placeholder="Link"
          as="span"
        />
      </Link>
    </li>
  );
};
