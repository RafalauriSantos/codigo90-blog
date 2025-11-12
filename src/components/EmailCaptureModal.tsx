import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Gift, Sparkles, ArrowRight, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { subscribeEmail } from "@/lib/email-service";

interface EmailCaptureModalProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	title?: string;
	description?: string;
	buttonText?: string;
}

const EmailCaptureModal = ({
	open,
	onOpenChange,
	title = "🎁 Baixe GRÁTIS o Guia Completo",
	description = "Descubra o passo a passo exato para se tornar um desenvolvedor em 90 dias",
	buttonText = "QUERO MEU GUIA GRÁTIS",
}: EmailCaptureModalProps) => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { toast } = useToast();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// Validação básica
		if (!email || !name) {
			toast({
				title: "Atenção!",
				description: "Por favor, preencha todos os campos.",
				variant: "destructive",
			});
			setIsLoading(false);
			return;
		}

		// Validação de email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			toast({
				title: "Email inválido!",
				description: "Por favor, insira um email válido.",
				variant: "destructive",
			});
			setIsLoading(false);
			return;
		}

		try {
			// ✨ INTEGRAÇÃO DE EMAIL MARKETING
			const result = await subscribeEmail({
				name: name,
				email: email,
			});

			if (!result.success) {
				toast({
					title: "Erro!",
					description: result.message || "Algo deu errado. Tente novamente.",
					variant: "destructive",
				});
				setIsLoading(false);
				return;
			}

			// Analytics tracking
			if (typeof window !== "undefined" && (window as any).gtag) {
				(window as any).gtag("event", "generate_lead", {
					event_category: "engagement",
					event_label: "email_capture",
					value: name,
				});
			}

			// Meta Pixel tracking
			if (typeof window !== "undefined" && (window as any).fbq) {
				(window as any).fbq("track", "Lead", {
					content_name: "Codigo 90 eBook",
					content_category: "Education",
				});
			}

			toast({
				title: "🎉 Sucesso!",
				description: "Verifique seu email! O guia está chegando...",
			});

			// Limpar formulário
			setEmail("");
			setName("");

			// Fechar modal após 2 segundos
			setTimeout(() => {
				onOpenChange(false);
			}, 2000);

			// TODO: Redirecionar para página de obrigado ou iniciar download
			// window.location.href = "/obrigado";
		} catch (error) {
			toast({
				title: "Erro!",
				description: "Algo deu errado. Tente novamente.",
				variant: "destructive",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-[600px] p-0 overflow-hidden border-2 border-primary/20">
				{/* Header com gradient */}
				<div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 pb-6">
					<div className="absolute top-4 right-4">
						<Button
							variant="ghost"
							size="icon"
							onClick={() => onOpenChange(false)}
							className="rounded-full hover:bg-background/50">
							<X className="h-4 w-4" />
						</Button>
					</div>

					<DialogHeader className="space-y-4">
						<div className="flex items-center justify-center gap-2 mb-2">
							<Gift className="w-8 h-8 text-primary animate-pulse" />
							<Sparkles className="w-6 h-6 text-primary" />
						</div>

						<DialogTitle className="text-3xl font-bold text-center">
							{title}
						</DialogTitle>

						<DialogDescription className="text-center text-base text-foreground/80">
							{description}
						</DialogDescription>
					</DialogHeader>

					{/* Benefícios */}
					<div className="mt-6 space-y-3">
						<div className="flex items-start gap-3 text-sm">
							<CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
							<span className="text-foreground/90">
								<strong>Plano Mês a Mês:</strong> Roteiro completo de 90 dias
							</span>
						</div>
						<div className="flex items-start gap-3 text-sm">
							<CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
							<span className="text-foreground/90">
								<strong>Recursos Grátis:</strong> Links para cursos e
								ferramentas
							</span>
						</div>
						<div className="flex items-start gap-3 text-sm">
							<CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
							<span className="text-foreground/90">
								<strong>Casos Reais:</strong> Histórias de quem conseguiu em 90
								dias
							</span>
						</div>
					</div>
				</div>

				{/* Formulário */}
				<form onSubmit={handleSubmit} className="p-8 pt-6 space-y-4">
					<div className="space-y-2">
						<Label htmlFor="name" className="text-sm font-semibold">
							Seu Nome
						</Label>
						<Input
							id="name"
							type="text"
							placeholder="Como posso te chamar?"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="h-12 text-base"
							required
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="email" className="text-sm font-semibold">
							Seu Melhor Email
						</Label>
						<Input
							id="email"
							type="email"
							placeholder="seuemail@exemplo.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="h-12 text-base"
							required
						/>
					</div>

					<Button
						type="submit"
						size="lg"
						className="w-full h-14 text-lg font-bold group bg-primary hover:bg-primary/90 glow"
						disabled={isLoading}>
						{isLoading ? (
							"Enviando..."
						) : (
							<>
								{buttonText}
								<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
							</>
						)}
					</Button>

					<p className="text-xs text-center text-muted-foreground mt-4">
						🔒 Seus dados estão seguros. Sem spam, prometemos!
					</p>

					{/* Social Proof */}
					<div className="flex items-center justify-center gap-2 pt-2">
						<div className="flex -space-x-2">
							{[1, 2, 3, 4].map((i) => (
								<div
									key={i}
									className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-background"
								/>
							))}
						</div>
						<p className="text-xs text-muted-foreground">
							+<strong className="text-primary">8.547</strong> pessoas já
							baixaram
						</p>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default EmailCaptureModal;
