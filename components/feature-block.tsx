import {
  ComponentParameter,
  ComponentProps,
  UniformRichText,
  UniformText,
} from "@uniformdev/next-app-router/component";

interface AssetEntry {
  url?: string;
  title?: string;
  width?: number;
  height?: number;
}

export type FeatureBlockProps = {
  headline: ComponentParameter<string>;
  description: ComponentParameter<string>;
  image: ComponentParameter<Array<AssetEntry>>;
  imagePosition: ComponentParameter<string>;
};

export const FeatureBlockComponent = ({
  parameters: { headline, description, image, imagePosition },
  component,
}: ComponentProps<FeatureBlockProps>) => {
  const imageAssets = image?.value;
  const imageAsset = Array.isArray(imageAssets) ? imageAssets[0] : undefined;
  const position = imagePosition?.value ?? "right";
  const isLeft = position === "left";

  return (
    <section className="w-full border border-neutral-200 rounded-2xl overflow-hidden bg-white">
      <div
        className={`flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6 md:gap-10 p-6 md:p-10`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          {imageAsset?.url ? (
            <img
              src={imageAsset.url}
              alt={imageAsset.title ?? ""}
              width={imageAsset.width ?? undefined}
              height={imageAsset.height ?? undefined}
              className="w-full h-auto rounded-xl object-cover"
            />
          ) : (
            <div className="w-full aspect-video rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-400 text-sm">
              No image selected
            </div>
          )}
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <UniformText
            component={component}
            parameter={headline}
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-neutral-900 text-balance"
            placeholder="Enter headline"
          />
          <UniformRichText
            component={component}
            parameter={description}
            className="text-base sm:text-lg leading-relaxed text-neutral-600"
            placeholder="Enter description text"
          />
        </div>
      </div>
    </section>
  );
};
