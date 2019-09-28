import React, { useEffect, useRef } from 'react'
import { Power3, CSSPlugin, TweenMax  } from 'gsap/all';

const C = CSSPlugin;

const Message = (props) => {

  let message = useRef(null)

  useEffect(()=>{
    if(props.isother !== undefined){
      TweenMax.fromTo(message,.4,{alpha:0, x: -5}, {alpha:1, x:0, ease: Power3.easeInOut })
    } else {
      TweenMax.fromTo(message,.4,{alpha:0, y: 5}, {alpha:1, y:0, ease: Power3.easeInOut })
    }
  },[props.isother])
  return (
    <li className={props.clase} ref={e=> message = e} style={{opacity:0}}>
      {props.children}
    </li>
  )
}

export default Message
