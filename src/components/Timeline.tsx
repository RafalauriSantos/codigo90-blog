import { Book, Code, Rocket, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Timeline = () => {
	const months = [
		{
			month: "Mês 1",
			title: "A Fundação",
			period: "Dias 1-30",
			icon: Book,
			color: "from-primary/20 to-tech-blue/20",
			items: [
				"Escolha UMA linguagem (Python ou JavaScript)",
				"Domine a Lógica de Programação",
				"Aprenda os fundamentos da linguagem",
				"Pratique diariamente (2-3h por dia)",
				"Escreva pequenos programas funcionais",
			],
		},
		{
			month: "Mês 2",
			title: "Construindo Projetos",
			period: "Dias 31-60",
			icon: Code,
			color: "from-tech-blue/20 to-primary/20",
			items: [
				"Aprofunde-se em um Framework (React ou Django)",
				"Construa 3 a 5 pequenos projetos",
				"Aprenda Git e GitHub",
				"Abrace o erro como parte do aprendizado",
				"Monte seu portfólio inicial",
			],
		},
		{
			month: "Mês 3",
			title: "Do Portfólio ao Contrato",
			period: "Dias 61-90",
			icon: Rocket,
			color: "from-primary/20 to-tech-cyan/20",
			items: [
				"Polir suas habilidades",
				"Criar projetos profissionais para o portfólio",
				"Otimizar LinkedIn e GitHub",
				"Preparar-se para entrevistas técnicas",
				"Conquistar seu primeiro emprego",
			],
		},
	];

	return (
		<section id="timeline" className="py-20 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tech-blue/5 rounded-full blur-3xl" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Seu Plano de Ação <span className="text-gradient">Mês a Mês</span>
					</h2>
					<p className="text-lg text-muted-foreground">
						Um roteiro intensivo e estruturado para te levar do zero ao primeiro
						emprego em tech
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{months.map((month, index) => (
						<Card
							key={index}
							className="relative overflow-hidden group hover:scale-105 transition-all duration-300">
							{/* Gradient Background */}
							<div
								className={`absolute inset-0 bg-gradient-to-br ${month.color} opacity-0 group-hover:opacity-100 transition-opacity`}
							/>

							<div className="relative z-10 p-8">
								{/* Icon */}
								<div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
									<month.icon className="w-8 h-8 text-primary" />
								</div>

								{/* Header */}
								<div className="mb-6">
									<div className="text-sm font-semibold text-primary mb-2">
										{month.month}
									</div>
									<h3 className="text-2xl font-bold mb-1">{month.title}</h3>
									<div className="text-sm text-muted-foreground">
										{month.period}
									</div>
								</div>

								{/* Items */}
								<ul className="space-y-3">
									{month.items.map((item, itemIndex) => (
										<li
											key={itemIndex}
											className="flex items-start gap-2 text-sm">
											<CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
											<span className="text-muted-foreground">{item}</span>
										</li>
									))}
								</ul>
							</div>
						</Card>
					))}
				</div>

				{/* Note */}
				<div className="text-center mt-12 max-w-2xl mx-auto">
					<div className="p-6 rounded-2xl bg-card border border-primary/20">
						<p className="text-sm text-muted-foreground">
							<span className="text-primary font-semibold">Importante:</span> A
							intensidade e o foco são as chaves. Dedique 3-4 horas por dia,
							trate o aprendizado como seu trabalho principal durante este
							período.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Timeline;
