import React, { useRef } from 'react'
import './vedioPlayer.css'
import vedio from '../../assets/vedioPlayer.mp4'


const  vedioPlayer=({playState ,setPlayState})=> {

    const player = useRef(null);

    const closePlayer =(e)=>{
        if(e.target === player.current){
            setPlayState(false); 
        }
    }

  return (
    <div className={`vedio-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer  }>
        <video src={vedio} autoPlay muted controls></video>
    </div>
  )
}

export default vedioPlayer