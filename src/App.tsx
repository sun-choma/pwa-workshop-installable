import { useInstallable } from "@/providers/installable/useInstallable.ts";
import { InstallationController } from "@/InstallationController.tsx";

import pwaLogo from "/pwa-logo.svg";
import "./App.css";
import { usePwa } from "@/hooks/usePwa.ts";

function App() {
  const { isInstallable } = useInstallable();
  const { isInstalled } = usePwa();

  return (
    <main>
      <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps">
        <img src={pwaLogo} alt="PWA Logo" className="logo" />
      </a>
      <h1>PWA Workshop</h1>
      <h2>Custom install prompt</h2>
      <p className="status">
        {isInstalled ? "✅ App is installed" : "🚫 App is not installed"}
      </p>
      {isInstallable && <InstallationController />}
    </main>
  );
}

export default App;
