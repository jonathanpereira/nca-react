import React from 'react'
import classes from 'clsx'

import Style from './style.module.scss'

const PopularTopics = ({topics}) => {
  const listItems = topics.map((topic) => {
    return (
      <a href="/events/" key={topic.topicID}>
        {topic.name}
      </a>
    )
  })

  return (
    <div className="card">
      <div className="card__header">Popular and Featured Topics</div>
      <div className={classes('card__body', Style.popularItemsContainer)}>{listItems}</div>
    </div>
  )
}

export default PopularTopics
