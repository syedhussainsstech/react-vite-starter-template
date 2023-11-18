import fs from "fs";
import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
import NodeGlobalsPolyfillPlugin from "@esbuild-plugins/node-globals-polyfill";
import dotenv from 'dotenv';
import replace from '@rollup/plugin-replace';

// Get the VITE_ENV_FILE environment variable (default to .env)
const envFile = process.env.VITE_ENV_FILE || '.env';
// Load the environment variables from the specified .env file
const env = dotenv.config({
  path: envFile,
}).parsed;

export default () => {
  return defineConfig({
    plugins: [
      react(),
      replace({
        // Replace process.env references with import.meta.env in the output
        'process.env': JSON.stringify(env),
        preventAssignment: true,
      }),
    ],
    define: {
      global: "globalThis",
    },
    server: {
      port: 3000,
      proxy: "http://localhost:3000",
      cors: {
        // origin: ['http://localhost:3000', 'http://localhost:3000'],
        origin: ["http://localhost:3000"],
        methods: ["GET", "PATCH", "PUT", "POST", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          includePaths: ["node_modules", "./src/assets"],
        },
      },
      postcss: {
        plugins: [require("postcss-rtl")()],
      },
    },
    resolve: {
      alias: [
        {
          find: /^~.+/,
          replacement: (val) => {
            return val.replace(/^~/, "");
          },
        },
        { find: "stream", replacement: "stream-browserify" },
        { find: "crypto", replacement: "crypto-browserify" },
        { find: "@src", replacement: path.resolve(__dirname, "src") },
        { find: "@store", replacement: path.resolve(__dirname, "src/redux") },
        {
          find: "@configs",
          replacement: path.resolve(__dirname, "src/configs"),
        },
        {
          find: "url",
          replacement: "rollup-plugin-node-polyfills/polyfills/url",
        },
        {
          find: "@styles",
          replacement: path.resolve(__dirname, "src/@core/scss"),
        },
        {
          find: "util",
          replacement: "rollup-plugin-node-polyfills/polyfills/util",
        },
        {
          find: "zlib",
          replacement: "rollup-plugin-node-polyfills/polyfills/zlib",
        },
        {
          find: "@utils",
          replacement: path.resolve(__dirname, "src/utility/Utils"),
        },
        {
          find: "@hooks",
          replacement: path.resolve(__dirname, "src/utility/hooks"),
        },
        {
          find: "@icons",
          replacement: path.resolve(__dirname, "src/utility/icons"),
        },
        { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
        {
          find: "@layouts",
          replacement: path.resolve(__dirname, "src/@core/layouts"),
        },
        {
          find: "assert",
          replacement: "rollup-plugin-node-polyfills/polyfills/assert",
        },
        {
          find: "buffer",
          replacement: "rollup-plugin-node-polyfills/polyfills/buffer-es6",
        },
        {
          find: "process",
          replacement: "rollup-plugin-node-polyfills/polyfills/process-es6",
        },
        {
          find: "@components",
          replacement: path.resolve(__dirname, "src/@core/components"),
        },
        {
          find: "@functions",
          replacement: path.resolve(__dirname, "src/@core/functions"),
        },
      ],
    },
    esbuild: {
      loader: "jsx",
      include: /.\/src\/.*\.js?$/,
      exclude: [],
      jsx: "automatic",
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          ".js": "jsx",
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            buffer: true,
            process: true,
          }),
          {
            name: "load-js-files-as-jsx",
            setup(build) {
              build.onLoad({ filter: /src\\.*\.js$/ }, async (args) => ({
                loader: "jsx",
                contents: await fs.readFileSync(args.path, "utf8"),
              }));
            },
          },
        ],
      },
    },
    build: {
      rollupOptions: {
        plugins: [rollupNodePolyFill()],
      },
    },
  });
};
