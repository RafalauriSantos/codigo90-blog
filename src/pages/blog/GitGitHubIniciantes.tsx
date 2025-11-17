import {
	ArrowLeft,
	GitBranch,
	GitCommit,
	GitMerge,
	GitPullRequest,
	Code2,
	Terminal,
	FolderGit,
	Users,
	BookOpen,
	Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

const GitGitHubIniciantes = () => {
	return (
		<>
			<SEO
				title="Git e GitHub para Iniciantes: Guia Completo 2025"
				description="Aprenda Git e GitHub do zero com tutorial prático e direto ao ponto. Comandos essenciais, workflow profissional e como usar no dia a dia. Guia completo para iniciantes em programação."
				keywords={[
					"git para iniciantes",
					"github tutorial",
					"aprender git",
					"comandos git básicos",
					"controle de versão",
					"git github diferença",
					"como usar git",
					"git workflow",
					"git e github 2025",
					"versionamento código",
				]}
				canonical="https://codigo90-blog.vercel.app/blog/git-github-iniciantes"
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
							<span>16 min de leitura</span>
						</div>
						<h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
							Git e GitHub para Iniciantes: Guia Completo e Prático
						</h1>
						<p className="text-xl text-muted-foreground">
							Aprenda os comandos essenciais, o workflow profissional e como
							colaborar em projetos. Tutorial direto ao ponto, sem enrolação.
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
									href="#o-que-e"
									className="block text-sm hover:text-primary transition-colors">
									→ O Que São Git e GitHub?
								</a>
								<a
									href="#diferenca"
									className="block text-sm hover:text-primary transition-colors">
									→ Diferença Entre Git e GitHub
								</a>
								<a
									href="#instalacao"
									className="block text-sm hover:text-primary transition-colors">
									→ Instalação e Configuração
								</a>
								<a
									href="#conceitos-basicos"
									className="block text-sm hover:text-primary transition-colors">
									→ Conceitos Fundamentais
								</a>
								<a
									href="#comandos-essenciais"
									className="block text-sm hover:text-primary transition-colors">
									→ 15 Comandos Essenciais
								</a>
								<a
									href="#workflow"
									className="block text-sm hover:text-primary transition-colors">
									→ Workflow Profissional
								</a>
								<a
									href="#github-pratica"
									className="block text-sm hover:text-primary transition-colors">
									→ GitHub na Prática
								</a>
								<a
									href="#erros-comuns"
									className="block text-sm hover:text-primary transition-colors">
									→ Erros Comuns e Como Evitar
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
						{/* O Que É */}
						<section id="o-que-e" className="mb-12">
							<h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
								<FolderGit className="h-8 w-8 text-primary" />O Que São Git e
								GitHub?
							</h2>

							<div className="grid md:grid-cols-2 gap-6 my-8">
								<Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-500/20">
									<CardContent className="p-6">
										<GitBranch className="h-10 w-10 text-orange-500 mb-3" />
										<h3 className="text-xl font-bold mb-2">Git</h3>
										<p className="text-sm text-muted-foreground">
											Sistema de controle de versão distribuído. Registra todas
											as mudanças no seu código ao longo do tempo.
										</p>
									</CardContent>
								</Card>

								<Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-500/20">
									<CardContent className="p-6">
										<Users className="h-10 w-10 text-purple-500 mb-3" />
										<h3 className="text-xl font-bold mb-2">GitHub</h3>
										<p className="text-sm text-muted-foreground">
											Plataforma de hospedagem de código baseada em Git. Permite
											colaboração, backup e portfólio público.
										</p>
									</CardContent>
								</Card>
							</div>

							<p className="text-lg leading-relaxed mb-6">
								<strong>Git</strong> é como uma "máquina do tempo" para o seu
								código. Você pode voltar para qualquer versão anterior, ver o
								que mudou, e trabalhar em várias funcionalidades ao mesmo tempo
								sem bagunçar nada.
							</p>

							<p className="text-lg leading-relaxed mb-6">
								<strong>GitHub</strong> é onde você guarda esse código online,
								mostra para o mundo (seu portfólio), e colabora com outros
								desenvolvedores. Pense nele como o "Instagram dos programadores"
								- mas em vez de fotos, você posta código.
							</p>

							<div className="bg-muted/50 border-l-4 border-primary p-6 my-8">
								<p className="text-base font-semibold mb-2">
									📊 Por Que Aprender Git?
								</p>
								<p className="text-base leading-relaxed mb-4">
									Segundo pesquisa da <strong>Stack Overflow 2025</strong>,{" "}
									<strong>96.7% dos desenvolvedores profissionais</strong> usam
									Git diariamente. É a ferramenta #1 mais requisitada em vagas
									de emprego tech no Brasil.
								</p>
								<p className="text-base leading-relaxed">
									<strong>GitHub</strong> tem mais de{" "}
									<strong>128 milhões de desenvolvedores</strong> ativos e é
									usado por 90% das empresas Fortune 100.
								</p>
							</div>
						</section>

						{/* Diferença */}
						<section id="diferenca" className="mb-12">
							<h2 className="text-3xl font-bold mb-6">
								Git vs GitHub: Qual a Diferença?
							</h2>

							<p className="text-lg leading-relaxed mb-6">
								Essa confusão é super comum no início. Vamos esclarecer de uma
								vez:
							</p>

							<div className="space-y-4 mb-8">
								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3 flex items-center gap-2">
											<GitBranch className="h-6 w-6 text-orange-500" />
											Git (Software Local)
										</h3>
										<ul className="space-y-2 text-base">
											<li>
												✅ <strong>Roda no seu computador</strong> - Funciona
												offline
											</li>
											<li>
												✅ <strong>Controle de versão</strong> - Histórico de
												mudanças
											</li>
											<li>
												✅ <strong>Branches locais</strong> - Trabalhe em várias
												funcionalidades
											</li>
											<li>
												✅ <strong>Gratuito e open source</strong> - Criado por
												Linus Torvalds (criador do Linux)
											</li>
										</ul>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3 flex items-center gap-2">
											<Users className="h-6 w-6 text-purple-500" />
											GitHub (Plataforma Online)
										</h3>
										<ul className="space-y-2 text-base">
											<li>
												✅ <strong>Armazena código na nuvem</strong> - Backup
												automático
											</li>
											<li>
												✅ <strong>Colaboração</strong> - Pull requests, code
												review, issues
											</li>
											<li>
												✅ <strong>Portfólio público</strong> - Recrutadores
												veem seu código
											</li>
											<li>
												✅ <strong>CI/CD integrado</strong> - GitHub Actions
												para automação
											</li>
										</ul>
									</CardContent>
								</Card>
							</div>

							<div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-lg mb-6">
								<p className="text-base font-semibold mb-2">
									💡 Analogia Simples
								</p>
								<p className="text-base leading-relaxed">
									<strong>Git</strong> é como o Microsoft Word com "Track
									Changes" ativado - você vê todas as alterações e pode desfazer
									qualquer coisa.
								</p>
								<p className="text-base leading-relaxed mt-3">
									<strong>GitHub</strong> é como o Google Drive onde você guarda
									esse documento, compartilha com colegas e todos podem sugerir
									edições.
								</p>
							</div>

							<p className="text-lg leading-relaxed mb-6">
								<strong>Alternativas ao GitHub:</strong> GitLab, Bitbucket,
								Azure DevOps. Mas GitHub é o mais popular -{" "}
								<strong>128 milhões de usuários</strong> vs 30 milhões do
								GitLab.
							</p>
						</section>

						{/* Instalação */}
						<section id="instalacao" className="mb-12">
							<h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
								<Terminal className="h-8 w-8 text-primary" />
								Instalação e Configuração Inicial
							</h2>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Passo 1: Instalar o Git
							</h3>

							<div className="space-y-4 mb-6">
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">🪟 Windows</h4>
										<p className="text-sm text-muted-foreground mb-3">
											Baixe o instalador oficial:{" "}
											<code className="bg-muted px-2 py-1 rounded">
												https://git-scm.com/download/win
											</code>
										</p>
										<p className="text-sm text-muted-foreground">
											Durante instalação, marque "Git Bash" e "Git from the
											command line".
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">🍎 macOS</h4>
										<p className="text-sm text-muted-foreground mb-3">
											Abra o Terminal e digite:
										</p>
										<code className="block bg-muted px-4 py-3 rounded text-sm">
											brew install git
										</code>
										<p className="text-sm text-muted-foreground mt-3">
											(Se não tiver Homebrew:{" "}
											<code className="bg-muted px-2 py-1 rounded">
												/bin/bash -c "$(curl -fsSL
												https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
											</code>
											)
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">🐧 Linux (Ubuntu/Debian)</h4>
										<code className="block bg-muted px-4 py-3 rounded text-sm">
											sudo apt update
											<br />
											sudo apt install git
										</code>
									</CardContent>
								</Card>
							</div>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Passo 2: Verificar Instalação
							</h3>

							<div className="bg-muted p-4 rounded-lg mb-6">
								<code className="text-sm">git --version</code>
								<p className="text-sm text-muted-foreground mt-2">
									Deve retornar algo como: <code>git version 2.43.0</code>
								</p>
							</div>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Passo 3: Configurar Identidade
							</h3>

							<p className="text-lg leading-relaxed mb-4">
								Git precisa saber quem você é para registrar autoria nos
								commits:
							</p>

							<div className="bg-muted p-4 rounded-lg mb-6">
								<code className="text-sm block mb-2">
									git config --global user.name "Seu Nome"
								</code>
								<code className="text-sm block">
									git config --global user.email "seuemail@exemplo.com"
								</code>
							</div>

							<p className="text-sm text-muted-foreground mb-6">
								⚠️ Use o <strong>mesmo email do GitHub</strong> para commits
								aparecerem no seu perfil.
							</p>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Passo 4: Criar Conta no GitHub
							</h3>

							<ol className="space-y-3 mb-6 text-base">
								<li>
									<strong>1.</strong> Acesse{" "}
									<code className="bg-muted px-2 py-1 rounded">
										https://github.com
									</code>
								</li>
								<li>
									<strong>2.</strong> Clique em "Sign up" e siga o cadastro
								</li>
								<li>
									<strong>3.</strong> Escolha um username profissional (ex:
									seuNomeSobrenome)
								</li>
								<li>
									<strong>4.</strong> Confirme o email de verificação
								</li>
							</ol>

							<div className="bg-muted/50 border-l-4 border-primary p-6 my-8">
								<p className="text-base font-semibold mb-2">
									💡 Dica de Username
								</p>
								<p className="text-base leading-relaxed">
									Seu username do GitHub vai aparecer no currículo e será visto
									por recrutadores. Evite apelidos como "xXCoderProXx" - prefira
									algo profissional como <code>joaosilva</code> ou{" "}
									<code>joao-silva-dev</code>.
								</p>
							</div>
						</section>

						{/* Conceitos Básicos */}
						<section id="conceitos-basicos" className="mb-12">
							<h2 className="text-3xl font-bold mb-6">
								Conceitos Fundamentais que Você Precisa Saber
							</h2>

							<p className="text-lg leading-relaxed mb-6">
								Antes de partir para os comandos, entenda esses 6 conceitos.
								Eles vão fazer <strong>tudo</strong> fazer sentido:
							</p>

							<div className="space-y-6">
								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3 flex items-center gap-2">
											<FolderGit className="h-6 w-6 text-primary" />
											1. Repository (Repositório)
										</h3>
										<p className="text-base text-muted-foreground">
											Uma pasta que contém seu projeto + todo o histórico de
											mudanças. Pode estar no seu PC (local) ou no GitHub
											(remoto).
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3 flex items-center gap-2">
											<GitCommit className="h-6 w-6 text-primary" />
											2. Commit
										</h3>
										<p className="text-base text-muted-foreground mb-3">
											Um "checkpoint" do seu código. É como salvar uma versão do
											projeto com uma descrição do que mudou.
										</p>
										<p className="text-sm text-muted-foreground italic">
											Exemplo: "Adiciona validação de formulário" ou "Corrige
											bug no login"
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3 flex items-center gap-2">
											<GitBranch className="h-6 w-6 text-primary" />
											3. Branch (Ramificação)
										</h3>
										<p className="text-base text-muted-foreground">
											Uma linha paralela de desenvolvimento. Permite trabalhar
											em novas funcionalidades sem afetar o código principal
											(geralmente chamado de <code>main</code> ou{" "}
											<code>master</code>
											).
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3 flex items-center gap-2">
											<GitMerge className="h-6 w-6 text-primary" />
											4. Merge (Mesclar)
										</h3>
										<p className="text-base text-muted-foreground">
											Juntar o código de uma branch com outra. Quando termina
											uma funcionalidade, você faz merge para o código
											principal.
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3 flex items-center gap-2">
											<GitPullRequest className="h-6 w-6 text-primary" />
											5. Pull Request (PR)
										</h3>
										<p className="text-base text-muted-foreground">
											Pedido para integrar suas mudanças no código principal.
											Outros desenvolvedores revisam, comentam e aprovam antes
											do merge.
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3 flex items-center gap-2">
											<Zap className="h-6 w-6 text-primary" />
											6. Clone vs Fork
										</h3>
										<p className="text-base text-muted-foreground mb-2">
											<strong>Clone:</strong> Copia um repositório para seu
											computador
										</p>
										<p className="text-base text-muted-foreground">
											<strong>Fork:</strong> Cria uma cópia do repositório na
											sua conta GitHub (para projetos open source que você quer
											contribuir)
										</p>
									</CardContent>
								</Card>
							</div>
						</section>

						{/* Comandos Essenciais */}
						<section id="comandos-essenciais" className="mb-12">
							<h2 className="text-3xl font-bold mb-6">
								Os 15 Comandos Git que Você Vai Usar Todo Dia
							</h2>

							<p className="text-lg leading-relaxed mb-6">
								Existem mais de 100 comandos Git. Mas esses 15 representam{" "}
								<strong>95% do uso diário</strong> de um desenvolvedor.
								Domine-os primeiro.
							</p>

							<div className="space-y-6">
								{/* Comando 1 */}
								<Card className="bg-muted/30">
									<CardContent className="p-6">
										<h3 className="text-lg font-bold mb-3">
											1. <code className="text-primary">git init</code>
										</h3>
										<p className="text-base mb-3">
											Inicializa um repositório Git na pasta atual
										</p>
										<div className="bg-background p-3 rounded-lg mb-3">
											<code className="text-sm">git init</code>
										</div>
										<p className="text-sm text-muted-foreground">
											📁 Cria uma pasta oculta <code>.git</code> que armazena
											todo o histórico
										</p>
									</CardContent>
								</Card>

								{/* Comando 2 */}
								<Card className="bg-muted/30">
									<CardContent className="p-6">
										<h3 className="text-lg font-bold mb-3">
											2. <code className="text-primary">git clone</code>
										</h3>
										<p className="text-base mb-3">
											Baixa um repositório do GitHub para seu computador
										</p>
										<div className="bg-background p-3 rounded-lg mb-3">
											<code className="text-sm">
												git clone https://github.com/usuario/repositorio.git
											</code>
										</div>
										<p className="text-sm text-muted-foreground">
											🌐 Copia tudo: código, histórico, branches
										</p>
									</CardContent>
								</Card>

								{/* Comando 3 */}
								<Card className="bg-muted/30">
									<CardContent className="p-6">
										<h3 className="text-lg font-bold mb-3">
											3. <code className="text-primary">git status</code>
										</h3>
										<p className="text-base mb-3">
											Mostra o estado atual do repositório
										</p>
										<div className="bg-background p-3 rounded-lg mb-3">
											<code className="text-sm">git status</code>
										</div>
										<p className="text-sm text-muted-foreground">
											👁️ Arquivos modificados, novos, deletados - tudo aparece
											aqui
										</p>
									</CardContent>
								</Card>

								{/* Comando 4 */}
								<Card className="bg-muted/30">
									<CardContent className="p-6">
										<h3 className="text-lg font-bold mb-3">
											4. <code className="text-primary">git add</code>
										</h3>
										<p className="text-base mb-3">
											Adiciona arquivos para o próximo commit (staging area)
										</p>
										<div className="bg-background p-3 rounded-lg mb-3">
											<code className="text-sm block mb-1">
												git add arquivo.js # Adiciona 1 arquivo
											</code>
											<code className="text-sm block">
												git add . # Adiciona TODOS os arquivos modificados
											</code>
										</div>
										<p className="text-sm text-muted-foreground">
											📦 É como selecionar quais mudanças vão para o
											"checkpoint"
										</p>
									</CardContent>
								</Card>

								{/* Comando 5 */}
								<Card className="bg-muted/30">
									<CardContent className="p-6">
										<h3 className="text-lg font-bold mb-3">
											5. <code className="text-primary">git commit</code>
										</h3>
										<p className="text-base mb-3">
											Cria o "checkpoint" com uma mensagem descritiva
										</p>
										<div className="bg-background p-3 rounded-lg mb-3">
											<code className="text-sm">
												git commit -m "Adiciona validação de email"
											</code>
										</div>
										<p className="text-sm text-muted-foreground">
											💾 Salva permanentemente as mudanças no histórico
										</p>
									</CardContent>
								</Card>

								{/* Comando 6 */}
								<Card className="bg-muted/30">
									<CardContent className="p-6">
										<h3 className="text-lg font-bold mb-3">
											6. <code className="text-primary">git push</code>
										</h3>
										<p className="text-base mb-3">
											Envia commits locais para o repositório remoto (GitHub)
										</p>
										<div className="bg-background p-3 rounded-lg mb-3">
											<code className="text-sm">git push origin main</code>
										</div>
										<p className="text-sm text-muted-foreground">
											☁️ Sincroniza seu código local com a nuvem
										</p>
									</CardContent>
								</Card>

								{/* Comando 7 */}
								<Card className="bg-muted/30">
									<CardContent className="p-6">
										<h3 className="text-lg font-bold mb-3">
											7. <code className="text-primary">git pull</code>
										</h3>
										<p className="text-base mb-3">
											Baixa mudanças do repositório remoto para o local
										</p>
										<div className="bg-background p-3 rounded-lg mb-3">
											<code className="text-sm">git pull origin main</code>
										</div>
										<p className="text-sm text-muted-foreground">
											⬇️ Sincroniza código do GitHub com seu computador
										</p>
									</CardContent>
								</Card>

								{/* Comando 8 */}
								<Card className="bg-muted/30">
									<CardContent className="p-6">
										<h3 className="text-lg font-bold mb-3">
											8. <code className="text-primary">git branch</code>
										</h3>
										<p className="text-base mb-3">
											Lista, cria ou deleta branches
										</p>
										<div className="bg-background p-3 rounded-lg mb-3">
											<code className="text-sm block mb-1">
												git branch # Lista branches
											</code>
											<code className="text-sm block mb-1">
												git branch nova-funcionalidade # Cria branch
											</code>
											<code className="text-sm block">
												git branch -d nome-branch # Deleta branch
											</code>
										</div>
									</CardContent>
								</Card>

								{/* Comando 9 */}
								<Card className="bg-muted/30">
									<CardContent className="p-6">
										<h3 className="text-lg font-bold mb-3">
											9. <code className="text-primary">git checkout</code>
										</h3>
										<p className="text-base mb-3">
											Troca de branch ou restaura arquivos
										</p>
										<div className="bg-background p-3 rounded-lg mb-3">
											<code className="text-sm block mb-1">
												git checkout nome-branch # Troca para branch
											</code>
											<code className="text-sm block">
												git checkout -b nova-branch # Cria e já muda para ela
											</code>
										</div>
									</CardContent>
								</Card>

								{/* Comando 10 */}
								<Card className="bg-muted/30">
									<CardContent className="p-6">
										<h3 className="text-lg font-bold mb-3">
											10. <code className="text-primary">git merge</code>
										</h3>
										<p className="text-base mb-3">
											Mescla uma branch com outra
										</p>
										<div className="bg-background p-3 rounded-lg mb-3">
											<code className="text-sm">
												git checkout main # Volta para main
												<br />
												git merge nova-funcionalidade # Junta mudanças
											</code>
										</div>
									</CardContent>
								</Card>

								{/* Comando 11 */}
								<Card className="bg-muted/30">
									<CardContent className="p-6">
										<h3 className="text-lg font-bold mb-3">
											11. <code className="text-primary">git log</code>
										</h3>
										<p className="text-base mb-3">
											Mostra histórico de commits
										</p>
										<div className="bg-background p-3 rounded-lg mb-3">
											<code className="text-sm block mb-1">
												git log # Histórico completo
											</code>
											<code className="text-sm block">
												git log --oneline # Versão compacta
											</code>
										</div>
									</CardContent>
								</Card>

								{/* Comando 12 */}
								<Card className="bg-muted/30">
									<CardContent className="p-6">
										<h3 className="text-lg font-bold mb-3">
											12. <code className="text-primary">git diff</code>
										</h3>
										<p className="text-base mb-3">
											Mostra diferenças entre versões
										</p>
										<div className="bg-background p-3 rounded-lg mb-3">
											<code className="text-sm">git diff</code>
										</div>
										<p className="text-sm text-muted-foreground">
											🔍 Linhas vermelhas = deletadas | verdes = adicionadas
										</p>
									</CardContent>
								</Card>

								{/* Comando 13 */}
								<Card className="bg-muted/30">
									<CardContent className="p-6">
										<h3 className="text-lg font-bold mb-3">
											13. <code className="text-primary">git reset</code>
										</h3>
										<p className="text-base mb-3">Desfaz commits ou mudanças</p>
										<div className="bg-background p-3 rounded-lg mb-3">
											<code className="text-sm block mb-1">
												git reset HEAD~1 # Desfaz último commit
											</code>
											<code className="text-sm block">
												git reset --hard # Descarta TODAS as mudanças (cuidado!)
											</code>
										</div>
									</CardContent>
								</Card>

								{/* Comando 14 */}
								<Card className="bg-muted/30">
									<CardContent className="p-6">
										<h3 className="text-lg font-bold mb-3">
											14. <code className="text-primary">git stash</code>
										</h3>
										<p className="text-base mb-3">
											Guarda mudanças temporariamente sem commit
										</p>
										<div className="bg-background p-3 rounded-lg mb-3">
											<code className="text-sm block mb-1">
												git stash # Salva mudanças
											</code>
											<code className="text-sm block">
												git stash pop # Restaura mudanças
											</code>
										</div>
										<p className="text-sm text-muted-foreground">
											🎒 Útil quando precisa trocar de branch rapidamente
										</p>
									</CardContent>
								</Card>

								{/* Comando 15 */}
								<Card className="bg-muted/30">
									<CardContent className="p-6">
										<h3 className="text-lg font-bold mb-3">
											15. <code className="text-primary">git remote</code>
										</h3>
										<p className="text-base mb-3">
											Gerencia repositórios remotos
										</p>
										<div className="bg-background p-3 rounded-lg mb-3">
											<code className="text-sm block mb-1">
												git remote -v # Lista repositórios conectados
											</code>
											<code className="text-sm block">
												git remote add origin URL # Conecta com GitHub
											</code>
										</div>
									</CardContent>
								</Card>
							</div>
						</section>

						{/* Workflow */}
						<section id="workflow" className="mb-12">
							<h2 className="text-3xl font-bold mb-6">
								Workflow Profissional: Como Times Reais Trabalham
							</h2>

							<p className="text-lg leading-relaxed mb-6">
								Entender comandos é importante. Mas saber{" "}
								<strong>quando e como usá-los</strong> é o que separa iniciantes
								de profissionais. Veja o workflow mais comum na indústria:
							</p>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Fluxo Git Flow Simplificado
							</h3>

							<div className="space-y-4 mb-8">
								<Card className="bg-gradient-to-r from-blue-500/10 to-blue-600/5">
									<CardContent className="p-6">
										<h4 className="font-bold mb-3">🌟 Etapa 1: Pegar Tarefa</h4>
										<div className="bg-background p-3 rounded-lg">
											<code className="text-sm block mb-1">
												git pull origin main # Atualiza código
											</code>
											<code className="text-sm block">
												git checkout -b feat/adiciona-login # Cria branch
											</code>
										</div>
									</CardContent>
								</Card>

								<Card className="bg-gradient-to-r from-green-500/10 to-green-600/5">
									<CardContent className="p-6">
										<h4 className="font-bold mb-3">💻 Etapa 2: Desenvolver</h4>
										<p className="text-sm text-muted-foreground mb-3">
											Faça seu código, teste, ajuste...
										</p>
										<div className="bg-background p-3 rounded-lg">
											<code className="text-sm block mb-1">git status</code>
											<code className="text-sm block mb-1">git add .</code>
											<code className="text-sm block">
												git commit -m "feat: Adiciona página de login"
											</code>
										</div>
									</CardContent>
								</Card>

								<Card className="bg-gradient-to-r from-purple-500/10 to-purple-600/5">
									<CardContent className="p-6">
										<h4 className="font-bold mb-3">☁️ Etapa 3: Enviar</h4>
										<div className="bg-background p-3 rounded-lg">
											<code className="text-sm">
												git push origin feat/adiciona-login
											</code>
										</div>
									</CardContent>
								</Card>

								<Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/5">
									<CardContent className="p-6">
										<h4 className="font-bold mb-3">🔄 Etapa 4: Pull Request</h4>
										<p className="text-sm text-muted-foreground">
											No GitHub: "Compare & pull request" → Preenche descrição →
											Pede review
										</p>
									</CardContent>
								</Card>

								<Card className="bg-gradient-to-r from-red-500/10 to-red-600/5">
									<CardContent className="p-6">
										<h4 className="font-bold mb-3">✅ Etapa 5: Merge</h4>
										<p className="text-sm text-muted-foreground">
											Após aprovação: "Merge pull request" no GitHub
										</p>
									</CardContent>
								</Card>
							</div>

							<div className="bg-muted/50 border-l-4 border-primary p-6 my-8">
								<p className="text-base font-semibold mb-2">
									🏢 Nomenclatura de Branches Profissional
								</p>
								<ul className="space-y-2 text-base">
									<li>
										• <code>feat/nome-funcionalidade</code> - Nova feature
									</li>
									<li>
										• <code>fix/corrige-bug</code> - Correção de bug
									</li>
									<li>
										• <code>hotfix/correcao-urgente</code> - Correção crítica
									</li>
									<li>
										• <code>refactor/melhora-codigo</code> - Refatoração
									</li>
									<li>
										• <code>docs/atualiza-readme</code> - Documentação
									</li>
								</ul>
							</div>
						</section>

						{/* GitHub na Prática */}
						<section id="github-pratica" className="mb-12">
							<h2 className="text-3xl font-bold mb-6">
								GitHub na Prática: Seu Primeiro Repositório
							</h2>

							<p className="text-lg leading-relaxed mb-6">
								Vamos criar seu primeiro projeto no GitHub do zero. Siga passo a
								passo:
							</p>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Cenário 1: Projeto Novo do Zero
							</h3>

							<ol className="space-y-4 mb-8">
								<li className="text-base">
									<strong>1. No GitHub:</strong> Clique em "New repository"
									<ul className="ml-6 mt-2 space-y-1 text-sm text-muted-foreground">
										<li>
											• Nome: <code>meu-primeiro-projeto</code>
										</li>
										<li>• Description: "Projeto de teste Git/GitHub"</li>
										<li>• ✅ Marque "Add README file"</li>
										<li>• Clique "Create repository"</li>
									</ul>
								</li>

								<li className="text-base">
									<strong>2. Clonar para seu PC:</strong>
									<div className="bg-muted p-3 rounded-lg mt-2">
										<code className="text-sm">
											git clone
											https://github.com/SEU-USERNAME/meu-primeiro-projeto.git
											<br />
											cd meu-primeiro-projeto
										</code>
									</div>
								</li>

								<li className="text-base">
									<strong>3. Criar arquivo:</strong>
									<div className="bg-muted p-3 rounded-lg mt-2">
										<code className="text-sm">
											echo "console.log('Hello Git!');" &gt; index.js
										</code>
									</div>
								</li>

								<li className="text-base">
									<strong>4. Commitar e enviar:</strong>
									<div className="bg-muted p-3 rounded-lg mt-2">
										<code className="text-sm">
											git add index.js
											<br />
											git commit -m "Adiciona primeiro arquivo"
											<br />
											git push origin main
										</code>
									</div>
								</li>
							</ol>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Cenário 2: Projeto Local Já Existe
							</h3>

							<ol className="space-y-4 mb-8">
								<li className="text-base">
									<strong>1. No terminal (dentro da pasta do projeto):</strong>
									<div className="bg-muted p-3 rounded-lg mt-2">
										<code className="text-sm">git init</code>
									</div>
								</li>

								<li className="text-base">
									<strong>2. No GitHub:</strong> Crie repositório (sem README)
								</li>

								<li className="text-base">
									<strong>3. Conectar e enviar:</strong>
									<div className="bg-muted p-3 rounded-lg mt-2">
										<code className="text-sm">
											git add .
											<br />
											git commit -m "Initial commit"
											<br />
											git remote add origin
											https://github.com/SEU-USERNAME/projeto.git
											<br />
											git push -u origin main
										</code>
									</div>
								</li>
							</ol>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Funcionalidades Importantes do GitHub
							</h3>

							<div className="grid md:grid-cols-2 gap-4 mb-6">
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">📋 Issues</h4>
										<p className="text-sm text-muted-foreground">
											Rastreamento de bugs e tarefas. Como um "to-do list" do
											projeto.
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">🔀 Pull Requests</h4>
										<p className="text-sm text-muted-foreground">
											Revisão de código antes de merge. Discussões, sugestões,
											aprovações.
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">⚡ GitHub Actions</h4>
										<p className="text-sm text-muted-foreground">
											Automação de testes, deploy, CI/CD - tudo no próprio
											GitHub.
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">📊 Insights</h4>
										<p className="text-sm text-muted-foreground">
											Gráficos de contribuições, commits, pulse do projeto.
										</p>
									</CardContent>
								</Card>
							</div>
						</section>

						{/* Erros Comuns */}
						<section id="erros-comuns" className="mb-12">
							<h2 className="text-3xl font-bold mb-6">
								Erros Comuns de Iniciantes (e Como Resolver)
							</h2>

							<div className="space-y-6">
								<Card className="border-red-500/20">
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3 text-red-500">
											❌ Erro 1: "fatal: not a git repository"
										</h3>
										<p className="text-base mb-3">
											<strong>Causa:</strong> Você está tentando usar comandos
											Git fora de um repositório.
										</p>
										<p className="text-base text-green-600">
											<strong>Solução:</strong> Rode <code>git init</code> ou{" "}
											<code>cd</code> para dentro da pasta do projeto.
										</p>
									</CardContent>
								</Card>

								<Card className="border-red-500/20">
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3 text-red-500">
											❌ Erro 2: "Your branch is ahead of 'origin/main'"
										</h3>
										<p className="text-base mb-3">
											<strong>Causa:</strong> Você fez commits locais que não
											foram enviados ao GitHub.
										</p>
										<p className="text-base text-green-600">
											<strong>Solução:</strong>{" "}
											<code>git push origin main</code>
										</p>
									</CardContent>
								</Card>

								<Card className="border-red-500/20">
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3 text-red-500">
											❌ Erro 3: Conflitos de Merge
										</h3>
										<p className="text-base mb-3">
											<strong>Causa:</strong> Duas pessoas editaram a mesma
											linha do código.
										</p>
										<p className="text-base text-green-600 mb-3">
											<strong>Solução:</strong>
										</p>
										<ol className="text-sm space-y-2">
											<li>
												1. Abra os arquivos com conflito
												(&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD)
											</li>
											<li>2. Escolha qual versão manter (ou combine ambas)</li>
											<li>
												3. Remova os marcadores (&lt;&lt;&lt;&lt;&lt;&lt;&lt;,
												=======, &gt;&gt;&gt;&gt;&gt;&gt;&gt;)
											</li>
											<li>
												4. <code>git add .</code> → <code>git commit</code>
											</li>
										</ol>
									</CardContent>
								</Card>

								<Card className="border-red-500/20">
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3 text-red-500">
											❌ Erro 4: "Permission denied (publickey)"
										</h3>
										<p className="text-base mb-3">
											<strong>Causa:</strong> GitHub não reconhece sua
											autenticação.
										</p>
										<p className="text-base text-green-600">
											<strong>Solução:</strong> Configure SSH key ou use HTTPS
											com Personal Access Token (Settings → Developer settings →
											Tokens)
										</p>
									</CardContent>
								</Card>

								<Card className="border-red-500/20">
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3 text-red-500">
											❌ Erro 5: Commitou arquivo gigante ou senha
										</h3>
										<p className="text-base mb-3">
											<strong>Causa:</strong> Adicionou acidentalmente arquivo
											grande (&gt;100MB) ou credenciais.
										</p>
										<p className="text-base text-green-600 mb-3">
											<strong>Solução:</strong>
										</p>
										<div className="bg-background p-3 rounded-lg">
											<code className="text-sm block mb-1">
												git rm --cached arquivo-grande.zip
											</code>
											<code className="text-sm block">
												echo "arquivo-grande.zip" &gt;&gt; .gitignore
											</code>
										</div>
										<p className="text-sm text-muted-foreground mt-3">
											⚠️ Se já deu push: use <code>git filter-branch</code> ou
											BFG Repo-Cleaner
										</p>
									</CardContent>
								</Card>
							</div>

							<div className="bg-muted/50 border-l-4 border-primary p-6 my-8">
								<p className="text-base font-semibold mb-2">
									💡 Dica: Arquivo .gitignore
								</p>
								<p className="text-base leading-relaxed mb-3">
									Sempre crie um <code>.gitignore</code> para evitar commitar
									arquivos desnecessários:
								</p>
								<div className="bg-background p-3 rounded-lg">
									<code className="text-sm">
										node_modules/
										<br />
										.env
										<br />
										dist/
										<br />
										*.log
										<br />
										.DS_Store
									</code>
								</div>
								<p className="text-sm text-muted-foreground mt-3">
									Use <code>https://gitignore.io</code> para gerar
									automaticamente baseado na linguagem.
								</p>
							</div>
						</section>

						{/* Conclusão */}
						<section id="conclusao" className="mb-12">
							<h2 className="text-3xl font-bold mb-6">
								Conclusão: Você Está Pronto para Começar
							</h2>

							<p className="text-lg leading-relaxed mb-6">
								Git e GitHub são as ferramentas mais importantes da carreira de
								qualquer desenvolvedor. <strong>96.7% dos devs</strong> usam
								diariamente - não é opcional, é essencial.
							</p>

							<div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-8 rounded-lg mb-6">
								<h3 className="text-xl font-bold mb-4">
									🎯 Recapitulando: O Mínimo que Você Precisa Dominar
								</h3>
								<ul className="space-y-3">
									<li className="text-base">
										✅ <strong>Comandos básicos:</strong> init, clone, add,
										commit, push, pull
									</li>
									<li className="text-base">
										✅ <strong>Branches:</strong> Criar, trocar, mergear
									</li>
									<li className="text-base">
										✅ <strong>GitHub:</strong> Criar repo, fazer clone, abrir
										PR
									</li>
									<li className="text-base">
										✅ <strong>Workflow:</strong> Entender Git Flow básico
									</li>
									<li className="text-base">
										✅ <strong>Resolver conflitos:</strong> Merge conflicts
										simples
									</li>
								</ul>
							</div>

							<h3 className="text-2xl font-bold mt-8 mb-4">
								Seu Plano de 7 Dias para Dominar Git
							</h3>

							<div className="space-y-4 mb-8">
								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">Dia 1-2: Fundamentos</h4>
										<p className="text-sm text-muted-foreground">
											Instale Git, configure, pratique init, add, commit, status
											em projetos locais.
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">Dia 3-4: GitHub</h4>
										<p className="text-sm text-muted-foreground">
											Crie conta, primeiro repositório, pratique push/pull,
											explore projetos open source.
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">Dia 5-6: Branches</h4>
										<p className="text-sm text-muted-foreground">
											Crie branches, faça merge, simule conflitos e resolva-os.
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-5">
										<h4 className="font-bold mb-2">Dia 7: Workflow Real</h4>
										<p className="text-sm text-muted-foreground">
											Faça um Pull Request em projeto open source (mesmo que
											seja correção de typo no README). Experiência real!
										</p>
									</CardContent>
								</Card>
							</div>

							<div className="bg-muted/50 border-l-4 border-primary p-6 my-8">
								<p className="text-base font-semibold mb-2">
									🚀 Próximos Passos
								</p>
								<ul className="space-y-2 text-base">
									<li>
										• <strong>Pratique diariamente:</strong> Todo projeto que
										você fizer, use Git
									</li>
									<li>
										• <strong>Contribua open source:</strong> Comece com issues
										"good first issue"
									</li>
									<li>
										• <strong>Explore GitHub:</strong> Stars, Watch, Fork -
										aprenda com código de outros
									</li>
									<li>
										• <strong>Aprenda Git avançado:</strong> rebase,
										cherry-pick, bisect (quando dominar o básico)
									</li>
								</ul>
							</div>

							<Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
								<CardContent className="p-8">
									<h3 className="text-xl font-bold mb-4">
										📚 Quer Se Aprofundar Ainda Mais?
									</h3>
									<p className="text-base mb-4">
										Criamos um guia avançado com workflows profissionais, Git
										Hooks, estratégias de branching para times e automação com
										GitHub Actions. Tudo gratuito.
									</p>
									<Button size="lg" className="w-full md:w-auto">
										Baixar Guia Avançado
									</Button>
								</CardContent>
							</Card>
						</section>

						{/* Fontes */}
						<section className="mt-12 pt-8 border-t">
							<h3 className="text-xl font-bold mb-4">Fontes e Referências</h3>
							<div className="text-sm text-muted-foreground space-y-2">
								<p>
									• Stack Overflow Developer Survey 2025 - Uso de Git na
									indústria
								</p>
								<p>
									• GitHub Octoverse Report 2025 - Estatísticas da plataforma
								</p>
								<p>
									• Git Official Documentation - Documentação oficial{" "}
									<code>https://git-scm.com/doc</code>
								</p>
								<p>
									• GitHub Skills - Tutoriais interativos{" "}
									<code>https://skills.github.com</code>
								</p>
								<p>
									• Pro Git Book (gratuito) - Livro completo sobre Git{" "}
									<code>https://git-scm.com/book</code>
								</p>
								<p>• Atlassian Git Tutorial - Guias práticos de Git/GitHub</p>
							</div>
						</section>
					</div>
				</article>
			</div>
		</>
	);
};

export default GitGitHubIniciantes;
