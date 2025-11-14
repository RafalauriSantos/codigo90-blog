import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-developer.jpg";
import EmailCaptureModal from "./EmailCaptureModal";

const Hero = () => {
	const [showEmailModal, setShowEmailModal] = useState(false);

	return (
		<>
			<EmailCaptureModal
				open={showEmailModal}
				onOpenChange={setShowEmailModal}
			/>
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70 z-10" />
					<img
						src={heroImage}
						alt="Desenvolvedor profissional trabalhando"
						className="w-full h-full object-cover opacity-40"
					/>
				</div>

				{/* Animated Background Elements */}
				<div className="absolute inset-0 z-0">
					<div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
					<div
						className="absolute bottom-20 right-10 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl animate-float"
						style={{ animationDelay: "2s" }}
					/>
				</div>

				{/* Content */}
				<div className="container mx-auto px-4 z-20 relative">
					<div className="max-w-4xl mx-auto text-center space-y-8">
						{/* Badge */}
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20">
							<Sparkles className="w-4 h-4 text-primary" />
							<span className="text-sm font-medium text-foreground">
								Transforme sua carreira em 90 dias
							</span>
						</div>

						{/* Main Title */}
						<h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
							<span className="block mb-2">Código 90</span>
							<span className="block text-gradient">Sua Carreira em Tech</span>
							<span className="block text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground/80">
								em 3 Meses
							</span>
						</h1>

						{/* Subtitle */}
						<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
							Do zero ao seu primeiro emprego como programador. Aprenda as
							habilidades mais demandadas do mercado com um plano intensivo e
							comprovado.
						</p>

						{/* Stats */}
						<div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto py-8">
							<div className="space-y-1">
								<div className="text-3xl md:text-4xl font-bold text-primary">
									530mil
								</div>
								<div className="text-xs md:text-sm text-muted-foreground">
									vagas em aberto
								</div>
							</div>
							<div className="space-y-1">
								<div className="text-3xl md:text-4xl font-bold text-primary">
									3x
								</div>
								<div className="text-xs md:text-sm text-muted-foreground">
									salário médio nacional
								</div>
							</div>
							<div className="space-y-1">
								<div className="text-3xl md:text-4xl font-bold text-primary">
									90
								</div>
								<div className="text-xs md:text-sm text-muted-foreground">
									dias intensivos
								</div>
							</div>
						</div>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button
								size="lg"
								className="group bg-primary hover:bg-primary/90 text-primary-foreground glow"
								onClick={() => {
									console.log("Botão clicado! Abrindo modal...");
									setShowEmailModal(true);
								}}>
								<Code2 className="w-5 h-5 mr-2" />
								Baixar Guia Grátis
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
								Conhecer o Método
							</Button>
						</div>

						{/* Trust Badge */}
						<p className="text-sm text-muted-foreground pt-4">
							Baseado em histórias reais de profissionais que mudaram de
							carreira
						</p>
					</div>
				</div>

				{/* Bottom Gradient */}
				<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
			</section>
		</>
	);
};

export default Hero;
