import { withUniformConfig } from "@uniformdev/next-app-router/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default withUniformConfig(nextConfig, {
  // Suppress runtime cache warning in development/preview environments
  // The SDK will fall back to in-memory cache when runtime cache is unavailable
  silent: true,
});
