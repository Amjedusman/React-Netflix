// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className='banner'>
        <div className="content">
            <h1 className='title'>Movie Name</h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>Mylist</button>
            </div>
            <h1 className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod non placeat perspiciatis sunt obcaecati harum aperiam, magnam voluptate deleniti iste, ipsam facere. Officiis neque similique temporibus debitis sed quisquam ipsum.
            </h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner