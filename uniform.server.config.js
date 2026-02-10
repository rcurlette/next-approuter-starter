module.exports = {
  defaultConsent: true,
  // Use in-memory cache for local development and edge runtime compatibility
  // For production, consider implementing a webhook-based cache clearing strategy
  canvasCache: { type: "in-memory" },
};
