import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Forward Directives Manager</title>
        <meta property="og:title" content="Forward Directives Manager" />
      </Helmet>
    </div>
  )
}

export default Home
