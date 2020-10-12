import React, {useEffect, useState} from 'react'
import classes from 'clsx'

import {apiGet} from '../../helpers/api'

import Style from './style.module.scss'

const PopularTopics = () => {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    apiGet('/topics/featured').then((response) => {
      setTopics(response.data.data)
    })
  }, [])

  let listItems = 'Loading...'

  if (topics.length > 0) {
    listItems = topics.map((topic) => {
      if (topic.groupName == '') {
        return (
          <a href={'/events/search/topic/' + topic.topicID} key={topic.topicID}>
            {topic.name}
          </a>
        )
      }
    })
  }

  return (
    <div className="card">
      <div className="card__header">Popular and Featured Topics</div>
      <div className={classes('card__body', Style.popularItemsContainer)}>{listItems}</div>
    </div>
  )
}

export default PopularTopics
