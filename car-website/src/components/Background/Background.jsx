import React from 'react'
import './Background.css'
import vedios from '../../Assets/vedios.mp4'

import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png'


const Background = ({ playStatus, heroCount }) => {
  if(playStatus){
    return (
      <video className='background' autoPlay loop muted>
         <source src={vedios} type='video/mp4' />
         
     </video>
    )
  }
  else if(heroCount ===0)
  {
    return  <img src={image1} className='background' alt='teo not'/>
  }
  else if(heroCount ===1)
  {
    return <img src={image2} className='background' alt=' dfnot'/>
  }
  else if(heroCount ===2)
  {
    return <img scr={image3} className='background' alt='dfnot'/>
  }


}





export default Background;


