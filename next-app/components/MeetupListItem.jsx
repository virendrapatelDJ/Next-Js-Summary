import React from "react";
import Link from "next/link";

export default function MeetupListItem(props) {
  const {
    meetup: { title, image, description, location, slug },
  } = props;
  return (
    <div className="col-8 mx-auto">
      <div className="card mt-3">
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>Location : {location}</p>
          <p>
            <small>{description.substr(1, 100)}....</small>
          </p>
          <Link href={`/${slug}`}>
            <button className="btn btn-dark btn-sm">Know More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
