import React from "react";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

function Testimonial() {
	return (
		<div className='p-10 testimonial'>
			<div className='intro'>
				<h2 className='text-center text-secondary mt-5'>Testimonials </h2>
				<p className='text-center'>
					Our customers love us! Read what they have to say below. Aliquam sed
					justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
				</p>
			</div>
			<Carousel responsive={responsive}>
				<figure className='snip1192'>
					<blockquote>
						Calvin: Sometimes when talking with others, my words keep up with my
						thoughts. I wonder why we think faster than we speak. Hobbes:
						Probably so we can think twice.{" "}
					</blockquote>
					<div className='author'>
						<Image
							width={100}
							height={100}
							src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg'
							alt='sq-sample1'
						/>
						<h5>
							Pelican Steve <span> LittleSnippets</span>
						</h5>
					</div>
				</figure>
				<figure className='snip1192 hover'>
					<blockquote>
						Thank you. before I begin, like everyone to notice that my report is
						in a professional, clear plastic binder...When a report looks this
						good, you know get an A. a tip kids. Write it down.
					</blockquote>
					<div className='author'>
						<Image
							width={100}
							height={100}
							src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg'
							alt='sq-sample24'
						/>
						<h5>
							Max Conversion<span> LittleSnippets</span>
						</h5>
					</div>
				</figure>
				<figure className='snip1192'>
					<blockquote>
						My behaviour is addictive functioning in a disease process of toxic
						co-dependency. I need holistic healing and wellness before accept
						any responsibility for my actions.
					</blockquote>
					<div className='author'>
						<Image
							width={100}
							height={100}
							src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg'
							alt='sq-sample29'
						/>
						<h5>
							Eleanor Faint<span> LittleSnippets</span>
						</h5>
					</div>
				</figure>
				<figure className='snip1192'>
					<blockquote>
						Calvin: Sometimes when talking with others, my words keep up with my
						thoughts. I wonder why we think faster than we speak. Hobbes:
						Probably so we can think twice.{" "}
					</blockquote>
					<div className='author'>
						<Image
							width={100}
							height={100}
							src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg'
							alt='sq-sample1'
						/>
						<h5>
							Pelican Steve <span> LittleSnippets</span>
						</h5>
					</div>
				</figure>
				<figure className='snip1192 hover'>
					<blockquote>
						Thank you. before I begin, like everyone to notice that my report is
						in a professional, clear plastic binder...When a report looks this
						good, you know get an A. a tip kids. Write it down.
					</blockquote>
					<div className='author'>
						<Image
							width={100}
							height={100}
							src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg'
							alt='sq-sample24'
						/>
						<h5>
							Max Conversion<span> LittleSnippets</span>
						</h5>
					</div>
				</figure>
				<figure className='snip1192'>
					<blockquote>
						My behaviour is addictive functioning in a disease process of toxic
						co-dependency. I need holistic healing and wellness before accept
						any responsibility for my actions.
					</blockquote>
					<div className='author'>
						<Image
							width={100}
							height={100}
							src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg'
							alt='sq-sample29'
						/>
						<h5>
							Eleanor Faint<span> LittleSnippets</span>
						</h5>
					</div>
				</figure>
			</Carousel>
		</div>
	);
}

export default Testimonial;
