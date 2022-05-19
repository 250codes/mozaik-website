import React from "react";
import Image from "next/image";
import Link from "next/link";

function ServicesPagesBody({ image, text }) {
	return (
		<>
			<div className='col-md-8'>
				<Image
					className='img-fluid w-100'
					layout='intrinsic'
					width={700}
					height={475}
					src={image}
					alt=''
				/>
			</div>
			<div className='col-md-4'>
				<p className='text-justify'>{text}</p>
				<div className='btn contactUs-btn-bg mt-3'>
					<Link href='Contact'>Contact Us</Link>
				</div>
			</div>
		</>
	);
}

export default ServicesPagesBody;
