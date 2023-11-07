import React from 'react'
import data from './data/Data'
import './work.css'

const Work = () => {
  return (
    <section id='work'>
      <h1>My Creative Portfolio Section</h1>
      <div className='container work__container'>
        {
          data.map(({ id, image, title, github, demo1 }) => {
            return (
              <article key={id} className='work__item'>
                <div className='work__item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='work__item-cta'>

                </div>
              </article>

            )
          })
        }

      </div>
    </section>
  )
}

export default Work
