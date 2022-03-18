import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel='shortcut icon' href='/images/logo.png' />
				<meta name='title' content='Moziak concepts' />
				<meta
					name='description'
					content='This is company that is based in Kigali-Rwanda that deals with interior design and construction'
				/>
				<meta
					name='keywords'
					content='interior design , building , construction'
				/>
				<meta name='robots' content='index, follow' />
				<meta content='text/html; charset=utf-8' />
				<meta name='language' content='English' />
				<meta name='author' content='moziak concepts' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
