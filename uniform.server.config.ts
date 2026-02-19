import type { UniformServerConfig } from "@uniformdev/next-app-router/config";

const config: UniformServerConfig = {
  defaultConsent: true,
  quirkSerialization: true,
  middlewareRuntimeCache: false,
  playgroundPath: "/uniform/playground",
};

export default config;
