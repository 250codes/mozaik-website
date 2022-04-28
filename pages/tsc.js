import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Head from "../components/Head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import PageIntro from "../components/PageIntro";
import ProjectContent from "../components/ProjectContent";
import ProjectImage from "../components/ProjectImage";

function tsc() {
	const body="Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae."
	const images = ['/images/transafricacommunication/1.jpg','/images/transafricacommunication/3.jpg','/images/transafricacommunication/4.jpg','/images/transafricacommunication/5.jpg','/images/transafricacommunication/waitingroom.jpg','/images/transafricacommunication/waitingroom2.jpg']
	return (
		<div>
			<Navbar />
			<PageIntro name='Trans Africa Community' />
			<Head title={"Projects"} />
			<div className='container mt-8'>
				<ProjectContent title='Trans Africa Community' body={body} />
				<div className='row '>
					{ images.map((image)=>(
						<ProjectImage image={image} altText='bpn project' />
					))}
				</div>
				<div className='abt-btn mt-2 mb-3'>
					<Link href='/#projects' id='abt-btn'>
						More Projects
					</Link>
					<FaArrowRight style={{ color: "white", marginLeft: "4px" }} />
				</div>
			</div>
		</div>
	);
}

export default tsc;
