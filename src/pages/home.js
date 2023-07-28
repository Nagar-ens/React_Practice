import React from 'react'

const Home = () => {
  return (
    <>
      <section className="home">
        <div className='banner-container'>
          <img className="banner" src='https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d2279606000f5f8a92b792_home-hero-p-1600.webp'></img>
          <div className='banner-content'>
            <div>
              <h1>FASHION <br />
                & BRANDING
              </h1>
              <p>
                Bringing Your Fashion Brand's Unique Identity to Life Through Strategic Marketing and Advertising.

              </p>
            </div>
          </div>
          <div className='scroll-container'>
            <button>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9531 11.5781L10.3281 17.2031C10.2857 17.2476 10.2348 17.2829 10.1784 17.3071C10.122 17.3313 10.0613 17.3438 9.99993 17.3438C9.93856 17.3438 9.87784 17.3313 9.82143 17.3071C9.76503 17.2829 9.71412 17.2476 9.6718 17.2031L4.0468 11.5781C3.95978 11.4911 3.91089 11.3731 3.91089 11.25C3.91089 11.1269 3.95978 11.0089 4.0468 10.9219C4.13383 10.8349 4.25186 10.786 4.37493 10.786C4.498 10.786 4.61603 10.8349 4.70305 10.9219L9.53118 15.7422V3.125C9.53118 3.00068 9.58056 2.88145 9.66847 2.79354C9.75638 2.70564 9.87561 2.65625 9.99993 2.65625C10.1242 2.65625 10.2435 2.70564 10.3314 2.79354C10.4193 2.88145 10.4687 3.00068 10.4687 3.125V15.7422L15.2968 10.9219C15.3838 10.8349 15.5019 10.786 15.6249 10.786C15.748 10.786 15.866 10.8349 15.9531 10.9219C16.0401 11.0089 16.089 11.1269 16.089 11.25C16.089 11.3731 16.0401 11.4911 15.9531 11.5781Z" fill="currentColor"></path>
              </svg>
            </button>
            <span>Read More</span>
          </div>

        </div>
        <div className="card_container">
          <div className='card'>
            <h3>Branding</h3>
            <p>Develop a strong, recognizable fashion brand identity.</p>
            <button></button>
            <span >ABOUT BRANDING</span>
          </div>
</div>
      </section >
    </>
  )
}

export default Home