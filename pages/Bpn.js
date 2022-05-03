import React, { useState, useCallback } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Head from "../components/Head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import PageIntro from "../components/PageIntro";
import ProjectContent from "../components/ProjectContent";
import ImageViewer from "react-simple-image-viewer";

function Bpn() {
	const [isViewerOpen, setIsViewerOpen] = useState(false);
	const [currentImage, setCurrentImage] = useState(0);
	const openImageViewer = useCallback((index) => {
		setCurrentImage(index);
		setIsViewerOpen(true);
	}, []);

	const closeImageViewer = () => {
		setCurrentImage(0);
		setIsViewerOpen(false);
	};
	const body =
		"Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.";
	const images = [
		"/images/bpn/1.jpg",
		"/images/bpn/9.jpg",
		"/images/bpn/10.jpg",
		"/images/bpn/11.jpg",
		"/images/bpn/15.jpg",
		"/images/bpn/18.jpg",
		"/images/bpn/27.jpg",
		"/images/bpn/24.jpg",
	];

	return (
		<div>
			<Navbar />
			<PageIntro name='Bpn Project' />
			<Head title={"Projects"} />
			<div className='container mt-8'>
				<ProjectContent title='Bpn Project' body={body} />
				<div className='row '>
					{images.map((image, i) => (
						<div className='col-lg-3 col-md-6' key={i}>
							<Image
								width={400}
								height={400}
								className='content-image'
								src={image}
								altText='bpn project'
								key={i}
								index={i}
								onClick={() => openImageViewer(i)}
							/>
						</div>
					))}
					{isViewerOpen && (
						<ImageViewer
							src={images}
							currentIndex={currentImage}
							onClose={closeImageViewer}
							disableScroll={false}
							backgroundStyle={{
								backgroundColor: "rgba(0,0,0,0.9)",
								zIndex: "10",
							}}
							closeOnClickOutside={true}
						/>
					)}
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

export default Bpn;
