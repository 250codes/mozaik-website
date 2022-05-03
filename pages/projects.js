import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Head from "../components/Head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import PageIntro from "../components/PageIntro";
import AllProjectsCard from "../components/AllProjectsCard";
function projects() {
	const projects = [
		{
			title: "BPN Project",
			image: "/images/bpn/1.jpg",
			url: "Bpn"
		},
		{
			title: "Kavumo Project",
			image: "/images/kavumoproject/11.jpg",
			url: "Kavumo"
		},
		{
			title: "Home Decor",
			image: "/images/cover2.jpg",
			url: "HomeDecor"
		},
		{
			title: "Institute Francais",
			image: "/images/institutfrancais/cover.jpg",
			url: "InstituteF"
		},
		{
			title: "Trans Africa Community",
			image: "/images/transafricacommunication/4.jpg",
			url: "Tsc"
		},
		
	];
  return (
    <div>
      <Navbar />
      <PageIntro name="All Projects" />
      <Head title={"Projects"} />
      <div className="container mt-5 mb-3">
        <div className="intro mt-5 mb-3">
          <h2 className="text-center text-dark">All Projects </h2>
        </div>
        <div className="row justify-content-center">
		  {projects.map((project, index) => (
			  <AllProjectsCard key={index} {...project} />
		  ))}
        </div>
      </div>
    </div>
  );
}

export default projects;
