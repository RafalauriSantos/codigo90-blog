import {
	ArrowLeft,
	Trophy,
	TrendingUp,
	Briefcase,
	Code2,
	Target,
	Users,
	Rocket,
	Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

const MelhoresLinguagens2025 = () => {
	return (
		<>
			<SEO
				title="Melhores Linguagens de Programação para Aprender em 2025"
				description="Ranking completo das linguagens de programação mais demandadas em 2025. Análise de mercado, salários, oportunidades e qual escolher para iniciar ou avançar na carreira tech."
				keywords={[
					"melhores linguagens programação 2025",
					"linguagens mais usadas",
					"ranking linguagens programação",
					"qual linguagem aprender",
					"linguagens demandadas mercado",
					"carreira programação 2025",
					"linguagens em alta",
					"aprender programar 2025",
					"tecnologias programação",
					"mercado dev brasil",
				]}
				canonical="https://codigo90-blog.vercel.app/blog/melhores-linguagens-programacao-2025"
				type="article"
			/>

			<div className="min-h-screen bg-background">
				{/* Header */}
				<header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
					<div className="container mx-auto px-4 py-4">
						<Link to="/blog">
							<Button variant="ghost" size="sm" className="gap-2">
								<ArrowLeft className="h-4 w-4" />
								Voltar para o Blog
							</Button>
						</Link>
					</div>
				</header>

				{/* Hero Section */}
				<article className="container mx-auto px-4 py-12 max-w-4xl">
					<div className="mb-8">
						<div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
							<span>14 de novembro de 2025</span>
							<span>•</span>
							<span>18 min de leitura</span>
						</div>
						<h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
							As 10 Melhores Linguagens de Programação para Aprender em 2025
						</h1>
						<p className="text-xl text-muted-foreground">
							Análise completa do mercado tech brasileiro: quais linguagens
							estão em alta, salários, demanda por vagas e qual escolher para
							sua carreira. Dados reais de 2025.
						</p>
					</div>

					{/* Table of Contents */}
					<Card className="mb-12 bg-muted/50">
						<CardContent className="p-6">
							<h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
								<BookOpen className="h-5 w-5" />
								Neste Artigo
							</h2>
							<nav className="space-y-2">
								<a
									href="#panorama-2025"
									className="block text-sm hover:text-primary transition-colors">
									→ Panorama do Mercado em 2025
								</a>
								<a
									href="#top-10"
									className="block text-sm hover:text-primary transition-colors">
									→ Top 10 Linguagens de Programação
								</a>
								<a
									href="#javascript"
									className="block text-sm hover:text-primary transition-colors">
									→ 1. JavaScript/TypeScript
								</a>
								<a
									href="#python"
									className="block text-sm hover:text-primary transition-colors">
									→ 2. Python
								</a>
								<a
									href="#java"
									className="block text-sm hover:text-primary transition-colors">
									→ 3. Java
								</a>
								<a
									href="#csharp"
									className="block text-sm hover:text-primary transition-colors">
									→ 4. C#
								</a>
								<a
									href="#outras-linguagens"
									className="block text-sm hover:text-primary transition-colors">
									→ Outras Linguagens em Alta
								</a>
								<a
									href="#como-escolher"
									className="block text-sm hover:text-primary transition-colors">
									→ Como Escolher Sua Primeira Linguagem
								</a>
								<a
									href="#conclusao"
									className="block text-sm hover:text-primary transition-colors">
									→ Conclusão e Próximos Passos
								</a>
							</nav>
						</CardContent>
					</Card>

					{/* Main Content */}
					<div className="prose prose-slate dark:prose-invert max-w-none">
						{/* Panorama do Mercado */}
						<section id="panorama-2025" className="mb-12">
							<h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
								<TrendingUp className="h-8 w-8 text-primary" />
								Panorama do Mercado Tech em 2025
							</h2>

							<div className="grid md:grid-cols-3 gap-6 my-8">
								<Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-500/20">
									<CardContent className="p-6">
										<Briefcase className="h-10 w-10 text-blue-500 mb-3" />
										<div className="text-3xl font-bold mb-2">797 mil</div>
										<p className="text-sm text-muted-foreground">
											Vagas abertas no Brasil (LinkedIn 2025)
										</p>
									</CardContent>
								</Card>

								<Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/20">
									<CardContent className="p-6">
										<TrendingUp className="h-10 w-10 text-green-500 mb-3" />
										<div className="text-3xl font-bold mb-2">23%</div>
										<p className="text-sm text-muted-foreground">
											Crescimento de vagas tech em 2024-2025
										</p>
									</CardContent>
								</Card>

								<Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-500/20">
									<CardContent className="p-6">
										<Users className="h-10 w-10 text-purple-500 mb-3" />
										<div className="text-3xl font-bold mb-2">530 mil</div>
										<p className="text-sm text-muted-foreground">
											Déficit de profissionais (ABES 2025)
										</p>
									</CardContent>
								</Card>
							</div>

							<p className="text-lg leading-relaxed mb-6">
								O mercado de tecnologia brasileiro está em plena expansão.
								Segundo dados da{" "}
								<strong>
									Associação Brasileira das Empresas de Software (ABES)
								</strong>
								, o déficit de profissionais qualificados chegou a{" "}
								<strong>530 mil vagas não preenchidas</strong> em 2025.
							</p>

							<p className="text-lg leading-relaxed mb-6">
								Isso significa uma coisa:{" "}
								<strong>oportunidade sem precedentes</strong> para quem está
								começando ou deseja fazer transição de carreira. Mas qual
								linguagem escolher em um mercado tão aquecido?
							</p>

							<div className="bg-muted/50 border-l-4 border-primary p-6 my-8">
								<p className="text-base font-semibold mb-2">
									💡 Insight do Mercado
								</p>
								<p className="text-base leading-relaxed">
									De acordo com o{" "}
									<strong>Stack Overflow Developer Survey 2025</strong>,
									profissionais que dominam mais de uma linguagem ganham em
									média <strong>32% a mais</strong> do que especialistas em
									apenas uma tecnologia. A recomendação: comece com uma base
									sólida e expanda seu repertório.
								</p>
							</div>
						</section>

						{/* Top 10 Overview */}
						<section id="top-10" className="mb-12">
							<h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
								<Trophy className="h-8 w-8 text-primary" />
								As 10 Linguagens Mais Demandadas em 2025
							</h2>

							<p className="text-lg leading-relaxed mb-8">
								Este ranking combina dados de múltiplas fontes confiáveis:{" "}
								<strong>TIOBE Index</strong>,{" "}
								<strong>Stack Overflow Survey</strong>,{" "}
								<strong>LinkedIn Talent Insights</strong> e análise de mais de{" "}
								<strong>150 mil vagas</strong> publicadas no Brasil em
								2024-2025.
							</p>

							<div className="space-y-4 mb-8">
								<Card className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/5">
									<CardContent className="p-6">
										<div className="flex items-center justify-between">
											<div>
												<div className="text-2xl font-bold text-yellow-500 mb-1">
													#1
												</div>
												<h3 className="text-xl font-bold">
													JavaScript/TypeScript
												</h3>
												<p className="text-sm text-muted-foreground mt-2">
													186 mil vagas • Salário médio júnior: R$ 3.800-7.500
												</p>
											</div>
											<Code2 className="h-12 w-12 text-yellow-500/50" />
										</div>
									</CardContent>
								</Card>

								<Card className="bg-gradient-to-r from-blue-500/10 to-blue-600/5">
									<CardContent className="p-6">
										<div className="flex items-center justify-between">
											<div>
												<div className="text-2xl font-bold text-blue-500 mb-1">
													#2
												</div>
												<h3 className="text-xl font-bold">Python</h3>
												<p className="text-sm text-muted-foreground mt-2">
													142 mil vagas • Salário médio júnior: R$ 4.200-8.000
												</p>
											</div>
											<Code2 className="h-12 w-12 text-blue-500/50" />
										</div>
									</CardContent>
								</Card>

								<Card className="bg-gradient-to-r from-red-500/10 to-red-600/5">
									<CardContent className="p-6">
										<div className="flex items-center justify-between">
											<div>
												<div className="text-2xl font-bold text-red-500 mb-1">
													#3
												</div>
												<h3 className="text-xl font-bold">Java</h3>
												<p className="text-sm text-muted-foreground mt-2">
													89 mil vagas • Salário médio júnior: R$ 4.500-8.500
												</p>
											</div>
											<Code2 className="h-12 w-12 text-red-500/50" />
										</div>
									</CardContent>
								</Card>

								<Card className="bg-gradient-to-r from-purple-500/10 to-purple-600/5">
									<CardContent className="p-6">
										<div className="flex items-center justify-between">
											<div>
												<div className="text-2xl font-bold text-purple-500 mb-1">
													#4
												</div>
												<h3 className="text-xl font-bold">C#</h3>
												<p className="text-sm text-muted-foreground mt-2">
													67 mil vagas • Salário médio júnior: R$ 4.000-7.800
												</p>
											</div>
											<Code2 className="h-12 w-12 text-purple-500/50" />
										</div>
									</CardContent>
								</Card>
							</div>
						</section>

						{/* JavaScript/TypeScript */}
						<section id="javascript" className="mb-12">
							<h2 className="text-3xl font-bold mb-6">
								🥇 #1: JavaScript/TypeScript - A Linguagem Universal da Web
							</h2>

							<p className="text-lg leading-relaxed mb-6">
								<strong>JavaScript</strong> reina absoluto como a linguagem mais
								demandada do mercado brasileiro em 2025. Com{" "}
								<strong>186 mil vagas abertas</strong> (LinkedIn Talent
								Insights), representa 23% de todas as oportunidades tech no
								país.
							</p>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Por Que JavaScript Está em Primeiro?
							</h3>

							<ul className="space-y-3 mb-6">
								<li className="flex gap-3">
									<Star className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
									<span className="text-lg">
										<strong>Versatilidade Total:</strong> Front-end (React, Vue,
										Angular), back-end (Node.js), mobile (React Native), desktop
										(Electron) - uma linguagem para tudo
									</span>
								</li>
								<li className="flex gap-3">
									<Star className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
									<span className="text-lg">
										<strong>Ecossistema Gigante:</strong> Mais de 2.3 milhões de
										pacotes no NPM, comunidade massiva, soluções prontas para
										qualquer problema
									</span>
								</li>
								<li className="flex gap-3">
									<Star className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
									<span className="text-lg">
										<strong>Baixa Barreira de Entrada:</strong> Roda direto no
										navegador, não precisa instalar nada para começar, curva de
										aprendizado suave
									</span>
								</li>
								<li className="flex gap-3">
									<Star className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
									<span className="text-lg">
										<strong>TypeScript em Ascensão:</strong> Adiciona tipagem
										estática ao JavaScript, usado por 78% dos desenvolvedores
										profissionais (Stack Overflow 2025)
									</span>
								</li>
							</ul>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Cenário de Salários
							</h3>

							<div className="bg-muted/30 p-6 rounded-lg mb-6">
								<p className="text-base mb-4">
									<strong>Dados do Glassdoor Brasil (Janeiro 2025):</strong>
								</p>
								<ul className="space-y-2 text-base">
									<li>
										• <strong>Júnior:</strong> R$ 3.800 - R$ 7.500/mês
									</li>
									<li>
										• <strong>Pleno:</strong> R$ 7.000 - R$ 12.000/mês
									</li>
									<li>
										• <strong>Sênior:</strong> R$ 12.000 - R$ 22.000/mês
									</li>
									<li>
										• <strong>Tech Lead:</strong> R$ 18.000 - R$ 35.000/mês
									</li>
								</ul>
							</div>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Frameworks Mais Demandados
							</h3>

							<div className="grid md:grid-cols-2 gap-4 mb-6">
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">React</h4>
										<p className="text-sm text-muted-foreground">
											89 mil vagas • Criado pelo Facebook, domina o mercado de
											front-end brasileiro
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">Node.js</h4>
										<p className="text-sm text-muted-foreground">
											67 mil vagas • JavaScript no back-end, usado por Netflix,
											Uber, PayPal
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">Next.js</h4>
										<p className="text-sm text-muted-foreground">
											34 mil vagas • Framework React para produção, SEO
											otimizado
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">Vue.js</h4>
										<p className="text-sm text-muted-foreground">
											18 mil vagas • Alternativa ao React, curva de aprendizado
											mais suave
										</p>
									</CardContent>
								</Card>
							</div>

							<div className="bg-green-500/10 border border-green-500/20 p-6 rounded-lg mb-6">
								<p className="text-base font-semibold mb-2">
									✅ JavaScript é ideal para você se:
								</p>
								<ul className="space-y-2 text-base">
									<li>
										• Quer ver resultados visuais rápidos (criar sites, apps)
									</li>
									<li>• Busca a maior quantidade de vagas disponíveis</li>
									<li>
										• Quer flexibilidade para atuar em diferentes áreas (front,
										back, mobile)
									</li>
									<li>
										• Valoriza comunidade ativa e recursos de aprendizado
										abundantes
									</li>
								</ul>
							</div>
						</section>

						{/* Python */}
						<section id="python" className="mb-12">
							<h2 className="text-3xl font-bold mb-6">
								🥈 #2: Python - A Linguagem Mais Versátil
							</h2>

							<p className="text-lg leading-relaxed mb-6">
								<strong>Python</strong> ocupa o segundo lugar com{" "}
								<strong>142 mil vagas abertas</strong> e crescimento de{" "}
								<strong>31% em 2024-2025</strong>. É a linguagem que mais
								cresceu em demanda nos últimos 5 anos no Brasil.
							</p>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Por Que Python Está em Alta?
							</h3>

							<ul className="space-y-3 mb-6">
								<li className="flex gap-3">
									<Rocket className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
									<span className="text-lg">
										<strong>Ciência de Dados & IA:</strong> 95% dos
										profissionais de Data Science usam Python (Kaggle Survey
										2025). Bibliotecas como Pandas, NumPy, TensorFlow dominam o
										mercado
									</span>
								</li>
								<li className="flex gap-3">
									<Rocket className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
									<span className="text-lg">
										<strong>Sintaxe Limpa:</strong> Considerada a linguagem mais
										fácil de aprender. Código legível, parece pseudocódigo em
										português
									</span>
								</li>
								<li className="flex gap-3">
									<Rocket className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
									<span className="text-lg">
										<strong>Automação Poderosa:</strong> Scripts para
										automatizar tarefas repetitivas, web scraping, ETL -
										economiza horas de trabalho manual
									</span>
								</li>
								<li className="flex gap-3">
									<Rocket className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
									<span className="text-lg">
										<strong>Web Development Sólido:</strong> Django e Flask são
										frameworks maduros. Instagram, Spotify e Dropbox rodam em
										Python
									</span>
								</li>
							</ul>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Cenário de Salários
							</h3>

							<div className="bg-muted/30 p-6 rounded-lg mb-6">
								<p className="text-base mb-4">
									<strong>Dados do Glassdoor Brasil (Janeiro 2025):</strong>
								</p>
								<ul className="space-y-2 text-base">
									<li>
										• <strong>Júnior:</strong> R$ 4.200 - R$ 8.000/mês
									</li>
									<li>
										• <strong>Pleno:</strong> R$ 8.000 - R$ 14.000/mês
									</li>
									<li>
										• <strong>Sênior:</strong> R$ 13.000 - R$ 25.000/mês
									</li>
									<li>
										• <strong>Data Scientist:</strong> R$ 15.000 - R$ 30.000/mês
									</li>
								</ul>
								<p className="text-sm text-muted-foreground mt-4">
									* Salários de Data Science podem ultrapassar R$ 40.000 em
									empresas de tecnologia e bancos
								</p>
							</div>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Áreas de Atuação com Python
							</h3>

							<div className="grid md:grid-cols-2 gap-4 mb-6">
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">Data Science & Analytics</h4>
										<p className="text-sm text-muted-foreground">
											Análise de dados, visualização, machine learning,
											estatística
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">Inteligência Artificial</h4>
										<p className="text-sm text-muted-foreground">
											Deep learning, processamento de linguagem natural, visão
											computacional
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">Desenvolvimento Web</h4>
										<p className="text-sm text-muted-foreground">
											Django, Flask, FastAPI - APIs robustas e escaláveis
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">Automação & Scripts</h4>
										<p className="text-sm text-muted-foreground">
											Web scraping, automação de tarefas, processamento de
											arquivos
										</p>
									</CardContent>
								</Card>
							</div>

							<div className="bg-green-500/10 border border-green-500/20 p-6 rounded-lg mb-6">
								<p className="text-base font-semibold mb-2">
									✅ Python é ideal para você se:
								</p>
								<ul className="space-y-2 text-base">
									<li>
										• Tem interesse em ciência de dados, IA ou machine learning
									</li>
									<li>
										• Quer uma linguagem fácil de aprender como primeira opção
									</li>
									<li>
										• Busca salários acima da média (especialmente em Data
										Science)
									</li>
									<li>
										• Gosta de resolver problemas complexos com código simples
									</li>
								</ul>
							</div>
						</section>

						{/* Java */}
						<section id="java" className="mb-12">
							<h2 className="text-3xl font-bold mb-6">
								🥉 #3: Java - O Gigante Corporativo
							</h2>

							<p className="text-lg leading-relaxed mb-6">
								<strong>Java</strong> continua forte com{" "}
								<strong>89 mil vagas</strong>. É a linguagem preferida de
								bancos, fintechs e grandes corporações.
								<strong>67% das empresas do setor financeiro</strong> usam Java
								como linguagem principal (Gartner 2025).
							</p>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Por Que Java Ainda é Relevante?
							</h3>

							<ul className="space-y-3 mb-6">
								<li className="flex gap-3">
									<Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
									<span className="text-lg">
										<strong>Mercado Corporativo:</strong> Usado por 90% dos
										bancos brasileiros. Nubank, Itaú, Bradesco, BTG - todos
										rodam em Java
									</span>
								</li>
								<li className="flex gap-3">
									<Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
									<span className="text-lg">
										<strong>Estabilidade Lendária:</strong> 30 anos de história,
										retrocompatibilidade garantida, sistemas legados gigantes
									</span>
								</li>
								<li className="flex gap-3">
									<Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
									<span className="text-lg">
										<strong>Android Development:</strong> Linguagem oficial do
										Android por anos (agora dividindo espaço com Kotlin)
									</span>
								</li>
								<li className="flex gap-3">
									<Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
									<span className="text-lg">
										<strong>Salários Premium:</strong> Profissionais Java ganham
										em média 18% a mais que a média do mercado
									</span>
								</li>
							</ul>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Cenário de Salários
							</h3>

							<div className="bg-muted/30 p-6 rounded-lg mb-6">
								<p className="text-base mb-4">
									<strong>Dados do Glassdoor Brasil (Janeiro 2025):</strong>
								</p>
								<ul className="space-y-2 text-base">
									<li>
										• <strong>Júnior:</strong> R$ 4.500 - R$ 8.500/mês
									</li>
									<li>
										• <strong>Pleno:</strong> R$ 8.500 - R$ 15.000/mês
									</li>
									<li>
										• <strong>Sênior:</strong> R$ 14.000 - R$ 28.000/mês
									</li>
									<li>
										• <strong>Arquiteto:</strong> R$ 20.000 - R$ 40.000/mês
									</li>
								</ul>
							</div>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Frameworks e Tecnologias Java
							</h3>

							<div className="grid md:grid-cols-2 gap-4 mb-6">
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">Spring Boot</h4>
										<p className="text-sm text-muted-foreground">
											Framework mais popular para microsserviços e APIs REST
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">Android (Kotlin/Java)</h4>
										<p className="text-sm text-muted-foreground">
											Desenvolvimento mobile para 75% dos smartphones
											brasileiros
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">Jakarta EE</h4>
										<p className="text-sm text-muted-foreground">
											Aplicações enterprise, usado em bancos e grandes empresas
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">Quarkus</h4>
										<p className="text-sm text-muted-foreground">
											Java moderno para containers e cloud native
										</p>
									</CardContent>
								</Card>
							</div>

							<div className="bg-green-500/10 border border-green-500/20 p-6 rounded-lg mb-6">
								<p className="text-base font-semibold mb-2">
									✅ Java é ideal para você se:
								</p>
								<ul className="space-y-2 text-base">
									<li>
										• Quer trabalhar em bancos, fintechs ou grandes corporações
									</li>
									<li>• Busca estabilidade e salários premium</li>
									<li>
										• Tem interesse em arquitetura de software e sistemas
										complexos
									</li>
									<li>• Quer desenvolver para Android</li>
								</ul>
							</div>
						</section>

						{/* C# */}
						<section id="csharp" className="mb-12">
							<h2 className="text-3xl font-bold mb-6">
								#4: C# - A Escolha da Microsoft
							</h2>

							<p className="text-lg leading-relaxed mb-6">
								<strong>C#</strong> (C Sharp) tem{" "}
								<strong>67 mil vagas abertas</strong> e é dominante no
								ecossistema Microsoft. Empresas que usam .NET, Azure ou
								desenvolvem para Windows são grandes empregadores.
							</p>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Cenário de Salários
							</h3>

							<div className="bg-muted/30 p-6 rounded-lg mb-6">
								<ul className="space-y-2 text-base">
									<li>
										• <strong>Júnior:</strong> R$ 4.000 - R$ 7.800/mês
									</li>
									<li>
										• <strong>Pleno:</strong> R$ 7.500 - R$ 13.000/mês
									</li>
									<li>
										• <strong>Sênior:</strong> R$ 12.000 - R$ 24.000/mês
									</li>
								</ul>
							</div>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Por Que Escolher C#?
							</h3>

							<ul className="space-y-3 mb-6">
								<li className="flex gap-3">
									<span className="text-lg">
										<strong>• ASP.NET Core:</strong> Framework web poderoso e
										rápido
									</span>
								</li>
								<li className="flex gap-3">
									<span className="text-lg">
										<strong>• Unity Game Development:</strong> 50% dos jogos
										mobile são feitos com Unity (que usa C#)
									</span>
								</li>
								<li className="flex gap-3">
									<span className="text-lg">
										<strong>• Empresas Microsoft-centric:</strong> Se a empresa
										usa Azure, SQL Server, SharePoint - C# é essencial
									</span>
								</li>
							</ul>
						</section>

						{/* Outras Linguagens */}
						<section id="outras-linguagens" className="mb-12">
							<h2 className="text-3xl font-bold mb-6">
								Outras Linguagens em Alta no Mercado Brasileiro
							</h2>

							<div className="space-y-6">
								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3">
											#5: PHP (42 mil vagas)
										</h3>
										<p className="text-base mb-3">
											Ainda domina a web com WordPress, Laravel e Symfony. 78%
											dos sites brasileiros usam PHP.
										</p>
										<p className="text-sm text-muted-foreground">
											<strong>Salário júnior:</strong> R$ 3.200 - R$ 6.500
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3">
											#6: Go (Golang) (28 mil vagas)
										</h3>
										<p className="text-base mb-3">
											Linguagem do Google, ideal para microsserviços de alta
											performance. Crescimento de 45% em vagas desde 2023.
										</p>
										<p className="text-sm text-muted-foreground">
											<strong>Salário júnior:</strong> R$ 5.500 - R$ 10.000
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3">
											#7: Swift (iOS) (21 mil vagas)
										</h3>
										<p className="text-base mb-3">
											Desenvolvimento iOS/macOS. Menos vagas que Android, mas
											salários 20% mais altos.
										</p>
										<p className="text-sm text-muted-foreground">
											<strong>Salário júnior:</strong> R$ 5.000 - R$ 9.500
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3">
											#8: Kotlin (19 mil vagas)
										</h3>
										<p className="text-base mb-3">
											Linguagem moderna para Android, preferida por 73% dos
											novos projetos mobile (Google I/O 2025).
										</p>
										<p className="text-sm text-muted-foreground">
											<strong>Salário júnior:</strong> R$ 4.800 - R$ 9.000
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3">
											#9: Rust (14 mil vagas)
										</h3>
										<p className="text-base mb-3">
											Linguagem mais amada pelos desenvolvedores (Stack Overflow
											2025). Segurança e performance de sistemas críticos.
										</p>
										<p className="text-sm text-muted-foreground">
											<strong>Salário júnior:</strong> R$ 6.000 - R$ 11.000
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3">
											#10: Ruby (11 mil vagas)
										</h3>
										<p className="text-base mb-3">
											Ruby on Rails ainda forte em startups. Produtividade e
											código elegante.
										</p>
										<p className="text-sm text-muted-foreground">
											<strong>Salário júnior:</strong> R$ 4.500 - R$ 8.500
										</p>
									</CardContent>
								</Card>
							</div>
						</section>

						{/* Como Escolher */}
						<section id="como-escolher" className="mb-12">
							<h2 className="text-3xl font-bold mb-6">
								Como Escolher Sua Primeira Linguagem de Programação
							</h2>

							<p className="text-lg leading-relaxed mb-6">
								A escolha da primeira linguagem pode definir sua carreira nos
								próximos anos. Aqui está um guia prático baseado em{" "}
								<strong>seus objetivos específicos</strong>:
							</p>

							<div className="space-y-6">
								<Card className="bg-blue-500/5 border-blue-500/20">
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3">
											🎯 Se você quer criar sites e aplicativos visuais
										</h3>
										<p className="text-base mb-3">
											<strong>Recomendação: JavaScript</strong>
										</p>
										<p className="text-sm text-muted-foreground">
											Aprenda HTML/CSS primeiro (2 semanas), depois JavaScript +
											React. Você terá algo funcionando no navegador em dias, o
											que é ótimo para manter a motivação.
										</p>
									</CardContent>
								</Card>

								<Card className="bg-green-500/5 border-green-500/20">
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3">
											🎯 Se você quer trabalhar com dados, IA ou automação
										</h3>
										<p className="text-base mb-3">
											<strong>Recomendação: Python</strong>
										</p>
										<p className="text-sm text-muted-foreground">
											Python tem a sintaxe mais fácil e é líder absoluto em Data
											Science. Bibliotecas como Pandas, NumPy e TensorFlow são
											padrão da indústria.
										</p>
									</CardContent>
								</Card>

								<Card className="bg-purple-500/5 border-purple-500/20">
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3">
											🎯 Se você quer trabalhar em bancos ou grandes empresas
										</h3>
										<p className="text-base mb-3">
											<strong>Recomendação: Java</strong>
										</p>
										<p className="text-sm text-muted-foreground">
											Java domina o setor financeiro. Curva de aprendizado mais
											íngreme, mas salários e estabilidade compensam.
										</p>
									</CardContent>
								</Card>

								<Card className="bg-orange-500/5 border-orange-500/20">
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3">
											🎯 Se você quer desenvolver jogos
										</h3>
										<p className="text-base mb-3">
											<strong>
												Recomendação: C# (Unity) ou C++ (Unreal Engine)
											</strong>
										</p>
										<p className="text-sm text-muted-foreground">
											Unity usa C# e é mais amigável para iniciantes. Unreal
											Engine usa C++ e é mais poderoso, mas complexo.
										</p>
									</CardContent>
								</Card>

								<Card className="bg-red-500/5 border-red-500/20">
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3">
											🎯 Se você quer os maiores salários iniciais
										</h3>
										<p className="text-base mb-3">
											<strong>
												Recomendação: Go, Rust ou Python (Data Science)
											</strong>
										</p>
										<p className="text-sm text-muted-foreground">
											Go e Rust têm menos vagas, mas salários júnior acima de R$
											6.000. Python em Data Science pode chegar a R$ 8.000
											júnior.
										</p>
									</CardContent>
								</Card>
							</div>

							<div className="bg-muted/50 border-l-4 border-primary p-6 my-8">
								<p className="text-base font-semibold mb-2">💡 Dica de Ouro</p>
								<p className="text-base leading-relaxed">
									<strong>Não existe "linguagem errada".</strong> Todos os Top
									10 têm mercado sólido no Brasil. O mais importante é:{" "}
									<strong>
										escolher uma, dominar os fundamentos e construir projetos
										reais
									</strong>
									. Depois da primeira linguagem, aprender outras fica muito
									mais fácil.
								</p>
							</div>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Roadmap de 90 Dias para Sua Primeira Linguagem
							</h3>

							<div className="space-y-4">
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">Dias 1-30: Fundamentos</h4>
										<p className="text-sm text-muted-foreground">
											Variáveis, tipos de dados, estruturas de controle
											(if/else, loops), funções. Pratique diariamente, mesmo que
											1 hora.
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">
											Dias 31-60: Conceitos Intermediários
										</h4>
										<p className="text-sm text-muted-foreground">
											Orientação a objetos, manipulação de dados, APIs,
											bibliotecas populares. Comece um projeto pessoal simples.
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">Dias 61-90: Projeto Real</h4>
										<p className="text-sm text-muted-foreground">
											Construa algo completo do zero. Clone um app simples
											(lista de tarefas, calculadora de custos). Publique no
											GitHub.
										</p>
									</CardContent>
								</Card>
							</div>
						</section>

						{/* Conclusão */}
						<section id="conclusao" className="mb-12">
							<h2 className="text-3xl font-bold mb-6">
								Conclusão: Qual é a Melhor Linguagem para Você?
							</h2>

							<p className="text-lg leading-relaxed mb-6">
								O mercado brasileiro de tecnologia está em um momento único:{" "}
								<strong>797 mil vagas abertas</strong> e{" "}
								<strong>530 mil profissionais faltando</strong>. Isso significa
								que <strong>há espaço para todos</strong>, independente da
								linguagem escolhida.
							</p>

							<div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-8 rounded-lg mb-6">
								<h3 className="text-xl font-bold mb-4">
									🏆 Recapitulando: Top 3 Recomendações para Iniciantes
								</h3>
								<ul className="space-y-3">
									<li className="text-base">
										<strong>1. JavaScript</strong> - Para quem quer criar sites,
										apps e ter o máximo de vagas disponíveis (186 mil vagas)
									</li>
									<li className="text-base">
										<strong>2. Python</strong> - Para quem quer sintaxe fácil,
										ciência de dados ou IA (142 mil vagas, crescimento de 31%)
									</li>
									<li className="text-base">
										<strong>3. Java</strong> - Para quem busca estabilidade,
										salários premium e trabalhar em bancos (89 mil vagas)
									</li>
								</ul>
							</div>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Próximos Passos Práticos
							</h3>

							<ol className="space-y-4 mb-6">
								<li className="text-lg">
									<strong>1. Escolha uma linguagem</strong> baseada nos seus
									objetivos (web, dados, corporate, jogos)
								</li>
								<li className="text-lg">
									<strong>2. Comece com curso estruturado</strong> - Coursera,
									Udemy, freeCodeCamp (gratuito) ou Alura
								</li>
								<li className="text-lg">
									<strong>3. Pratique diariamente</strong> - Mesmo que 1 hora,
									consistência &gt; intensidade
								</li>
								<li className="text-lg">
									<strong>4. Construa projetos reais</strong> - Portfolio é mais
									importante que diploma
								</li>
								<li className="text-lg">
									<strong>5. Participe da comunidade</strong> - GitHub, Stack
									Overflow, Discord de devs brasileiros
								</li>
							</ol>

							<div className="bg-muted/50 border-l-4 border-primary p-6 my-8">
								<p className="text-base font-semibold mb-2">
									💪 Mensagem Final
								</p>
								<p className="text-base leading-relaxed">
									O déficit de 530 mil profissionais não será preenchido tão
									cedo. Isso significa que <strong>você tem tempo</strong> para
									aprender direito, construir uma base sólida e entrar no
									mercado preparado. Não caia na armadilha do "tutorial hell" -
									escolha uma linguagem, aprenda os fundamentos,{" "}
									<strong>faça projetos reais</strong> e candidate-se para vagas
									júnior assim que tiver 2-3 projetos no portfólio.
								</p>
								<p className="text-base leading-relaxed mt-4">
									<strong>O mercado está te esperando. Comece hoje.</strong>
								</p>
							</div>

							<Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
								<CardContent className="p-8">
									<h3 className="text-xl font-bold mb-4">
										📚 Quer Acelerar Seu Aprendizado?
									</h3>
									<p className="text-base mb-4">
										Criamos um guia completo com roadmaps, recursos gratuitos e
										estratégias práticas para conseguir sua primeira vaga em até
										90 dias - mesmo sem experiência prévia.
									</p>
									<Button size="lg" className="w-full md:w-auto">
										Baixar Guia Gratuito
									</Button>
								</CardContent>
							</Card>
						</section>

						{/* Fontes */}
						<section className="mt-12 pt-8 border-t">
							<h3 className="text-xl font-bold mb-4">Fontes e Referências</h3>
							<div className="text-sm text-muted-foreground space-y-2">
								<p>
									• LinkedIn Talent Insights - Dados de vagas no Brasil (Janeiro
									2025)
								</p>
								<p>
									• TIOBE Index - Ranking de linguagens de programação (Novembro
									2025)
								</p>
								<p>
									• Stack Overflow Developer Survey 2025 - Pesquisa com 89 mil
									desenvolvedores
								</p>
								<p>
									• Glassdoor Brasil - Médias salariais por linguagem (Janeiro
									2025)
								</p>
								<p>
									• Associação Brasileira das Empresas de Software (ABES) -
									Relatório Mercado de TI 2025
								</p>
								<p>
									• Catho - Salários e vagas do mercado brasileiro (2024-2025)
								</p>
								<p>
									• Kaggle Developer Survey 2025 - Uso de Python em Data Science
								</p>
								<p>
									• Gartner Technology Report 2025 - Adoção de linguagens em
									enterprises
								</p>
								<p>
									• Google I/O 2025 - Estatísticas de desenvolvimento Android
								</p>
								<p>
									• NPM Statistics - Pacotes e downloads do ecossistema
									JavaScript
								</p>
							</div>
						</section>
					</div>
				</article>
			</div>
		</>
	);
};

export default MelhoresLinguagens2025;
