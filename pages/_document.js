import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel='stylesheet' href='../styles/css/bootstrap.css' />
				{/* <link
					rel='stylesheet'
					href='	https://cdnjs.cloudflare.com/ajax/libs/aos/3.0.0-beta.6/aos.css'
				/> */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
