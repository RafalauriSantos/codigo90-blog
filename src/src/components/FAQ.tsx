import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
	const faqs = [
		{
			question: "Preciso ter experiência prévia em programação?",
			answer:
				"Não! O método Código 90 foi criado especificamente para iniciantes absolutos. Você vai começar do zero, aprendendo desde lógica de programação até construir seus primeiros projetos. Muitas pessoas que seguiram este roteiro nunca tinham escrito uma linha de código antes.",
		},
		{
			question: "Quanto tempo por dia preciso dedicar?",
			answer:
				"Recomendamos 3-4 horas diárias de estudo focado. Se você puder dedicar mais tempo (como 6-8 horas), os resultados virão mais rápido. O importante é a consistência e a qualidade do estudo, não apenas a quantidade de horas.",
		},
		{
			question: "Qual linguagem devo escolher: Python ou JavaScript?",
			answer:
				"Ambas são excelentes escolhas! Python é mais fácil para iniciantes e tem alta demanda em ciência de dados e automação. JavaScript é essencial para desenvolvimento web e tem o maior número de vagas. Nossa recomendação: se tem interesse em desenvolvimento web, escolha JavaScript. Se prefere dados, automação ou IA, vá de Python.",
		},
		{
			question: "Preciso fazer faculdade de Ciência da Computação?",
			answer:
				"Não é obrigatório! A indústria de tecnologia valoriza muito mais o seu portfólio e habilidades práticas do que diplomas. Muitos desenvolvedores de sucesso são autodidatas. O importante é dominar as tecnologias, ter projetos para mostrar e saber resolver problemas.",
		},
		{
			question: "É realmente possível conseguir emprego em 90 dias?",
			answer:
				"Sim, mas depende do seu esforço e dedicação. Existem casos documentados de pessoas que conseguiram (como Ricardo Piras e Katie Reed, citados acima). O mercado tem 530 mil vagas em aberto no Brasil. Se você seguir o plano rigorosamente, construir um bom portfólio e se preparar para entrevistas, as chances são reais.",
		},
		{
			question: "Quais são os custos além do eBook?",
			answer:
				"O método prioriza recursos gratuitos! Você pode aprender com cursos gratuitos (freeCodeCamp, The Odin Project, YouTube), ferramentas gratuitas (VS Code, Git) e materiais open-source. Investimentos opcionais incluem cursos pagos específicos (R$ 20-200) ou bootcamps (R$ 500-5.000).",
		},
		{
			question: "Qual salário posso esperar no primeiro emprego?",
			answer:
				"Desenvolvedores júnior no Brasil ganham entre R$ 3.000 e R$ 6.000 por mês (CLT), dependendo da região e empresa. Em posições remotas para empresas internacionais, valores podem chegar a R$ 8.000-12.000. Com 1-2 anos de experiência, salários de R$ 8.000-15.000 são comuns.",
		},
		{
			question: "O que preciso ter além de conhecimento técnico?",
			answer:
				"Habilidades importantes incluem: inglês técnico (ler documentação), capacidade de resolver problemas, trabalho em equipe, versionamento com Git/GitHub, e um portfólio no GitHub com 3-5 projetos bem feitos. Soft skills como comunicação e aprendizado contínuo também são valorizadas.",
		},
		{
			question: "Como funciona o mercado para quem tem +30 anos?",
			answer:
				"A idade não é uma barreira na área de tecnologia! Muitos profissionais fizeram transição de carreira com 30, 40 ou até 50 anos. Sua experiência de vida e maturidade profissional são vantagens. Empresas valorizam desenvolvedores responsáveis, organizados e com boa comunicação.",
		},
		{
			question: "E se eu não conseguir em 90 dias?",
			answer:
				"Tudo bem! O prazo de 90 dias é ambicioso e possível, mas cada pessoa tem seu ritmo. O importante é não desistir. Alguns levam 4-6 meses, outros 8-12 meses. O mercado de tecnologia não vai desaparecer - pelo contrário, só cresce. Continue estudando, construindo projetos e se candidatando a vagas.",
		},
	];

	return (
		<section className="py-20 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
			<div className="absolute bottom-1/4 right-0 w-96 h-96 bg-tech-blue/5 rounded-full blur-3xl" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20 mb-6">
						<HelpCircle className="w-4 h-4 text-primary" />
						<span className="text-sm font-medium text-foreground">
							Tire suas dúvidas
						</span>
					</div>

					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Perguntas <span className="text-gradient">Frequentes</span>
					</h2>
					<p className="text-lg text-muted-foreground">
						Respostas para as dúvidas mais comuns sobre começar sua carreira em
						tech
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					<Accordion type="single" collapsible className="w-full space-y-4">
						{faqs.map((faq, index) => (
							<AccordionItem
								key={index}
								value={`item-${index}`}
								className="border border-border rounded-lg px-6 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
								<AccordionTrigger className="text-left hover:no-underline py-5">
									<span className="font-semibold text-foreground pr-4">
										{faq.question}
									</span>
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>

					{/* CTA após FAQ */}
					<div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20">
						<p className="text-lg font-semibold mb-2">Ainda tem dúvidas?</p>
						<p className="text-sm text-muted-foreground mb-4">
							Baixe o guia completo e descubra todos os detalhes do método
						</p>
						<a
							href="#hero"
							className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
							onClick={(e) => {
								e.preventDefault();
								window.scrollTo({ top: 0, behavior: "smooth" });
							}}>
							Baixar Guia Gratuito
							<span className="text-xl">↑</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
