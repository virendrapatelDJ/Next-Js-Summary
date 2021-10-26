//localhost:3000

import React from "react";
import Head from "next/head";
import MeetupList from "../components/MeetupList";
import { meetups } from "./data/meetups";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>All Meetup</title>
      </Head>
      <h1>Meetups</h1>
      <hr />

      <MeetupList meetups={meetups} />
    </div>
  );
}
