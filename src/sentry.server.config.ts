// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "{{sentry_dsn}}",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0,
  autoSessionTracking: false,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  // ignoreErrors: SENTRY_IGNORE_ERRORS,
  // denyUrls: SENTRY_DENY_URLS,
  release: process.env.NEXT_PUBLIC_VERSION,
});
