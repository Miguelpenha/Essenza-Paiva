import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

function useAnimation() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo('#form',
            { 
                y: 100,
                duration: 1,
                opacity: 0.2
            },
            { 
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: '#form',
                    start: '-30% center'
                }
            }
        )

        gsap.fromTo('#about>.title, #about>.description',
            { 
                y: 150,
                duration: 1,
                opacity: 0.2
            },
            { 
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#gallery',
                    start: 'center center'
                }
            }
        )

        gsap.fromTo('#about>.list li',
            { 
                y: 150,
                opacity: 0.2,
                duration: 1
            },
            { 
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: '#about>.description',
                    start: 'bottom bottom'
                }
            }
        )
    }, [])
}

export default useAnimation