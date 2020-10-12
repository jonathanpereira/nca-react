import React from 'react'

import Style from './style.module.scss'

const EventCard = ({
  event: {
    audioID,
    title,
    event_types,
    date_recorded_formatted,
    description,
    speakers,
    locations,
    audio_files_sum_formatted
  }
}) => {
  return (
    <div className={Style.eventCard}>
      <div className={Style.eventCard__info}>
        <h4>
          <a href={'/event/' + audioID}>{title}</a>
        </h4>
        <h5>
          {event_types[0].name} - {date_recorded_formatted}
        </h5>
        <p>{description}</p>
        <p>
          By <a href={'/search/speaker/' + speakers[0].speakerID}>{speakers[0].lastname}</a> |{' '}
          <a href={'/search/location/' + locations[0].locationID}>{locations[0].name}</a>
        </p>
      </div>
      <div className={Style.eventCard__btn}>
        <a href={'/event/' + audioID}>See Event</a>
        <p>({audio_files_sum_formatted})</p>
      </div>
    </div>
  )
}

export default EventCard
