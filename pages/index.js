import Head from "../components/Head";

import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import WorkWithUs from "../components/WorkWithUs";
import Navbar from "../components/HomeNav";
export default function Home() {
	return (
		<div>
			<Head title='MOZAIK' />
			<HeroSection />
			<Navbar />
			<Projects />
			<WorkWithUs />
			<Testimonial />
		</div>
	);
}
