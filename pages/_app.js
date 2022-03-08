import Layout from "../components/Layout";
import Script from 'next/script'
import "../styles/css/bootstrap.css";
import "../styles/css/bootstrap-icons/bootstrap-icons.css";
import "../styles/css/animate.css";
import "../styles/globals.css"
import "../styles/about.css"

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Script src="/js/bootstrap.bundle.min.js" />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
