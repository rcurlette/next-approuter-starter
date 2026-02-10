/** @type {import('@uniformdev/next-app-router/config').UniformServerConfig} */
module.exports = {
  defaultConsent: true,
  // Disable cache to avoid warnings in development
  // For production, implement webhook-based cache clearing instead
  canvasCache: { type: "no-cache" },
};
