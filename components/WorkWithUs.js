import React from "react";
import Link from "next/link";

function WorkWithUs() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-4 wk-t'>
					<h1 className='wk'>Work</h1>
					<h1 className='wk' style={{ marginTop: "-1rem" }}>
						With us
					</h1>
				</div>
				<div className='col-md-8'>
					<p className='my-3 wk-p'>
						Workspaces are living spaces. That is why they must be carefully
						thought out.
					</p>
					<p>
						Within the NILSEN agency, we design and build workspaces dedicated
						as much to the efficiency as to the well-being of the people who
						work there. Ergonomics, acoustics, lighting, etc. Each company has
						specific needs and we respond to them thanks to a team with multiple
						skills. We adapt to the types of trades, to the corporate culture as
						well as to the diversity of surfaces to be fitted out. Whether you
						are independent, with a simple office, or whether you have planned
						to accommodate several hundred employees. Our design office, our
						development advisers and our technicians in the field support you,
						depending on the stage at which you contact us, to carry out your
						projects from floor to ceiling, including furniture. Individual
						offices or collaborative spaces, meeting rooms or outdoor spaces… We
						bring your projects to life.
					</p>
					<div className='abt-btn'>
						<Link href='about' id='abt-btn'>
							Learn More
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WorkWithUs;
