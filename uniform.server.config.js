/** @type {import('@uniformdev/canvas-next-rsc/config').UniformServerConfig} */
module.exports = {
  defaultConsent: true,
  canvasCache: {
    type: "no-cache",
  },
  evaluation: {
    personalization: "server",
    testing: "server",
  },
};
