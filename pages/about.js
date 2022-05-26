import React from 'react'
import Script from 'next/script'
import Head from "../components/Head";
import AboutIntro from "../components/PageIntro";
import Vision from "../components/Vision";
import Team from "../components/Team";
import Navbar from "../components/Navbar";

function about() {
  return (
		<div>
			<Head title={"About Us!"} />
			<Navbar />
			<AboutIntro name='ABOUT US' />
			<Vision />
			{/* <Team /> */}
		</div>
	);
}

export default about
