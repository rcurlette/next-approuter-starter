import {
  ComponentParameter,
  ComponentProps,
  UniformText,
} from "@uniformdev/next-app-router/component";
import { AssetParamValue, LinkParamValue, flattenValues } from "@uniformdev/canvas";

export type BentoBoxItemProps = {
  title: ComponentParameter<string>;
  description: ComponentParameter<string>;
  image: ComponentParameter<AssetParamValue>;
  link: ComponentParameter<LinkParamValue>;
};

export const BentoBoxItemComponent = ({
  parameters: { image, link },
  component,
}: ComponentProps<BentoBoxItemProps>) => {
  const asset = flattenValues(image?.value, { toSingle: true });
  const linkValue = link?.value as LinkParamValue | undefined;

  const content = (
    <div className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg overflow-hidden h-full">
      {asset?.url && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <img
            src={asset.url}
            alt={asset.title ?? ""}
            width={asset.width ?? undefined}
            height={asset.height ?? undefined}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <UniformText
          component={component}
          parameter={component.parameters?.title}
          as="h3"
          className="text-lg font-semibold text-foreground"
          placeholder="Item title"
        />
        <UniformText
          component={component}
          parameter={component.parameters?.description}
          as="p"
          className="text-sm text-muted-foreground leading-relaxed"
          placeholder="Item description"
        />
      </div>
    </div>
  );

  if (linkValue?.path) {
    return (
      <a href={linkValue.path} className="block h-full no-underline">
        {content}
      </a>
    );
  }

  return content;
};
