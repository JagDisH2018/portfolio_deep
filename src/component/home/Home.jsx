import React from 'react'
import './home.css'
const Home = () => {
  return (
    <section id="home" className='app__container undefined'>
      <div className="app__social">
        {/* Linkedin */}
        <a>
          <div>
            <svg>
              <path>
                {/* Linked */}
              </path>
            </svg>
          </div>
        </a>
        {/* Twitter */}
        <a>
          <div>
            <svg>
              <path>
                {/* Twitter */}
              </path>
            </svg>
          </div>
        </a>

        {/* Instagram */}
        <a>
          <div>
            <svg>
              <path>
                {/* instagram */}
              </path>
            </svg>
          </div>
        </a>
      </div>



      <div className="app__wrapper app__flex">
        <div className="app__header app__flex">
          <div className="app__header-info">
            <div className="app__header-badge">
              <div className="badge-cmp app__flex">
                <div className='name__subtopic'>
                  <p>Helllo, I am</p>
                  <h1>Deepak</h1>
                </div>
                <div className="tag-cmp app__flex">
                  <p>Full Stack developer</p>
                  <p>Frontend Developer</p>
                  <p>Backend Developer</p>
                </div>
              </div>

            </div>
          </div>
          <div className="app__header-img"></div>
          <div className="app__header-circles"></div>
        </div>
        {/* <div className="copyright">
          <p>@2023 Deepak</p>
          <p>All rights reserved</p>
        </div> */}
      </div>

      <div className="app__navigation">

      </div>

    </section>
  )
}

export default Home
