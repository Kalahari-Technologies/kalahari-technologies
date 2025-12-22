import { useEffect, useRef, useState } from 'react'
import nlpIcon from '@/assets/nlp.svg'
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import predictiveAnalysisIcon from '@/assets/predictive-analytics.svg'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useMediaQuery } from '@/hooks/user-media-query';
import { useIsMobile } from '@/hooks/use-mobile';
import useVisibility from '@/hooks/use-visibility';

const subServices = [
    {
        name: "Natural Language Processing",
        description: "Transform how your business understands and communicates",
        fullDescription: "Our NLP solutions help you automatically analyze customer feedback, extract insights from documents, power intelligent chatbots, and understand sentiment at scale",
        icon: nlpIcon
    },
    {
        name: "Predictive Analytics",
        description: "See what's coming before it happens",
        fullDescription: "Our predictive models analyze your historical data to forecast sales, anticipate customer churn, optimize inventory, detect fraud, and predict maintenance needs. Stop reacting to problems—start preventing them. We turn your data into your competitive advantage",
        icon: predictiveAnalysisIcon
    },
    {
        name: "Document Intelligence & Automation",
        description: "Stop manual data entry. Start intelligent automation",
        fullDescription: "Automatically classify, route, and process thousands of documents while your team focuses on higher-value work. From accounts payable to HR onboarding, we automate the paperwork so you can focus on growing your business",
        icon: nlpIcon
    },
    {
        name: "AI Integration & Implementation",
        description: "Bring AI into your existing workflows—seamlessly",
        fullDescription: "You don't need to rebuild everything to benefit from AI. We integrate cutting-edge AI capabilities directly into your current systems and processes. Whether you're using Salesforce, SAP, custom internal tools, or legacy software, we connect AI models, APIs, and automation to enhance what you already have",
        icon: nlpIcon
    }
]

const AIServices = ()=>{
    const movingRef = useRef(false)
    const {ref: sectionRef, visible} = useVisibility({threshold: 0.4})

    const [serviceIndex, setServiceIndex] = useState(-1);
    const [canFade, setCanFade] = useState(false)
    const [hovering, setHovering] = useState(false)


    const isDesktop = useMediaQuery('(min-width: 1280px)')

    const isMobile = useIsMobile();

    const [imageRef, imageInstance] = useKeenSlider({
        loop: false,
        drag: !isDesktop,
        slides: { perView: 1, spacing: 32 },
        slideChanged: (slider) => {
            if (!movingRef.current) {
                movingRef.current = true
                textInstance.current?.moveToIdx(slider.track.details.rel)
                movingRef.current = false

                if(slider.track.details.rel !== serviceIndex) { 
                    setServiceIndex(slider.track.details.rel)
                }
            }
        }
    })

    const [textRef, textInstance] = useKeenSlider({
        loop: false,
        slides: { perView: 1, spacing: 32 },
        slideChanged: (slider) => {
            if (!movingRef.current) {
                movingRef.current = true
                imageInstance.current?.moveToIdx(slider.track.details.rel)
                movingRef.current = false

                if(slider.track.details.rel !== serviceIndex) { 
                    setServiceIndex(slider.track.details.rel)
                }
            }
        }
    })

    const i = useEffect(()=>{
        if(!visible || !isDesktop) return;

        const timer = setInterval(()=>{
            if(isDesktop && !hovering) {
                setServiceIndex((prev)=> prev == subServices.length-1? 0: ++prev);
                setCanFade(true)
            }
        }, 4500)

        return ()=>{
            if(isDesktop){
                setServiceIndex(0)
            }
            setCanFade(false);
            clearInterval(timer);
        }
    }, [visible, isMobile, isDesktop, hovering])


    return (
        <section ref={sectionRef} id='ai' className="py-18 lg:py-20 bg-transparent relative lg:pb-8 overflow-x-hidden">
            <div className='relative md:max-w-screen-md sm:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl container'>
                <div className='flex flex-col justify-center mb-10 md:mb-20 md:mt-12 items-center mx-auto max-w-3xl text-center !mb-16'>
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <div className="text-xs leading-6 tracking-[1px] mb-5 uppercase font-geist">
                                <span>AI for the Enterprise</span>
                            </div>
                            <h2 className="font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">Full-Stack AI Systems</h2>
                        </div>
                        <p className="mt-4 lg:mt-2 leading-[1.60] lg:text-xl [text-wrap:balance] [white-space:inherit] block font-normal w-full">Intelligence designed to solve operational problems in Africa and global markets.</p>
                    </div>
                    <Button className='m-8 group bg-white text-black hover:bg-white font-medium font-geist text-sm'>
                        Get Started
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
                <div className='flex justify-center flex-col mb-24 md:mb-40 xl:mb-16 sm:h-[700px] h-[590px] mx-auto xl:flex-row mt-28 xl:mt-0'>
                    <div className='relative z-10 hidden w-full -mr-9 xl:inline-block xl:w-6/12 xl:min-w-[510px]'>
                        <div className='absolute w-full -translate-y-1/2 top-1/2'>
                            {subServices.map((service, index) => <div onMouseLeave={()=>{
                                setHovering(false)
                            }} onMouseEnter={()=>{
                                setHovering(true)
                                setCanFade(true)
                                setServiceIndex(index);
                            }} className={`opacity-100 ${(serviceIndex != index && (canFade || hovering))? 'opacity-20': ''} border-b group last:border-transparent border-white/10 group hover:border-white hover:last:border-white hover:opacity-100 transition-all duration-300 cursor-pointer`}>
                                <p className='w-full pt-6 pb-2 text-2xl leading-10 text-left text-white font-aeonik'>{service.name}</p>
                                <p className='pb-6 overflow-hidden text-white transition-colors group-hover:text-white/70'>{service.fullDescription}</p>
                            </div>)}
                        </div>
                    </div>
                    <div className='hidden w-full h-full items-center justify-center mb-10 mx-auto xl:flex select-none'>
                        {serviceIndex !== -1 && <img width="234" height="207" src={subServices[serviceIndex].icon} className='object-contain object-center w-3/6 h-3/6 select-none' />}
                    </div>
                    <div className='relative inline-block w-full -mb-3 xl:h-full xl:mb-10 xl:mx-auto xl:hidden'>
                        <div ref={imageRef} className='keen-slider !overflow-visible xl:absolute pb-6'>
                            {subServices.map(service => <img src={service.icon} className='w-3/6 h-3/6 object-contain object-center keen-slider__slide' />)}
                        </div>
                    </div>
                    <div className='px-7 w-screen left-1/2 -translate-x-1/2 relative sm:w-auto sm:px-0 xl:mb-6 xl:hidden'>
                        <div ref={textRef} className='keen-slider !overflow-visible pb-24'>
                            {subServices.map(service => <div className='space-y-4 keen-slider__slide active'>
                                <p className='text-2xl leading-10 font-aeonik'>{service.name}</p>
                                <p className='text-white/70'>{service.description}</p>
                            </div>)}
                        </div>
                    </div>
                    <div className='relative z-50 mx-auto -mt-16 lg:-mt-10 xl:hidden'>
                        {subServices.map((_, index) => <button onClick={e => imageInstance.current?.moveToIdx(index)} className='px-1 py-2 sm:px-2'>
                            <div className={`h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300 w-1 sm:w-1.5 md:w-2 ${index === serviceIndex? 'bg-white w-4 sm:w-5 md:w-6' : 'bg-white/40'}`}></div>
                        </button>)}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AIServices;
