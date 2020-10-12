import React, {useState, useEffect} from 'react'
import {apiGet} from '../../helpers/api'

import EventCard from '../EventCard'

const RecentEvents = () => {
  const [events, setEvents] = useState([])

  const eventsPerPage = 7

  const apiEndPoint = `/events?perPage=${eventsPerPage}`

  useEffect(() => {
    apiGet(apiEndPoint).then((response) => {
      setEvents(response.data.data)
    })
  }, [])

  const eventsList = events.map((event) => {
    return <EventCard key={event.audioID} event={event} />
  })

  return (
    <>
      <h3>Recent events</h3>
      <hr />
      {eventsList}
    </>
  )
}

export default RecentEvents
