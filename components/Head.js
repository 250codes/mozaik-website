import React from 'react'
import Head from 'next/head'
function Header({title}) {
  return (
		<Head>
			<title>{title}</title>
			<meta name='keywords' content='interior design ,offices,desks' />
		</Head>
	);
}

export default Header