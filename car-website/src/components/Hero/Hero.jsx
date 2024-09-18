import './Hero.css'
import  arrow_btn from '../../Assets/arrow_btn.png'
import play_icon from '../../Assets/play_icon.png'
import pause_icon from '../../Assets/pause_icon.png'



const Hero =({heroData,setHeroCount,heroCount,setPlayStatus,PlayStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-texted">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p> Explore the Feactures</p>
        <img src={arrow_btn}/>
      </div>

      <div className="hero-play">
        <ul className='hero-dosc'>
          <li onClick={() => setHeroCount(0)}className={heroCount===0? "hero-dot orange":"hero-dot"}></li>
          <li onClick={() => setHeroCount(1)}className={heroCount===1? "hero-dot orange":"hero-dot"}></li>
          <li onClick={() => setHeroCount(2)}className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img onClick={() => setPlayStatus(!PlayStatus)} src={pause_icon} alt="" />
          <p> See the video</p>

        </div>
      
      </div>
    </div>
  )
}

export default Hero
