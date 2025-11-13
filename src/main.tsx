import { createRoot } from "react-dom/client";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Inject Vercel Speed Insights
injectSpeedInsights();

createRoot(document.getElementById("root")!).render(
	<HelmetProvider>
		<App />
	</HelmetProvider>
);
