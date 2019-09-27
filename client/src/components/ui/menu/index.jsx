/* eslint-disable no-unused-expressions */
import React, { useState, useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'
import { Power3, Elastic, TimelineMax, CSSPlugin, TweenMax  } from "gsap/all";
import withAuth from '../../../hoc/withAuth'
import { ReactComponent as KiwiEm } from '../../../logotipo.svg' 

const C = CSSPlugin; 

const isMin = (t) =>{
  let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return w > t
}

const Menu = (props) => {
  const { logout } = props;

  const [classImg, setClassImg] = useState()

  const isAnimated = useRef(true);
  const isOpen = useRef(false);
  const isHappening = useRef(false);

  let kiwi = useRef(null)
  let container = useRef(null);
  let firstBars = useRef(null);
  let firstBisBars = useRef(null);
  let secondBars = useRef(null);
  let secondBisBars = useRef(null);
  let dashMenu =useRef(null)
  const imgProfile = useRef(null);


  const toggleMenu = (e) => {
    e.preventDefault()
    if (isAnimated.current) {
      return;
    }
        
    isAnimated.current = true;
    
    if(isOpen.current){
      closeMenu()
    }else{
      openMenu()
    }
  }
  
  const openMenu = () => {
    isHappening.current = true;
    let e = 6, s = 5; 
    if(isMin(768)){
      e = 8;
      s = 8;
    }

    // Bars burger
    new TimelineMax({
      onComplete(){
        isOpen.current = true;
        isAnimated.current = false;
        isHappening.current = false;
      }
    })
    .to([firstBars,firstBisBars], 1, {
      y: e,
      ease: Power3.easeInOut
    },0)
    .to([secondBars, secondBisBars], 1, {
      y: -s,
      ease: Power3.easeInOut
    },0)
    .to([firstBars, secondBars],1,{
      transformOrigin: "50% 50%",
      x: 0,
      scaleX: 1,
      ease: Power3.easeInOut
    }, .4)
    .to([firstBars, firstBisBars], 1.6, {
      rotation: 135,
      transformOrigin: "50% 50%",
      ease: Power3.easeInOut
    }, .4)
    .to([secondBars, secondBisBars], 1.6, {
      rotation: 225,
      transformOrigin: "50% 50%",
      ease: Power3.easeInOut
    }, .4)
    .to(container, .4, {
      color: "#A2BD38"
    },0)
    .set([firstBisBars, secondBisBars], {
      scaleX: 0
    })

    // Logo
    TweenMax.set(kiwi.children[3],{
      alpha: 1
    }),
    TweenMax.to(kiwi.children[3],2, {
      alpha:0,
      ease:Power3.easeInOut
    })
    TweenMax.set(kiwi.children[4],{
      alpha: 1
    }),
    TweenMax.to(kiwi.children[4],2, {
      alpha:0,
      ease:Power3.easeInOut
    })
    TweenMax.set(kiwi.children[2],{
      alpha: 1
    }),
    TweenMax.to(kiwi.children[2],2, {
      alpha:0,
      ease:Power3.easeInOut
    })
    TweenMax.set(kiwi.children[1].children, {alpha:1}),
    TweenMax.staggerFromTo(kiwi.children[1].children, 1.5,{alpha:1}, {alpha:0,ease:Power3.easeInOut}, .1)

    // Dash Menu
    
    TweenMax.fromTo(dashMenu.children[0], 1, { 
      alpha: 0, 
      backgroundColor: "white"
     }, { 
       alpha: 1, 
       onComplete(){
         TweenMax.set(dashMenu,{pointerEvents: 'all'})
         TweenMax.set(dashMenu.children[0].children, {
           y:0
         })
         TweenMax
         .staggerFromTo(dashMenu.children[0].children, 1, {
            alpha: 0, 
            force3D: !0,
            y: -10 
          }, { 
            alpha: 1, 
            y: 0 
          },.2)
        } 
      }
    )
  };
  const closeMenu = () => {
    isHappening.current = true;
    // Bars Menu

    new TimelineMax({
      onComplete() {
        isOpen.current = false;
        isAnimated.current = false;
        isHappening.current = false;
      }
    })
    .to(container, .4, {
      onStart(){
        TweenMax.set(dashMenu,{pointerEvents: 'none'})
        TweenMax.set(dashMenu.children[0].children,{alpha:1, y: 0})
        TweenMax.staggerTo(dashMenu.children[0].children,.3,{alpha:0, y: 10},-.08)
      },
      color: "rgba(40,52,62,1)",
      ease: Power3.easeInOut
    },0)
    .to([firstBars, secondBars], 1.3, {
      onStart(){
        // Dash Menu
  
        TweenMax.fromTo(dashMenu.children[0],1.5, { alpha: 1}, {alpha: 0},2)
      },
      y: 0,
      rotation: 0,
      scaleX: 1,
      force3D: !0,
      ease: Power3.easeInOut
    })
    .to([firstBisBars, secondBisBars],1.3,{
      y: 0,
      rotation: 0,
      ease:Power3.easeInOut,
    })

    // Logo 

    TweenMax.set(kiwi.children[2],{
      transformOrigin: "50% 50%",
      rotation: -360,
      force3D: !0,
      scale: .2,
      alpha:0
    }),
    TweenMax.to(kiwi.children[2],2, {
      scale:1.2,
      rotation: 0,
      alpha:1,
      ease:Elastic.easeOut,
    })
    TweenMax.set(kiwi.children[3], {alpha:1}),
    TweenMax.set(kiwi.children[3].children, {alpha:0,y:-5}),
    TweenMax.staggerFromTo(kiwi.children[3].children, 1.5,{y:-5,alpha:0}, {y:0,alpha:1,ease:Power3.easeInOut}, .1)
    TweenMax.set(kiwi.children[4], {alpha:1}),
    TweenMax.set(kiwi.children[4].children, {alpha:0,y:-5}),
    TweenMax.staggerFromTo(kiwi.children[4].children, 3,{y:-5,alpha:0}, {y:0,alpha:1,ease:Power3.easeInOut}, .1)
    
  }
  const onOver = () => {
    if(isHappening.current === false){
      if(isOpen.current){
        isHappening.current === true
        TweenMax.staggerTo([firstBars, secondBars], .7, {
          scaleX: .65,
          force3D: !0,
          ease: Power3.easeOut,
          onComplete(){
            isHappening.current === false
          }
      }, .13)
      } else {
        isHappening.current === true
        TweenMax.set([firstBisBars, secondBisBars], {
          transformOrigin: "0 0",
          rotation: 0,
          alpha: 1,
          y: 0,
          scaleX: 0
      }), TweenMax.set([firstBars, secondBars], {
          transformOrigin: "100% 0%",
          x: 0,
          scaleX: 1
      }), TweenMax.staggerTo([firstBisBars, secondBisBars], 1, {
          scaleX: 1,
          force3D: !0,
          ease: Power3.easeOut
      }, .15), TweenMax.staggerTo([firstBars, secondBars], .55, {
          scaleX: 0,
          x: 1,
          force3D: !0,
          ease: Power3.easeOut,
          onComplete(){
            isHappening.current === false
          }
      }, .15)
      }
    }
    
  }
  const onOut = () => {
    if(isOpen){
      TweenMax.staggerTo([firstBars, secondBars], .7, {
        scaleX: 1,
        force3D: !0,
        ease: Power3.easeOut
    }, .13)
    }
  }

  useEffect(() => {
    console.log(kiwi.children)
    let t = new TimelineMax({
      onComplete() {
        isAnimated.current = false;
      }
    })
    .set([[firstBars, secondBars], firstBisBars, secondBisBars], {
        transformOrigin: "0 0"
    })
    .staggerTo([firstBars, secondBars], 1.55, {
        scaleX: 1,
        ease: Power3.easeInOut
    }, .3, "+=0", () => {
        t.set([firstBars, secondBars], {
            transformOrigin: "50% 50%"
        })
    })
    .to([firstBars, secondBars], .55, {
        autoAlpha: 1,
        ease: Power3.easeInOut
    }); 

    TweenMax.set(kiwi.children[2],{
      transformOrigin: "50% 50%",
      rotation: -360,
      scale: .2,
      alpha:0
    }),
    TweenMax.to(kiwi.children[2],2, {
      scale:1.2,
      rotation: 0,
      alpha:1,
      ease:Elastic.easeOut
    })
    TweenMax.set(kiwi.children[3].children, {alpha:0,y:-5}),
    TweenMax.staggerFromTo(kiwi.children[3].children, 1.5,{y:-10,alpha:0}, {y:0,alpha:1,ease:Power3.easeInOut}, .1)
    TweenMax.staggerFromTo(kiwi.children[4].children, 3,{y:-10,alpha:0}, {y:0,alpha:1,ease:Power3.easeInOut}, .1)
    // seteamos el content del menu
    TweenMax.set(dashMenu.children[0].children, {alpha:0});
  }, []);

  useEffect(()=>{
    if(imgProfile.current){
      if(imgProfile.current.naturalWidth > imgProfile.current.naturalHeight){
        setClassImg('horizontal-profile');
      }else{
        setClassImg('vertical-profile')
      }
    }
  }, [])
  
  return (
    <nav className="header-menu">
      <div className="toggler-logo">
        <span style={{width:'33px'}}></span>
        <Link to="/grid">
          <KiwiEm ref={e => kiwi = e} className="logo-header"/>
        </Link>
      <button className="nav-btn" onClick={e => toggleMenu(e)} onMouseEnter={onOver} onMouseLeave={onOut}>
        <div ref={e => container = e} className="nav-btn__black">
          <div ref={e => firstBars = e} className="nav-btn__bar nav-btn__bar-1"></div>
          <div ref={e => secondBars = e} className="nav-btn__bar nav-btn__bar-2"></div>
          <div ref={e => firstBisBars = e} className="nav-btn__bar nav-btn__bar-3"></div>
          <div ref={e => secondBisBars = e} className="nav-btn__bar nav-btn__bar-4"></div>
        </div>
      </button>
      </div>

      <div className="dash-menu" ref={e => dashMenu = e}>
        <div className="container-dash">
          <button className="button-profile">
            <img className={classImg || 'horizontal-profile'} src={props.user.profilePic} ref={imgProfile} alt="ProfilePic"/>
          </button>
          <button>Editar perfil</button>
          <button className="flirt-contact">Contacto con Flirt</button>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      </div>
    </nav>
  )
}

export default withAuth(Menu)
