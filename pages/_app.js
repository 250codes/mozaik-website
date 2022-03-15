import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";

import Layout from "../components/Layout";
import Script from 'next/script'
// import "../styles/css/animate.css";
// import "../styles/aos.css"
import "../styles/css/bootstrap.css";
import "../styles/css/bootstrap-icons/bootstrap-icons.css";
// import "../styles/vendor/bootstrap/css/bootstrap.min.css";
import "../styles/globals.css"
import "../styles/about.css"
import "../styles/vendor/swiper/swiper-bundle.min.css";
// import "../styles/vendor/boxicons/css/boxicons.css"
import "../styles/testimonial.css"

function MyApp({ Component, pageProps }) {
	// useEffect(() => {
	// 	import("bootstrap/dist/js/bootstrap.bundle.min.js");
	// }, []);
	return (
		<Layout>
			<Script src="../js/testimonial.js" />
			<Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js'/>
			<Script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'/>
			<Script src="../styles/vendor/swiper/swiper-bundle.min.js" />
			<Script src="/js/bootstrap.bundle.min.js" />
			{/* <Script src="../js/main.js" /> */}
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
