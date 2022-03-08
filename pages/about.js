import React from 'react'
import Script from 'next/script'
import Head from "../components/Head";
import AboutIntro from "../components/AboutIntro";
import Vision from "../components/Vision";
import Team from "../components/Team";

function about() {
  return (
		<div>
			
			<Head title={"About Us!"}/>
            <AboutIntro/>
            <Vision/>
            <Team/>
		</div>
	);
}

export default about