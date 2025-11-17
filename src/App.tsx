import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import ComoAprenderProgramacao from "./pages/blog/ComoAprenderProgramacao";
import PythonVsJavaScript from "./pages/blog/PythonVsJavaScript";
import MelhoresLinguagens2025 from "./pages/blog/MelhoresLinguagens2025";
import GitGitHubIniciantes from "./pages/blog/GitGitHubIniciantes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/blog" element={<Blog />} />
					<Route
						path="/blog/python-vs-javascript"
						element={<PythonVsJavaScript />}
					/>
					<Route
						path="/blog/como-aprender-programacao-sozinho"
						element={<ComoAprenderProgramacao />}
					/>
					<Route
						path="/blog/melhores-linguagens-programacao-2025"
						element={<MelhoresLinguagens2025 />}
					/>
					<Route
						path="/blog/git-github-iniciantes"
						element={<GitGitHubIniciantes />}
					/>
					{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
