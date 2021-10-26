import React from "react";
import MeetupListItem from "./MeetupListItem";

export default function MeetupList(props) {
  const { meetups } = props;

  return (
    <div>
      {meetups &&
        meetups.map((meetup, index) => (
          <MeetupListItem key={index} meetup={meetup} />
        ))}
    </div>
  );
}
