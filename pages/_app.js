import Layout from "../components/Layout";
import "../styles/css/bootstrap.css";
import "../styles/css/animate.css";
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
