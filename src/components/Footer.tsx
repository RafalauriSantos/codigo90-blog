import { Code2, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
	return (
		<footer className="py-12 border-t border-border">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-4 gap-8 mb-8">
					{/* Brand */}
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<Code2 className="w-6 h-6 text-primary" />
							<span className="text-xl font-bold">Código 90</span>
						</div>
						<p className="text-sm text-muted-foreground">
							Transforme sua carreira em tech em apenas 90 dias com um plano
							estruturado e comprovado.
						</p>
					</div>

					{/* Links */}
					<div>
						<h3 className="font-semibold mb-4">Recursos</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>
								<a
									href="#timeline"
									className="hover:text-primary transition-colors">
									Sobre o Método
								</a>
							</li>
							<li>
								<a
									href="#timeline"
									className="hover:text-primary transition-colors">
									Plano de Estudos
								</a>
							</li>
							<li>
								<a
									href="#testimonials"
									className="hover:text-primary transition-colors">
									Histórias de Sucesso
								</a>
							</li>
							<li>
								<a
									href="#stats"
									className="hover:text-primary transition-colors">
									Estatísticas do Mercado
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Comunidade</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>
								<a
									href="/blog"
									className="hover:text-primary transition-colors">
									Blog
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Fórum
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Eventos
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Newsletter
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Legal</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Termos de Uso
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Política de Privacidade
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Contato
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom */}
				<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
					<p className="text-sm text-muted-foreground">
						© 2025 Código 90. Todos os direitos reservados.
					</p>

					{/* Social Links */}
					<div className="flex items-center gap-4">
						<a
							href="#"
							className="text-muted-foreground hover:text-primary transition-colors">
							<Github className="w-5 h-5" />
						</a>
						<a
							href="#"
							className="text-muted-foreground hover:text-primary transition-colors">
							<Linkedin className="w-5 h-5" />
						</a>
						<a
							href="#"
							className="text-muted-foreground hover:text-primary transition-colors">
							<Twitter className="w-5 h-5" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
