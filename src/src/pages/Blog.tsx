import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface BlogPostPreview {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	category: string;
	image?: string;
}

const Blog = () => {
	const navigate = useNavigate();

	const posts: BlogPostPreview[] = [
		{
			slug: "como-aprender-programacao-sozinho",
			title: "Como Aprender Programação Sozinho: Guia Completo 2025",
			excerpt:
				"Descubra o passo a passo para aprender programação por conta própria, com os melhores recursos gratuitos e dicas de quem já conseguiu.",
			date: "12 de novembro de 2025",
			readTime: "8 min de leitura",
			category: "Iniciantes",
		},
		{
			slug: "python-vs-javascript-qual-escolher",
			title: "Python vs JavaScript: Qual Linguagem Escolher em 2025?",
			excerpt:
				"Análise completa das duas linguagens mais populares para iniciantes. Veja qual se encaixa melhor no seu objetivo de carreira.",
			date: "10 de novembro de 2025",
			readTime: "10 min de leitura",
			category: "Linguagens",
		},
		{
			slug: "salario-programador-junior-brasil-2025",
			title: "Salário de Programador Júnior no Brasil em 2025",
			excerpt:
				"Quanto ganha um desenvolvedor iniciante? Veja dados reais do mercado, por região, tecnologia e tipo de empresa.",
			date: "8 de novembro de 2025",
			readTime: "6 min de leitura",
			category: "Carreira",
		},
	];

	return (
		<div className="min-h-screen">
			{/* Header */}
			<nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
				<div className="container mx-auto px-4 py-4 flex items-center justify-between">
					<div
						className="flex items-center gap-2 cursor-pointer"
						onClick={() => navigate("/")}>
						<span className="text-xl font-bold text-gradient">Código 90</span>
					</div>
					<Button variant="outline" onClick={() => navigate("/")}>
						Voltar para Home
					</Button>
				</div>
			</nav>

			{/* Hero do Blog */}
			<section className="py-16 bg-gradient-to-br from-primary/5 to-background">
				<div className="container mx-auto px-4 text-center max-w-3xl">
					<h1 className="text-5xl font-bold mb-4">
						Blog <span className="text-gradient">Código 90</span>
					</h1>
					<p className="text-xl text-muted-foreground">
						Conteúdos práticos para te ajudar na sua jornada para se tornar um
						desenvolvedor
					</p>
				</div>
			</section>

			{/* Lista de Posts */}
			<section className="py-16">
				<div className="container mx-auto px-4 max-w-5xl">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{posts.map((post) => (
							<Card
								key={post.slug}
								className="overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer group"
								onClick={() => navigate(`/blog/${post.slug}`)}>
								{/* Image placeholder */}
								<div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
									<span className="text-6xl">📚</span>
								</div>

								<div className="p-6">
									{/* Category */}
									<span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
										{post.category}
									</span>

									{/* Title */}
									<h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
										{post.title}
									</h2>

									{/* Excerpt */}
									<p className="text-sm text-muted-foreground mb-4 line-clamp-3">
										{post.excerpt}
									</p>

									{/* Meta */}
									<div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
										<div className="flex items-center gap-1">
											<Calendar className="w-3 h-3" />
											<span>{post.date}</span>
										</div>
										<div className="flex items-center gap-1">
											<Clock className="w-3 h-3" />
											<span>{post.readTime}</span>
										</div>
									</div>

									{/* CTA */}
									<div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
										Ler artigo
										<ArrowRight className="w-4 h-4" />
									</div>
								</div>
							</Card>
						))}
					</div>

					{/* Mensagem se não houver posts */}
					{posts.length === 0 && (
						<div className="text-center py-16">
							<p className="text-muted-foreground">Em breve novos artigos...</p>
						</div>
					)}
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 bg-gradient-to-br from-primary/5 to-background">
				<div className="container mx-auto px-4 max-w-3xl text-center">
					<h2 className="text-3xl font-bold mb-4">
						Pronto para{" "}
						<span className="text-gradient">Começar sua Jornada?</span>
					</h2>
					<p className="text-muted-foreground mb-6">
						Baixe o guia completo e descubra o passo a passo para se tornar um
						desenvolvedor em 90 dias
					</p>
					<Button
						size="lg"
						className="bg-primary hover:bg-primary/90"
						onClick={() => navigate("/")}>
						Baixar Guia Gratuito
					</Button>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Blog;
