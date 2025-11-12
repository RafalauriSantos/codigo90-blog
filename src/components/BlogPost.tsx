import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

interface BlogPostProps {
	title: string;
	date: string;
	author: string;
	readTime: string;
	content: React.ReactNode;
	category: string;
}

const BlogPost = ({
	title,
	date,
	author,
	readTime,
	content,
	category,
}: BlogPostProps) => {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen">
			{/* Header */}
			<nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
				<div className="container mx-auto px-4 py-4">
					<Button
						variant="ghost"
						onClick={() => navigate("/")}
						className="gap-2">
						<ArrowLeft className="w-4 h-4" />
						Voltar para Home
					</Button>
				</div>
			</nav>

			{/* Article */}
			<article className="py-12">
				<div className="container mx-auto px-4 max-w-4xl">
					{/* Category Badge */}
					<div className="mb-4">
						<span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
							{category}
						</span>
					</div>

					{/* Title */}
					<h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
						{title}
					</h1>

					{/* Meta Information */}
					<div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-6 border-b border-border">
						<div className="flex items-center gap-2">
							<User className="w-4 h-4" />
							<span>{author}</span>
						</div>
						<div className="flex items-center gap-2">
							<Calendar className="w-4 h-4" />
							<span>{date}</span>
						</div>
						<div className="flex items-center gap-2">
							<Clock className="w-4 h-4" />
							<span>{readTime}</span>
						</div>
					</div>

					{/* Content */}
					<div className="prose prose-lg dark:prose-invert max-w-none">
						{content}
					</div>

					{/* CTA no final do post */}
					<div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 text-center">
						<h3 className="text-2xl font-bold mb-2">Gostou deste conteúdo?</h3>
						<p className="text-muted-foreground mb-6">
							Baixe o guia completo GRATUITO e comece sua jornada em tech hoje
							mesmo!
						</p>
						<Button
							size="lg"
							className="bg-primary hover:bg-primary/90"
							onClick={() => navigate("/")}>
							Baixar Guia Código 90
						</Button>
					</div>
				</div>
			</article>

			<Footer />
		</div>
	);
};

export default BlogPost;
