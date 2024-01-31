import { env } from './src/env.js'

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js')

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: new URL(env.API_URL).protocol.slice(0, -1),
        hostname: new URL(env.API_URL).hostname,
      },
    ],
  },
}

export default config
