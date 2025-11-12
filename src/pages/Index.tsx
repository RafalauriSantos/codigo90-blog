import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
	return (
		<div className="min-h-screen">
			<Hero />
			<Stats />
			<Timeline />
			<Testimonials />
			<FAQ />
			<CTA />
			<Footer />
		</div>
	);
};

export default Index;
