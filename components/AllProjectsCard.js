import React from "react";
import Image from "next/image";
import Link from "next/link";

function AllProjectsCard({ image, url, title }) {
	return (
        <Link href={url}>
          <a className="col-lg-3 mx-2  mt-4 card">
            <Image
              className="card-img-top pt-2"
              width={500}
              height={350}
              src={image}
              alt=""
            />
            <div className="card-body">
              <h5 className="card-text text-center text-dark"> {title} </h5>
            </div>
          </a>
        </Link>
	);
}

export default AllProjectsCard;
