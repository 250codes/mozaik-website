import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Head from "../components/Head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import PageIntro from "../components/PageIntro";
function bpn() {
	return (
		<div>
			<Navbar />
			<PageIntro name='Work Title' />
			<Head title={"Projects"} />
			<div className='container mt-8'>
				<div className='intro mt-5 mb-3'>
					<h2 className='text-center'>Work Title </h2>
					<p className='text-left'>
						Our customers love us! Read what they have to say below. Aliquam sed
						justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
						Our customers love us! Read what they have to say below. Aliquam sed
						justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
						Our customers love us! Read what they have to say below. Aliquam sed
						justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
						Our customers love us! Read what they have to say below. Aliquam sed
						justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
						Our customers love us! Read what they have to say below. Aliquam sed
						justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
					</p>
				</div>
				<div className='row '>
					<div className='col-lg-3 col-md-6'>
						<Image
							width={400}
							height={400}
							className='content-image'
							src='/images/project1.jpg'
							alt='project1'
						/>
					</div>

					<div className='col-lg-3 col-md-6'>
						<Image
							width={400}
							height={400}
							className='content-image'
							src='/images/project1.jpg'
							alt='project1'
						/>
					</div>

					<div className='col-lg-3 col-md-6'>
						<Image
							width={400}
							height={400}
							className='content-image'
							src='/images/project1.jpg'
							alt='project1'
						/>
					</div>

					<div className='col-lg-3 col-md-6'>
						<Image
							width={400}
							height={400}
							className='content-image'
							src='/images/project1.jpg'
							alt='project1'
						/>
					</div>
					<div className='col-lg-3 col-md-6'>
						<Image
							width={400}
							height={400}
							className='content-image'
							src='/images/project1.jpg'
							alt='project1'
						/>
					</div>
					<div className='col-lg-3 col-md-6'>
						<Image
							width={400}
							height={400}
							className='content-image'
							src='/images/project1.jpg'
							alt='project1'
						/>
					</div>
					<div className='col-lg-3 col-md-6'>
						<Image
							width={400}
							height={400}
							className='content-image'
							src='/images/project1.jpg'
							alt='project1'
						/>
					</div>
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

export default bpn;
