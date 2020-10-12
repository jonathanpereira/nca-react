import React from 'react'

import PopularTopics from '../../components/PopularTopics'

import Style from './style.module.scss'

const Home = () => {
  return (
    <main className="container">
      <div className={Style.row}>
        <div className={Style.column}>
          <div className="card">
            <div className="card__header">Advanced Search</div>
            <div className="card__body">
              <div className="form__group">
                <input type="text" className="form__item" placeholder="Keywords" />
              </div>
              <div className="form__group">
                <select className="form__item">
                  <option>Topic</option>
                </select>
              </div>
              <div>
                <button>clear search</button>
                <button>Find events</button>
              </div>
            </div>
          </div>
          <h3>The mission</h3>
          <p>
            The mission of New Church Audio is to preserve{' '}
            <a href="http://www.newchurch.org/" target="_blank" rel="noopener noreferrer">
              The New Church
            </a>{' '}
            audio recordings, and make them available to those who desire to listen and learn more about the Lord's Word
            and applying its truths to their daily lives.
          </p>
          <p>
            <b>New Church Audio</b> is a program of The New Church, an international Christian organization.
          </p>
        </div>
        <div className={Style.column}>
          <PopularTopics />
          <h3>Recent events</h3>
          <hr />
          <div className={Style.eventCard}>
            <div className={Style.eventCard__info}>
              <h4>
                <a href="/asdf">Stages of Life - Part 2 - Teenage Years</a>
              </h4>
              <h5>Worship Service: Childrens Talk & Adult Sermon - October 04, 2020</h5>
              <p>
                This week we continue our exploration of the stages of life as seen in the story of Moses. As a young
                man Moses faced the challenges of putting his ideals into practice. On the one hand he could see with
                clarity the injustice his people faced. On the other hand, he struggled to reconcile how his own people
                treated each other, and in the end was forced to flee to a foreign land. These experiences illustrate
                well the dichotomy of the teenage years: a growing sense of right and wrong, tempered by growing
                awareness of the complexity of life.
              </p>
              <p>
                By <a href="/asdf">Rev. Joel C Glenn</a> | <a href="/asdf">Westville, RSA</a>
              </p>
            </div>
            <div className={Style.eventCard__btn}>
              <a href="/asdf">See Event</a>
              <p>(42m 19s)</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </main>
  )
}

export default Home
