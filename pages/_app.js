import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";

import Layout from "../components/Layout";
import Script from 'next/script'
import "../styles/css/animate.css";
// import "../styles/aos.css"
import "../styles/css/bootstrap.css";
import "../styles/css/bootstrap-icons/bootstrap-icons.css";
import "../styles/globals.css"
import "../styles/about.css"
import "../styles/swiper-bundle.min.css";
import "../styles/vendor/boxicons/css/boxicons.css"
import "../styles/testimonial.css"

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);
	return (
		<Layout>
			<Script src="/js/bootstrap.bundle.min.js" />
			<Script src="../js/main.js" />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
