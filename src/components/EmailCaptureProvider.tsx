import { useState, useEffect } from "react";
import EmailCaptureModal from "./EmailCaptureModal";

interface EmailCaptureProviderProps {
	children: React.ReactNode;
}

const EmailCaptureProvider = ({ children }: EmailCaptureProviderProps) => {
	const [showModal, setShowModal] = useState(false);
	const [hasShown, setHasShown] = useState(false);

	useEffect(() => {
		// Verificar se já mostrou o modal antes (localStorage)
		const hasShownBefore = localStorage.getItem("emailCaptureShown");
		if (hasShownBefore) {
			setHasShown(true);
			return;
		}

		// Exit Intent - Mostrar quando usuário tentar sair
		const handleMouseLeave = (e: MouseEvent) => {
			if (e.clientY <= 0 && !hasShown) {
				setShowModal(true);
				setHasShown(true);
				localStorage.setItem("emailCaptureShown", "true");
			}
		};

		// Scroll - Mostrar após rolar 50% da página
		const handleScroll = () => {
			const scrollPercentage =
				(window.scrollY /
					(document.documentElement.scrollHeight - window.innerHeight)) *
				100;

			if (scrollPercentage > 50 && !hasShown) {
				setShowModal(true);
				setHasShown(true);
				localStorage.setItem("emailCaptureShown", "true");
			}
		};

		// Tempo - Mostrar após 30 segundos
		const timer = setTimeout(() => {
			if (!hasShown) {
				setShowModal(true);
				setHasShown(true);
				localStorage.setItem("emailCaptureShown", "true");
			}
		}, 30000);

		document.addEventListener("mouseleave", handleMouseLeave);
		window.addEventListener("scroll", handleScroll);

		return () => {
			document.removeEventListener("mouseleave", handleMouseLeave);
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(timer);
		};
	}, [hasShown]);

	return (
		<>
			{children}
			<EmailCaptureModal open={showModal} onOpenChange={setShowModal} />
		</>
	);
};

export default EmailCaptureProvider;
