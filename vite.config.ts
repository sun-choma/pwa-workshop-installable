import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  root: "./",
  build: {
    outDir: "./build",
    emptyOutDir: true,
  },
  plugins: [
    react(),
    /** Plugin for serving/building service worker from  sw.ts file
     *  Extends args from WorkboxWebpackPlugin and provides additional settings */
    VitePWA({
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.ts",
      injectRegister: false,
      injectManifest: {
        injectionPoint: undefined,
      },
      devOptions: {
        enabled: true,
        type: "module",
      },
      manifest: {
        // Used to specify a short name for web application, which may be used when the full name is too long for the available space.
        short_name: "Vite PWA",
        // Used to specify the full name of web application as it's usually diasplayed to users,
        // such as in application lists or as a label for application's icon
        name: "Vite PWA Example",
        // Used to explain the core features or functionality of web application.
        // This text helps users understand app's purpose when viewing it in an app store
        description: "Installable Vite PWA Example with Custom Prompt",
        // Used to specify one or more image files that define the icons to represent web application
        icons: [
          {
            src: "/pwa-logo.svg",
            sizes: "800x800",
            type: "image/svg+xml",
          },
        ],
        // Used to specify the URL that should be opened when a user launches web application,
        // such as when tapping the application's icon on their device's home screen or in an application list.
        start_url: "/",
        // Used to specify preferred display mode for the web application.
        // The display mode determines how much of the browser UI is shown to the user when the app is launched
        // within the context of an operating system. You can choose to show the full browser interface
        // or hide it to provide a more app-like experience.
        display: "standalone",
        // Used to specify the default color for your web application's user interface.
        // This color may be applied to various browser UI elements, such as the toolbar, address bar, and status bar.
        // It can be particularly noticeable in contexts like the task switcher or when the app is added to the home screen.
        theme_color: "#BD34FE",
        // Used to specify an initial background color for web application.
        // This color appears in the application window before your application's stylesheets have loaded.
        background_color: "#242424",
        // Specifies one or more images that showcase web application.
        // These images help users preview web app's interface and features in app stores.
        screenshots: [
          {
            src: "/screenshots/image.jpg",
            sizes: "1280x720",
            type: "image/jpeg",
            form_factor: "wide",
          },
          {
            src: "/screenshots/image.jpg",
            sizes: "1280x720",
            type: "image/jpeg",
            form_factor: "narrow",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
