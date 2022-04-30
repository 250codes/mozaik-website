import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Head from "../components/Head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import PageIntro from "../components/PageIntro";
import ProjectContent from "../components/ProjectContent";
import ProjectImage from "../components/ProjectImage";

function bpn() {

	const body="Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae."
	const images = ['/images/bpn/1.jpg','/images/bpn/9.jpg','/images/bpn/10.jpg','/images/bpn/11.jpg','/images/bpn/15.jpg','/images/bpn/18.jpg','/images/bpn/27.jpg','/images/bpn/24.jpg']
	return (
		<div>
			<Navbar />
			<PageIntro name='Bpn Project' />
			<Head title={"Projects"} />
			<div className='container mt-8'>
				<ProjectContent title='Bpn Project' body={body} />
				<div className='row '>
					{ images.map((image,i)=>(
						<ProjectImage image={image} altText='bpn project' key={i} />
					))}
				</div>
				<div className='abt-btn mt-2 mb-3'>
					<Link href='projects' id='abt-btn'>
						More Projects
					</Link>
					<FaArrowRight style={{ color: "white", marginLeft: "4px" }} />
				</div>
			</div>
		</div>
	);
}

export default bpn;
