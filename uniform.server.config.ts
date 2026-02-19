import type { UniformServerConfig } from "@uniformdev/next-app-router/config";

const config: UniformServerConfig = {
  defaultConsent: true,
  quirkSerialization: true,
  middlewareRuntimeCache: true,
  playgroundPath: "/uniform/playground",
  context: {
    disableDevTools: true,
  },
};

export default config;
