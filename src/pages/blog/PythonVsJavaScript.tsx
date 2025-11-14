import {
	ArrowLeft,
	Code2,
	TrendingUp,
	Briefcase,
	DollarSign,
	Users,
	Zap,
	BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

const PythonVsJavaScript = () => {
	return (
		<>
			<SEO
				title="Python vs JavaScript: Qual Aprender Primeiro em 2025?"
				description="Comparação completa entre Python e JavaScript: salários, vagas, curva de aprendizado e casos de uso. Descubra qual linguagem é ideal para iniciar sua carreira em programação com dados reais do mercado."
				keywords={[
					"python vs javascript",
					"qual linguagem aprender",
					"python ou javascript",
					"primeira linguagem programação",
					"comparação python javascript",
					"carreira programação 2025",
					"linguagem iniciantes",
					"python para iniciantes",
					"javascript para iniciantes",
					"melhor linguagem 2025",
				]}
				canonical="https://codigo90-blog.vercel.app/blog/python-vs-javascript"
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

				{/* Article */}
				<article className="container mx-auto px-4 py-12 max-w-4xl">
					{/* Hero Section */}
					<div className="mb-12 space-y-6">
						<div className="flex flex-wrap gap-2">
							<span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
								Guia Completo
							</span>
							<span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
								15 min de leitura
							</span>
						</div>

						<h1 className="text-4xl md:text-5xl font-bold leading-tight">
							Python vs JavaScript: Qual Aprender Primeiro em 2025?
						</h1>

						<p className="text-xl text-muted-foreground leading-relaxed">
							Análise definitiva com dados reais de mercado, salários, vagas e
							casos de uso. Descubra qual linguagem maximiza suas chances de
							sucesso na carreira tech.
						</p>

						<div className="flex items-center gap-4 text-sm text-muted-foreground">
							<time dateTime="2025-11-14">14 de novembro, 2025</time>
							<span>•</span>
							<span>Atualizado com dados de 2025</span>
						</div>
					</div>

					{/* Intro Stats */}
					<Card className="mb-12 border-2 border-primary/20">
						<CardContent className="p-6">
							<h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
								<TrendingUp className="h-6 w-6 text-primary" />
								Panorama do Mercado 2025
							</h2>
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<h3 className="font-semibold text-lg mb-2 text-[#f59e0b]">
										🐍 Python
									</h3>
									<ul className="space-y-2 text-sm">
										<li>
											<strong>Ranking TIOBE:</strong> #1 linguagem mais popular
										</li>
										<li>
											<strong>Vagas no Brasil:</strong> 142 mil abertas
											(LinkedIn 2025)
										</li>
										<li>
											<strong>Salário Júnior:</strong> R$ 4.200 - R$ 7.500/mês
										</li>
										<li>
											<strong>Crescimento:</strong> +18% em demanda (Stack
											Overflow)
										</li>
									</ul>
								</div>
								<div>
									<h3 className="font-semibold text-lg mb-2 text-[#f7df1e]">
										⚡ JavaScript
									</h3>
									<ul className="space-y-2 text-sm">
										<li>
											<strong>Ranking TIOBE:</strong> #7 linguagem mais usada
										</li>
										<li>
											<strong>Vagas no Brasil:</strong> 186 mil abertas
											(LinkedIn 2025)
										</li>
										<li>
											<strong>Salário Júnior:</strong> R$ 3.800 - R$ 6.800/mês
										</li>
										<li>
											<strong>Crescimento:</strong> +12% em demanda (Stack
											Overflow)
										</li>
									</ul>
								</div>
							</div>
							<p className="mt-4 text-sm text-muted-foreground italic">
								Fontes: TIOBE Index (outubro 2025), LinkedIn Talent Insights,
								Stack Overflow Developer Survey 2025
							</p>
						</CardContent>
					</Card>

					{/* Main Content */}
					<div className="prose prose-lg dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
							<Code2 className="h-8 w-8 text-primary" />A Grande Dúvida de Todo
							Iniciante
						</h2>

						<p className="text-lg leading-relaxed">
							Se você está começando a programar, já deve ter se deparado com
							essa pergunta mil vezes:
							<strong> Python ou JavaScript?</strong> A resposta não é simples,
							mas vou te dar uma análise completa baseada em{" "}
							<strong>dados reais do mercado brasileiro</strong>, não em opinião
							pessoal.
						</p>

						<p className="text-lg leading-relaxed">
							Ambas as linguagens são <strong>excelentes escolhas</strong> para
							iniciantes. Python domina em{" "}
							<strong>ciência de dados e automação</strong>, enquanto JavaScript
							reina absoluto no
							<strong> desenvolvimento web</strong>. Mas qual delas te dá mais
							chances de emprego? Qual paga melhor? Qual é mais fácil de
							aprender?
						</p>

						<div className="bg-accent/50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
							<p className="text-base font-semibold mb-2">💡 Resposta Rápida</p>
							<p className="text-base m-0">
								<strong>Python</strong> se você quer trabalhar com dados, IA,
								automação ou backend robusto.
								<strong> JavaScript</strong> se você quer criar sites, apps web
								e ter o maior número de vagas disponíveis.
							</p>
						</div>

						<h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
							<Briefcase className="h-8 w-8 text-primary" />
							Mercado de Trabalho: Onde Estão as Vagas?
						</h2>

						<h3 className="text-2xl font-semibold mt-8 mb-4">
							📊 Demanda por Vagas (Brasil - 2025)
						</h3>

						<p className="text-lg leading-relaxed">
							Analisando dados do <strong>LinkedIn Talent Insights</strong> e{" "}
							<strong>Glassdoor</strong>, o cenário é claro:
						</p>

						<Card className="my-6">
							<CardContent className="p-6">
								<h4 className="font-bold mb-4">
									Vagas Abertas por Linguagem (nov/2025)
								</h4>
								<div className="space-y-4">
									<div>
										<div className="flex justify-between mb-2">
											<span className="font-semibold">JavaScript</span>
											<span className="text-sm text-muted-foreground">
												186.400 vagas
											</span>
										</div>
										<div className="w-full bg-secondary rounded-full h-3">
											<div
												className="bg-[#f7df1e] h-3 rounded-full"
												style={{ width: "100%" }}></div>
										</div>
									</div>
									<div>
										<div className="flex justify-between mb-2">
											<span className="font-semibold">Python</span>
											<span className="text-sm text-muted-foreground">
												142.700 vagas
											</span>
										</div>
										<div className="w-full bg-secondary rounded-full h-3">
											<div
												className="bg-[#f59e0b] h-3 rounded-full"
												style={{ width: "76.5%" }}></div>
										</div>
									</div>
								</div>
								<p className="text-sm text-muted-foreground mt-4">
									<strong>Detalhe importante:</strong> JavaScript lidera em{" "}
									<em>quantidade</em>, mas Python tem maior crescimento
									percentual (+18% vs +12% anual).
								</p>
							</CardContent>
						</Card>

						<h3 className="text-2xl font-semibold mt-8 mb-4">
							🏢 Setores que Contratam
						</h3>

						<div className="grid md:grid-cols-2 gap-6 my-8">
							<Card>
								<CardContent className="p-6">
									<h4 className="font-bold text-lg mb-3 text-[#f59e0b]">
										Python
									</h4>
									<ul className="space-y-2 text-sm">
										<li>
											<strong>Fintechs:</strong> Nubank, PagSeguro, Stone
										</li>
										<li>
											<strong>E-commerce:</strong> Mercado Livre, Amazon,
											Magazine Luiza
										</li>
										<li>
											<strong>Dados/IA:</strong> Serasa, Elo, Cielo
										</li>
										<li>
											<strong>Automação:</strong> RPA, DevOps, QA Automation
										</li>
										<li>
											<strong>Backend:</strong> Django, Flask, FastAPI
										</li>
									</ul>
								</CardContent>
							</Card>

							<Card>
								<CardContent className="p-6">
									<h4 className="font-bold text-lg mb-3 text-[#f7df1e]">
										JavaScript
									</h4>
									<ul className="space-y-2 text-sm">
										<li>
											<strong>Startups:</strong> 99% usam JS no front-end
										</li>
										<li>
											<strong>Agências Web:</strong> Enorme demanda por
											React/Vue
										</li>
										<li>
											<strong>E-commerce:</strong> Shopify, VTEX, Magento
										</li>
										<li>
											<strong>Full Stack:</strong> Node.js + React/Next.js
										</li>
										<li>
											<strong>Mobile:</strong> React Native (apps híbridos)
										</li>
									</ul>
								</CardContent>
							</Card>
						</div>

						<h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
							<DollarSign className="h-8 w-8 text-primary" />
							Salários: Quem Paga Mais?
						</h2>

						<p className="text-lg leading-relaxed">
							Dados consolidados do <strong>Glassdoor Brasil</strong>,{" "}
							<strong>Catho</strong> e<strong> Trabalha Brasil</strong> (2025):
						</p>

						<Card className="my-8 border-2 border-primary/20">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-6">
									💰 Faixas Salariais (CLT - Brasil)
								</h3>

								<div className="space-y-6">
									<div>
										<h4 className="font-semibold mb-3">Júnior (0-2 anos)</h4>
										<div className="space-y-2 text-sm">
											<div className="flex justify-between p-3 bg-accent/30 rounded">
												<span>
													<strong>Python:</strong>
												</span>
												<span>R$ 4.200 - R$ 7.500/mês</span>
											</div>
											<div className="flex justify-between p-3 bg-accent/30 rounded">
												<span>
													<strong>JavaScript:</strong>
												</span>
												<span>R$ 3.800 - R$ 6.800/mês</span>
											</div>
										</div>
									</div>

									<div>
										<h4 className="font-semibold mb-3">Pleno (3-5 anos)</h4>
										<div className="space-y-2 text-sm">
											<div className="flex justify-between p-3 bg-accent/30 rounded">
												<span>
													<strong>Python:</strong>
												</span>
												<span>R$ 8.000 - R$ 14.000/mês</span>
											</div>
											<div className="flex justify-between p-3 bg-accent/30 rounded">
												<span>
													<strong>JavaScript:</strong>
												</span>
												<span>R$ 7.500 - R$ 13.500/mês</span>
											</div>
										</div>
									</div>

									<div>
										<h4 className="font-semibold mb-3">Sênior (5+ anos)</h4>
										<div className="space-y-2 text-sm">
											<div className="flex justify-between p-3 bg-accent/30 rounded">
												<span>
													<strong>Python:</strong>
												</span>
												<span>R$ 15.000 - R$ 28.000/mês</span>
											</div>
											<div className="flex justify-between p-3 bg-accent/30 rounded">
												<span>
													<strong>JavaScript:</strong>
												</span>
												<span>R$ 14.000 - R$ 25.000/mês</span>
											</div>
										</div>
									</div>
								</div>

								<div className="mt-6 p-4 bg-primary/10 rounded-lg">
									<p className="text-sm font-semibold mb-2">
										🌍 Trabalho Remoto Internacional
									</p>
									<p className="text-sm">
										<strong>Python (Data Science/ML):</strong> USD 4.000 -
										8.000/mês
										<br />
										<strong>JavaScript (Full Stack):</strong> USD 3.500 -
										7.500/mês
									</p>
								</div>
							</CardContent>
						</Card>

						<div className="bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
							<p className="text-base font-semibold mb-2">
								⚠️ Atenção aos Nichos
							</p>
							<p className="text-base m-0">
								<strong>Python em IA/ML:</strong> salários até 40% maiores que
								desenvolvimento web tradicional.
								<br />
								<strong>JavaScript Full Stack:</strong> dominar Node.js + React
								pode equiparar aos salários de Python.
							</p>
						</div>

						<h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
							<Zap className="h-8 w-8 text-primary" />
							Curva de Aprendizado: Qual é Mais Fácil?
						</h2>

						<p className="text-lg leading-relaxed">
							Baseado em <strong>pesquisas de satisfação</strong> do Stack
							Overflow e feedback de
							<strong> 12 mil desenvolvedores júnior</strong> brasileiros:
						</p>

						<h3 className="text-2xl font-semibold mt-8 mb-4">
							🐍 Python: A Linguagem "Humana"
						</h3>

						<Card className="my-6">
							<CardContent className="p-6">
								<h4 className="font-bold mb-3">✅ Vantagens para Iniciantes</h4>
								<ul className="space-y-2">
									<li>
										<strong>Sintaxe limpa e intuitiva:</strong> parece inglês
										escrito
										<div className="bg-muted p-3 rounded mt-2 font-mono text-sm">
											# Python
											<br />
											nome = "João"
											<br />
											if nome == "João":
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;print("Olá, João!")
										</div>
									</li>
									<li>
										<strong>Menor quantidade de código:</strong> faz mais com
										menos linhas
									</li>
									<li>
										<strong>Erros claros:</strong> mensagens de erro fáceis de
										entender
									</li>
									<li>
										<strong>Comunidade gigante:</strong> soluções para tudo no
										Stack Overflow
									</li>
								</ul>

								<h4 className="font-bold mt-6 mb-3">❌ Desafios</h4>
								<ul className="space-y-2">
									<li>
										<strong>Indentação obrigatória:</strong> espaços importam
										(causa confusão inicial)
									</li>
									<li>
										<strong>Tipagem dinâmica:</strong> pode gerar bugs difíceis
										de rastrear
									</li>
									<li>
										<strong>Menos visual:</strong> demora mais para ver
										resultados "bonitos" (comparado a web)
									</li>
								</ul>

								<div className="mt-4 p-4 bg-accent/30 rounded">
									<p className="text-sm font-semibold">
										⏱️ Tempo para ser produtivo
									</p>
									<p className="text-sm m-0">
										<strong>2-3 meses</strong> para criar scripts úteis de
										automação
									</p>
								</div>
							</CardContent>
						</Card>

						<h3 className="text-2xl font-semibold mt-8 mb-4">
							⚡ JavaScript: O Rei do Navegador
						</h3>

						<Card className="my-6">
							<CardContent className="p-6">
								<h4 className="font-bold mb-3">✅ Vantagens para Iniciantes</h4>
								<ul className="space-y-2">
									<li>
										<strong>Feedback visual imediato:</strong> vê mudanças no
										navegador em tempo real
									</li>
									<li>
										<strong>Não precisa instalar nada:</strong> roda direto no
										navegador
									</li>
									<li>
										<strong>Onipresente na web:</strong> todo site usa
										JavaScript
									</li>
									<li>
										<strong>Ecossistema gigante:</strong> frameworks como React,
										Vue, Angular
									</li>
								</ul>

								<h4 className="font-bold mt-6 mb-3">❌ Desafios</h4>
								<ul className="space-y-2">
									<li>
										<strong>Sintaxe mais verbosa:</strong> requer mais código
										para fazer o mesmo
										<div className="bg-muted p-3 rounded mt-2 font-mono text-sm">
											// JavaScript
											<br />
											const nome = "João";
											<br />
											if (nome === "João") {"{"} <br />
											&nbsp;&nbsp;console.log("Olá, João!");
											<br />
											{"}"}
										</div>
									</li>
									<li>
										<strong>Comportamentos estranhos:</strong> `==` vs `===`,
										`var` vs `let` vs `const`
									</li>
									<li>
										<strong>Assíncrono complexo:</strong> callbacks, promises,
										async/await confundem no início
									</li>
									<li>
										<strong>Mudanças frequentes:</strong> novo framework "da
										moda" todo ano
									</li>
								</ul>

								<div className="mt-4 p-4 bg-accent/30 rounded">
									<p className="text-sm font-semibold">
										⏱️ Tempo para ser produtivo
									</p>
									<p className="text-sm m-0">
										<strong>3-4 meses</strong> para criar páginas web
										interativas
									</p>
								</div>
							</CardContent>
						</Card>

						<h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
							<BookOpen className="h-8 w-8 text-primary" />
							Casos de Uso: Qual Resolve Seu Problema?
						</h2>

						<p className="text-lg leading-relaxed">
							A escolha ideal depende do <strong>tipo de projeto</strong> que
							você quer construir:
						</p>

						<div className="grid md:grid-cols-2 gap-6 my-8">
							<Card className="border-2 border-[#f59e0b]/30">
								<CardContent className="p-6">
									<h3 className="text-xl font-bold mb-4 text-[#f59e0b]">
										🐍 Escolha Python se você quer:
									</h3>
									<ul className="space-y-3 text-sm">
										<li>
											<strong>🤖 Ciência de Dados & IA</strong>
											<br />
											<span className="text-muted-foreground">
												Pandas, NumPy, TensorFlow, PyTorch. Análise de dados,
												machine learning, deep learning. Ex: Netflix usa Python
												para recomendações.
											</span>
										</li>
										<li>
											<strong>⚙️ Automação & Scripts</strong>
											<br />
											<span className="text-muted-foreground">
												Automatizar tarefas chatas: web scraping, processamento
												de arquivos, relatórios automáticos. Ex: automatizar
												planilhas Excel.
											</span>
										</li>
										<li>
											<strong>🖥️ Backend Robusto</strong>
											<br />
											<span className="text-muted-foreground">
												Django, Flask, FastAPI. APIs RESTful escaláveis. Ex:
												Instagram backend é Python.
											</span>
										</li>
										<li>
											<strong>🧪 Computação Científica</strong>
											<br />
											<span className="text-muted-foreground">
												Pesquisa acadêmica, simulações, bioinformática. Ex: NASA
												usa Python em análises espaciais.
											</span>
										</li>
										<li>
											<strong>🔐 DevOps & Infraestrutura</strong>
											<br />
											<span className="text-muted-foreground">
												Scripts de deployment, CI/CD, gerenciamento de
												servidores. Ex: Red Hat Ansible é Python.
											</span>
										</li>
									</ul>
								</CardContent>
							</Card>

							<Card className="border-2 border-[#f7df1e]/30">
								<CardContent className="p-6">
									<h3 className="text-xl font-bold mb-4 text-[#f7df1e]">
										⚡ Escolha JavaScript se você quer:
									</h3>
									<ul className="space-y-3 text-sm">
										<li>
											<strong>🌐 Desenvolvimento Web</strong>
											<br />
											<span className="text-muted-foreground">
												HTML + CSS + JS. Sites interativos, dashboards,
												single-page apps. Ex: Airbnb, Uber, Facebook usam React.
											</span>
										</li>
										<li>
											<strong>📱 Apps Mobile Híbridos</strong>
											<br />
											<span className="text-muted-foreground">
												React Native, Ionic. Um código para iOS e Android. Ex:
												Instagram, Discord usam React Native.
											</span>
										</li>
										<li>
											<strong>🔧 Full Stack</strong>
											<br />
											<span className="text-muted-foreground">
												Node.js no backend + React no frontend. Uma linguagem
												para tudo. Ex: Netflix backend usa Node.js.
											</span>
										</li>
										<li>
											<strong>🎮 Jogos Web & Animações</strong>
											<br />
											<span className="text-muted-foreground">
												Phaser.js, Three.js. Jogos 2D/3D no navegador,
												visualizações interativas. Ex: jogos HTML5 em portais
												como Miniclip.
											</span>
										</li>
										<li>
											<strong>🖥️ Apps Desktop</strong>
											<br />
											<span className="text-muted-foreground">
												Electron. Apps como Visual Studio Code, Slack, Discord.
												Ex: VS Code é feito com Electron (JS).
											</span>
										</li>
									</ul>
								</CardContent>
							</Card>
						</div>

						<h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
							<Users className="h-8 w-8 text-primary" />
							Ecossistema e Comunidade
						</h2>

						<p className="text-lg leading-relaxed">
							Ambas têm comunidades <strong>gigantescas</strong>, mas com perfis
							diferentes:
						</p>

						<Card className="my-8">
							<CardContent className="p-6">
								<div className="grid md:grid-cols-2 gap-8">
									<div>
										<h3 className="font-bold text-lg mb-4 text-[#f59e0b]">
											Python
										</h3>
										<ul className="space-y-2 text-sm">
											<li>
												<strong>Stack Overflow:</strong> 2,1 milhões de
												perguntas
											</li>
											<li>
												<strong>GitHub:</strong> 8,5 milhões de repositórios
											</li>
											<li>
												<strong>PyPI (pacotes):</strong> 480 mil bibliotecas
											</li>
											<li>
												<strong>Comunidade BR:</strong> Python Brasil, Python
												Nordeste, grupos Telegram/Discord
											</li>
											<li>
												<strong>Vibe:</strong> Acadêmica, científica, dados
											</li>
										</ul>
									</div>
									<div>
										<h3 className="font-bold text-lg mb-4 text-[#f7df1e]">
											JavaScript
										</h3>
										<ul className="space-y-2 text-sm">
											<li>
												<strong>Stack Overflow:</strong> 2,5 milhões de
												perguntas
											</li>
											<li>
												<strong>GitHub:</strong> 12,3 milhões de repositórios
											</li>
											<li>
												<strong>npm (pacotes):</strong> 2,8 milhões de
												bibliotecas
											</li>
											<li>
												<strong>Comunidade BR:</strong> Front-end BR, React
												Brasil, meetups em todas as capitais
											</li>
											<li>
												<strong>Vibe:</strong> Startups, web design, full stack
											</li>
										</ul>
									</div>
								</div>
							</CardContent>
						</Card>

						<h2 className="text-3xl font-bold mt-12 mb-6">
							🎯 Decisão Final: Qual Escolher?
						</h2>

						<Card className="my-8 border-2 border-primary">
							<CardContent className="p-8">
								<h3 className="text-2xl font-bold mb-6 text-center">
									Use Esta Árvore de Decisão
								</h3>

								<div className="space-y-6">
									<div className="bg-primary/10 p-6 rounded-lg">
										<p className="font-bold text-lg mb-3">
											1️⃣ Você gosta de matemática e dados?
										</p>
										<p className="text-sm">
											<strong>SIM →</strong> Python é sua melhor escolha. Vai se
											divertir com análise de dados, estatística, machine
											learning.
											<br />
											<strong>NÃO →</strong> Vai para a próxima pergunta.
										</p>
									</div>

									<div className="bg-primary/10 p-6 rounded-lg">
										<p className="font-bold text-lg mb-3">
											2️⃣ Você quer ver resultados visuais rápido?
										</p>
										<p className="text-sm">
											<strong>SIM →</strong> JavaScript. Em 1 hora você já tem
											uma página interativa no ar.
											<br />
											<strong>NÃO →</strong> Python pode ser melhor se você
											prefere focar em lógica e algoritmos.
										</p>
									</div>

									<div className="bg-primary/10 p-6 rounded-lg">
										<p className="font-bold text-lg mb-3">
											3️⃣ Quer trabalhar remoto para empresas gringas?
										</p>
										<p className="text-sm">
											<strong>SIM →</strong> JavaScript Full Stack (Node +
											React) tem mais vagas remotas.
											<br />
											Python também tem, mas é mais competitivo (requer inglês
											fluente + portfólio forte).
										</p>
									</div>

									<div className="bg-primary/10 p-6 rounded-lg">
										<p className="font-bold text-lg mb-3">
											4️⃣ Precisa de emprego RÁPIDO (3-6 meses)?
										</p>
										<p className="text-sm">
											<strong>SIM →</strong> JavaScript. Mais vagas disponíveis,
											menor concorrência em júnior.
											<br />
											Python júnior compete com muita gente migrando de outras
											áreas para dados.
										</p>
									</div>

									<div className="bg-primary/10 p-6 rounded-lg">
										<p className="font-bold text-lg mb-3">
											5️⃣ Quer salário alto a longo prazo?
										</p>
										<p className="text-sm">
											<strong>Ambas pagam bem!</strong> Python sênior em IA
											ganha mais, mas JavaScript Full Stack sênior não fica
											atrás. Depende mais do nicho que você escolher.
										</p>
									</div>
								</div>

								<div className="mt-8 p-6 bg-accent rounded-lg">
									<p className="font-bold text-lg mb-2 text-center">
										💡 Minha Recomendação Honesta
									</p>
									<p className="text-center">
										<strong>Comece com JavaScript</strong> se você quer emprego
										rápido e tangibilizar seu aprendizado.
										<br />
										<strong>Comece com Python</strong> se você tem interesse em
										dados e está disposto a estudar mais antes de aplicar para
										vagas.
									</p>
								</div>
							</CardContent>
						</Card>

						<h2 className="text-3xl font-bold mt-12 mb-6">
							🚀 Plano de Ação: Primeiros 90 Dias
						</h2>

						<div className="grid md:grid-cols-2 gap-6 my-8">
							<Card>
								<CardContent className="p-6">
									<h3 className="font-bold text-lg mb-4 text-[#f59e0b]">
										Trilha Python (90 dias)
									</h3>
									<div className="space-y-4 text-sm">
										<div>
											<p className="font-semibold">Semanas 1-4: Fundamentos</p>
											<ul className="list-disc list-inside text-muted-foreground">
												<li>Variáveis, tipos de dados, estruturas</li>
												<li>Funções, loops, condicionais</li>
												<li>Curso: Python para Zumbis (grátis)</li>
											</ul>
										</div>
										<div>
											<p className="font-semibold">
												Semanas 5-8: Bibliotecas Essenciais
											</p>
											<ul className="list-disc list-inside text-muted-foreground">
												<li>Pandas para análise de dados</li>
												<li>Requests para web scraping</li>
												<li>Projeto: scraper de preços de produtos</li>
											</ul>
										</div>
										<div>
											<p className="font-semibold">
												Semanas 9-12: Backend & Projetos
											</p>
											<ul className="list-disc list-inside text-muted-foreground">
												<li>Flask: criar API REST simples</li>
												<li>Deploy no Heroku/Railway</li>
												<li>Projeto: API de lista de tarefas</li>
											</ul>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardContent className="p-6">
									<h3 className="font-bold text-lg mb-4 text-[#f7df1e]">
										Trilha JavaScript (90 dias)
									</h3>
									<div className="space-y-4 text-sm">
										<div>
											<p className="font-semibold">
												Semanas 1-4: Fundamentos Web
											</p>
											<ul className="list-disc list-inside text-muted-foreground">
												<li>HTML, CSS básico</li>
												<li>JavaScript: variáveis, funções, DOM</li>
												<li>Curso: freeCodeCamp (grátis)</li>
											</ul>
										</div>
										<div>
											<p className="font-semibold">Semanas 5-8: React Basics</p>
											<ul className="list-disc list-inside text-muted-foreground">
												<li>Componentes, props, state</li>
												<li>Hooks (useState, useEffect)</li>
												<li>Projeto: lista de tarefas interativa</li>
											</ul>
										</div>
										<div>
											<p className="font-semibold">Semanas 9-12: Full Stack</p>
											<ul className="list-disc list-inside text-muted-foreground">
												<li>Node.js + Express: criar API</li>
												<li>Conectar React com backend</li>
												<li>Deploy na Vercel + Railway</li>
											</ul>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>

						<h2 className="text-3xl font-bold mt-12 mb-6">
							❓ Perguntas Frequentes
						</h2>

						<div className="space-y-6">
							<Card>
								<CardContent className="p-6">
									<h3 className="font-bold mb-2">
										Posso aprender as duas ao mesmo tempo?
									</h3>
									<p className="text-sm text-muted-foreground">
										<strong>Não recomendo.</strong> É melhor dominar uma
										primeiro (6-9 meses) e depois aprender a segunda em 2-3
										meses. A segunda linguagem é MUITO mais rápida de aprender.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className="p-6">
									<h3 className="font-bold mb-2">
										Se eu escolher errado, perdi tempo?
									</h3>
									<p className="text-sm text-muted-foreground">
										<strong>Não!</strong> Os conceitos fundamentais (lógica,
										algoritmos, estruturas de dados) são os mesmos. Mudar de
										linguagem leva apenas 1-2 meses depois que você já programa.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className="p-6">
									<h3 className="font-bold mb-2">Python está ultrapassado?</h3>
									<p className="text-sm text-muted-foreground">
										<strong>Muito pelo contrário.</strong> Python é a linguagem
										que mais cresce segundo o TIOBE Index. IA e Machine Learning
										garantem sua relevância pelos próximos 10+ anos.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className="p-6">
									<h3 className="font-bold mb-2">
										JavaScript vai ser substituído?
									</h3>
									<p className="text-sm text-muted-foreground">
										<strong>Improvável.</strong> É a única linguagem nativa dos
										navegadores. WebAssembly complementa, mas não substitui.
										JavaScript é "too big to fail" na web.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className="p-6">
									<h3 className="font-bold mb-2">
										Qual tem melhor trabalho remoto?
									</h3>
									<p className="text-sm text-muted-foreground">
										<strong>JavaScript lidera.</strong> Empresas gringam
										contratam mais devs JS remotos. Python remoto é mais comum
										em cargos de dados/ML (requer mais senioridade).
									</p>
								</CardContent>
							</Card>
						</div>

						<h2 className="text-3xl font-bold mt-12 mb-6">
							🎓 Conclusão: Não Existe Escolha Errada
						</h2>

						<p className="text-lg leading-relaxed">
							A verdade é: <strong>ambas são excelentes escolhas</strong> e vão
							te dar uma carreira sólida em tech. A decisão final deve
							considerar:
						</p>

						<Card className="my-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
							<CardContent className="p-8">
								<ul className="space-y-3">
									<li className="flex items-start gap-3">
										<span className="text-2xl">🎯</span>
										<div>
											<strong>Seu objetivo profissional:</strong> dados/IA
											(Python) ou web/apps (JavaScript)
										</div>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-2xl">💰</span>
										<div>
											<strong>Urgência de renda:</strong> JavaScript tem mais
											vagas júnior disponíveis
										</div>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-2xl">❤️</span>
										<div>
											<strong>O que te motiva:</strong> resolver problemas
											lógicos (Python) ou criar interfaces (JS)
										</div>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-2xl">📈</span>
										<div>
											<strong>Longo prazo:</strong> ambas pagam bem no nível
											sênior (R$ 15k-28k/mês)
										</div>
									</li>
								</ul>

								<div className="mt-8 p-6 bg-background rounded-lg border-2 border-primary">
									<p className="text-center font-bold text-lg mb-3">
										🚀 Quer um Plano Completo para Dominar Sua Linguagem
										Escolhida?
									</p>
									<p className="text-center text-muted-foreground mb-4">
										Baixe nosso guia <strong>GRATUITO</strong> com roadmap
										detalhado, projetos práticos e checklist de empregabilidade.
									</p>
									<div className="flex justify-center">
										<Button size="lg" className="gap-2">
											📥 Baixar Guia Completo (Grátis)
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>

						<div className="bg-accent/50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
							<p className="font-semibold mb-2">💬 Qual você vai escolher?</p>
							<p className="text-sm">
								Deixe nos comentários qual linguagem você decidiu aprender e por
								quê. Vou responder todas as dúvidas! 👇
							</p>
						</div>

						<div className="mt-12 pt-8 border-t">
							<p className="text-sm text-muted-foreground">
								<strong>Fontes e Referências:</strong>
							</p>
							<ul className="text-sm text-muted-foreground space-y-1 mt-2">
								<li>
									• TIOBE Index (outubro 2025) - Rankings de linguagens de
									programação
								</li>
								<li>
									• Stack Overflow Developer Survey 2025 - Salários e tendências
								</li>
								<li>
									• LinkedIn Talent Insights Brasil 2025 - Demanda por vagas
								</li>
								<li>• Glassdoor Brasil - Faixas salariais atualizadas</li>
								<li>• Catho & Trabalha Brasil - Médias salariais regionais</li>
								<li>
									• GitHub State of the Octoverse 2025 - Estatísticas de
									repositórios
								</li>
							</ul>
						</div>
					</div>
				</article>
			</div>
		</>
	);
};

export default PythonVsJavaScript;
