import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "@/components/ui/provider.tsx";
import { WorkerProvider } from "@/providers/workbox/WorkboxProvider.tsx";
import { InstallableProvider } from "@/providers/installable/InstallableProvider.tsx";
import { Toaster } from "@/components/ui/toaster.tsx";
import App from "@/App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InstallableProvider>
      <WorkerProvider>
        <Provider>
          <App />
          <Toaster />
        </Provider>
      </WorkerProvider>
    </InstallableProvider>
  </StrictMode>,
);