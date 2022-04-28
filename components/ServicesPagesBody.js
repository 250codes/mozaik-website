import React from "react";
import Image from "next/image";

function ServicesPagesBody({ image, text }) {
	return (
        <>
					<div className='col-md-8'>
						<Image
							className='img-fluid w-100'
							layout='intrinsic'
							width={700}
							height={475}
							src={ image }
							alt=''
						/>
					</div>
					<div className='col-md-4'>
						<p className="text-justify">
							{ text }
						</p>
						<button className='btn contactUs-btn-bg mt-3'>Contact Us</button>
					</div>
        </>
	);
}

export default ServicesPagesBody;
