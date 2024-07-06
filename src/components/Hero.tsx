import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { heroVideo,smallHeroVideo } from "../utils"
import { useEffect, useState } from "react"

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth>760 ? heroVideo : smallHeroVideo);

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            if(window.innerWidth>760){
                setVideoSrc(heroVideo);
            }
            else{
                setVideoSrc(smallHeroVideo);
            }
        })
        return()=>{
            window.removeEventListener('resize',()=>{
                if(window.innerWidth>760){
                    setVideoSrc(heroVideo);
                }
                else{
                    setVideoSrc(smallHeroVideo);
                }
            })
        }
    },[])
    useGSAP(()=>{
        gsap.to('#hero',{
            opacity:1,
            delay:2,
        })
        gsap.to('#cta',{
            opacity:1,
            y:-50,
            delay:2
        })
    },[])
    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title">iPhone 15 Pro</p>
                <div className="md:w-10/12 w-9/12">
                    <video autoPlay muted playsInline={true} key={videoSrc} className="pointer-events-none">
                        <source src={videoSrc} type="video/mp4"/>
                    </video>
                </div>
            </div> 
            <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
                <a href="#highlights" className="btn">Buy</a>
                <p className="font-normal text-xl">From $199/month or $999</p>
            </div>
        </section>
    )
}

export default Hero