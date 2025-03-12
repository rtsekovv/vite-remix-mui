import { defineConfig } from 'vite'
import {
  vitePlugin as remix,
} from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";
import RemixRouter from 'vite-plugin-remix-router'
import { installGlobals } from "@remix-run/node";

installGlobals()

export default defineConfig({
  build: { manifest: true },
  server: {
    port: 3000,
  },
  root: './',
  plugins: [
    // remixCloudflareDevProxy(),
    remix({
      appDirectory: 'src',
      ignoredRouteFiles: ["**/.*", "**/*.css"],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    RemixRouter(),
    tsconfigPaths(),
    {
      name: "remix-manifest-resolver",
      resolveId(id) {
        if (id === "remix:manifest") {
          return id;
        }
      },
      // Optional: warning is suppressed without this hook
      // Provides an empty object for 'remix:manifest' if HMR triggers, but HMR remains non-functional
      load(id) {
        if (id === "remix:manifest") {
          return "export default {}";
        }
      }
    },
  ],

  optimizeDeps: {
    include: [
      '@remix-run/node',
      '@emotion/cache',
      '@mui/material/styles',
      '@emotion/cache',
    ],
  },
})
