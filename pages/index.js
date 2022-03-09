import Head from "../components/Head";
import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
export default function Home() {
	return (
		<div>
			<Head title='MOZAIK' />
			<HeroSection />
			<Testimonial />
			<Projects />
		</div>
	);
}
