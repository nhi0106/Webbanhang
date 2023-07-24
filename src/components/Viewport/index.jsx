/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./styles.scss"

function Viewport(props) {
  const {Img_Viewport} = props;
    return (
      <div className ="Viewport" style={{backgroundImage: `url(${Img_Viewport})`}}>
        <div className="content">
          {/* <img src={Img_Viewport} alt="" /> */}
          <span>FACIAL FAVS</span>
          <h3>2 FOR 1 FACE MASKS</h3>
          <p>Indulge in some home TLC ! Buy one and get one free of our best-selling, super-hydrating, complexion clearing face masks.</p>
          <a href="">SHOP NOW</a>
      </div>
      </div>
    )
}
export default Viewport
