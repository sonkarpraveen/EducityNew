import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About({setPlayState}) {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
        </div>
        <div className="about-right">
           <h3>ABOUT UNIVERSITY</h3>
           <h2>Nurturing Tomorrow's Leader Today</h2>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus nihil laudantium ex rerum, aliquid doloremque molestias suscipit totam autem excepturi, ipsam exercitationem temporibus, quasi ad perferendis perspiciatis facilis corporis sint. Natus expedita enim laboriosam cum perspiciatis, ipsam culpa sapiente, harum veritatis alias beatae consequuntur dolores sint exercitationem corporis minima voluptate!</p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos magni nihil dolore impedit? Molestias dicta reprehenderit mollitia quaerat sed, nostrum sapiente dolorum nihil voluptas ea, corrupti placeat, ex laborum labore!</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et adipisci soluta corrupti qui incidunt ullam sunt eos, consequuntur minima. Non quis hic sed qui? Ab ipsum facere a architecto animi.</p>
        </div>
    </div>

  )
}

export default About