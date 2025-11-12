import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import EmailCaptureModal from "./EmailCaptureModal";

const CTA = () => {
	const [showEmailModal, setShowEmailModal] = useState(false);

	return (
		<>
			<EmailCaptureModal
				open={showEmailModal}
				onOpenChange={setShowEmailModal}
			/>
			<section className="py-20 relative overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-tech-blue/10" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl" />

				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-4xl mx-auto">
						<div className="text-center space-y-8 p-12 rounded-3xl bg-card/50 backdrop-blur-sm border border-primary/20">
							{/* Badge */}
							<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
								<Sparkles className="w-4 h-4 text-primary" />
								<span className="text-sm font-medium text-primary">
									Comece sua jornada hoje
								</span>
							</div>

							{/* Title */}
							<h2 className="text-4xl md:text-6xl font-bold">
								Pronto para Transformar <br />
								<span className="text-gradient">Sua Carreira?</span>
							</h2>

							{/* Description */}
							<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
								Em 90 dias você pode estar pronto para entrar no mercado mais
								aquecido do Brasil. O momento é agora. As oportunidades estão
								esperando.
							</p>

							{/* CTA Buttons */}
							<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
								<Button
									size="lg"
									className="group bg-primary hover:bg-primary/90 text-primary-foreground glow"
									onClick={() => setShowEmailModal(true)}>
									<BookOpen className="w-5 h-5 mr-2" />
									Baixar eBook GRÁTIS
									<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-primary/50 hover:bg-primary/10"
									onClick={() => {
										document
											.getElementById("timeline")
											?.scrollIntoView({ behavior: "smooth" });
									}}>
									Ver Plano Completo
								</Button>
							</div>

							{/* Features List */}
							<div className="grid md:grid-cols-3 gap-6 pt-8">
								<div className="text-center">
									<div className="text-2xl font-bold text-primary mb-2">
										Guia Completo
									</div>
									<div className="text-sm text-muted-foreground">
										Roteiro detalhado mês a mês
									</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-primary mb-2">
										Recursos Gratuitos
									</div>
									<div className="text-sm text-muted-foreground">
										Links para cursos e ferramentas
									</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-primary mb-2">
										Casos Reais
									</div>
									<div className="text-sm text-muted-foreground">
										Histórias de sucesso comprovadas
									</div>
								</div>
							</div>

							{/* Trust Badge */}
							<p className="text-xs text-muted-foreground pt-4">
								Baseado em pesquisas do Google, dados do mercado brasileiro e
								histórias reais de profissionais
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CTA;
