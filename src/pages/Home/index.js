import React from 'react'

import PopularTopics from '../../components/PopularTopics'
import RecentEvents from '../../components/RecentEvents'

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
          <RecentEvents />
        </div>
      </div>
      <hr />
    </main>
  )
}

export default Home
