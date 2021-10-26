import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { meetups } from "./data/meetups";

export default function MeetupDetails() {
  const { query } = useRouter();
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    const meetup = meetups.find((item) => item.slug === query.meetupid);
    console.log({ meetup });
    setMeetup(meetup);
  }, [query]);

  const { title, description, location, image } = meetup || {};
  return (
    <div className="col-8 mx-auto">
      <Head>
        <title>Meetup Details Page </title>
      </Head>

      <h1>Meetup Details </h1>
      <hr />
      <div className="card mt-3">
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <hr />
          <p>Location : {location}</p>
          <p className="card-text">{description}</p>

          <div>
            <Link href="/">
              <button className="btn btn-dark">Go back </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
