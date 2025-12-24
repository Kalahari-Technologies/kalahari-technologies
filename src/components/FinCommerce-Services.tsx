import fintechImage from '@/assets/image.png'
import commerceImage from '@/assets/e-commerce.png'
import bitcoin from '@/assets/bitcoin.svg'
import atm from '@/assets/atm.svg'
import coupon from '@/assets/coupon.svg'
import box from '@/assets/safebox.svg'
import { useKeenSlider } from 'keen-slider/react'
import { useRef, useState } from 'react'
import money from '@/assets/money.svg'
import { useMediaQuery } from '@/hooks/user-media-query'


const types = [
    {
        type: "FinTech",
        name: "Financial Infrastructure at Scale",
        description: "Build payment systems, digital wallets, and lending platforms that move money securely across borders, devices, and networks.",
        image: fintechImage
    },
    {
        type: "E-commerce",
        name: "Commerce Platforms That Convert",
        description: "Engineer marketplaces, storefronts, and transaction systems that connect buyers and sellers at any scale.",
        image: commerceImage
    }
]

const more = [
    {
        type: 'FinTech',
        name: 'Payment Integration & Processing',
        description: 'We connect your platform to every payment method that matters',
        image: atm
    },
    {
        type: 'FinTech',
        name: 'Digital Wallet Solutions',
        description: 'We develop embedded wallet systems for your platform',
        image: box
    },
    {
        type: 'FinTech',
        name: 'MicroFinance Platforms',
        description: 'We build lending technology that scales your financial services',
        image: money
    },
    {
        type: 'COMMERCE',
        name: 'Online Marketplace Solutions',
        description: 'We engineer multi-sided platforms that connect and transact at scale',
        image: coupon
    },
    {
        type: 'FinTech',
        name: 'Blockchain Payment Systems',
        description: 'We integrate cryptocurrency and blockchain payment infrastructure',
        image: bitcoin
    }
]


const FinCommerceServices = ()=>{
    const movingRef = useRef(false)

    const isDesktop = useMediaQuery('(min-width: 1280px)')
    
    const [typeRef, typeInstance] = useKeenSlider({
            loop: false,
            drag: !isDesktop,
            slides: { perView: 1, spacing: 32 },
            slideChanged: (slider) => {
                if (!movingRef.current) {
                    movingRef.current = true
                    movingRef.current = false
                    setIndex(slider.track.details.rel)
                }
            }
    })

    const [moreRef, moreInstance] = useKeenSlider({
            loop: false,
            drag: true,
            mode: 'free',
            rubberband: false,
            breakpoints: {
                '(min-width: 640px)': {
                    slides : {perView: 1.5, spacing: 32},
                    initial: 0.3
                },
                '(min-width: 1280px)': {
                    slides: {perView: 2.5, spacing: 32}
                },
            },
            slides: { perView: 1, spacing: 32 },
            slideChanged: (slider) => {
                if (!movingRef.current) {
                    movingRef.current = true
                    movingRef.current = false
                }
            }
    })

    const [index, setIndex] = useState(0);
    
        
    return (
        <>
            <section id="fintech-and-commerce" className="py-18 lg:py-20 bg-transparent pb-0 lg:pb-0 relative overflow-hidden">
                <div className="md:max-w-screen-md sm:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl container relative">
                    <div className="flex flex-col justify-center mb-10 md:mb-20 md:mt-12 items-center mx-auto max-w-3xl text-center relative z-10 !mb-12 md:!mb-16">
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <div className="text-xs leading-6 tracking-[1px] mb-5 uppercase font-geist-mono">
                                    <span>Digital Payments & Commerce Infrastructure</span>
                                </div>
                                <h2 className="font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">Payments & Commerce Solutions</h2>
                            </div>
                            <p className="mt-4 lg:mt-2 leading-[1.60] lg:text-xl [text-wrap:balance] [white-space:inherit] block font-normal w-full">Launch and scale high-performance platforms for payments, escrow, marketplaces, and secure online transactions.</p>
                        
                        </div>
                    </div>
                    <div className="relative left-1/2 px-7 w-screen -translate-x-1/2 sm:w-auto sm:px-0">
                        <div ref={typeRef} className="keen-slider pb-20 !overflow-visible visible opacity-100 max-w-[592px]">
                            {types.map(type => <a className='keen-slider__slide min-w-[592px] max-w-[592px]'>
                                <div>
                                    <div className='!pt-9 md:!pt-12 !pb-0 !overflow-hidden max-h-[436px] lg:h-[540px] min-h-[450px] lg:!min-h-[540px] z-10 text-white bg-kalahari-brown-tertiary 3xl:py-[95px] relative lg:items-center xl:py-20 md:p-10 lg:py-12 p-6 pt-3 rounded-2xl md:overflow-visible'>
                                        <p className='uppercase leading-4 text-xs tracking-[4px] mb-4 lg:mb-6 z-10 relative'>{type.type}</p>
                                        <p className='md:text-[1.625rem] text-3.5xl leading-tight md:leading-8 mb-2 font-aeonik z-10 relative text-pretty max-w-96'>{type.name}</p>
                                        <p className='z-10 mb-8 leading-6 md:mb-18 text-pretty'>{type.description}</p>
                                        <div className='rounded-md overflow-hidden absolute right-0 top-46 md:top-auto md:-bottom-32 lg:bottom-0 xl:-bottom-[85px] w-[calc(100%-4.5rem)] max-w-[616px]'>
                                            <img src={type.image} width={616} height={333} decoding='async' loading='lazy' className='bg-[#111] aspect-[1440/1062] w-full h-full md:h-auto object-contain object-left-top' />
                                        </div>
                                    </div>
                                </div>

                            </a>)}
                        </div>
                    </div>
                    <div className='flex relative justify-center mx-auto -mt-14 lg:hidden'>
                        {types.map((type, _index) => <button onClick={e => typeInstance.current?.moveToIdx(index)} className='px-1 py-2 sm:px-2'>
                                <div className={`h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300 w-1 sm:w-1.5 md:w-2 ${index === _index? 'bg-white w-4 sm:w-5 md:w-6' : 'bg-white/40'}`}></div>
                            </button>)}
                    </div>
                </div>
            </section>

            <section className='ρd__all ρd__section ρll3DQ py-10 pb-0'>
                <div className='ρd__all ρd__div ρ_3V1C7 container gap-16'>
                    <div className='flex flex-col justify-center mb-10 md:mb-20 md:mt-12 items-center mx-auto max-w-3xl text-center ρi ρoDvz'>
                        <div className='flex flex-col'>
                            <div className='flex flex-col'>
                                <h2 className='font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]'>Niche Finance & Commerce</h2>
                            </div>
                            <p className='mt-4 lg:mt-2 leading-[1.60] lg:text-xl [text-wrap:balance] [white-space:inherit] block font-normal w-full'>We build the technology infrastructure that powers your commerce and payments vision—secure, scalable, and tailored to your specific business needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-18 lg:py-20 bg-transparent pt-0 lg:pt-0 pb-0 lg:pb-0 overflow-hidden'>
                <div className='relative sm:max-w-screen-sm md:max-w-screen-md g:max-w-screen-lg xl:max-w-screen-xl container'>
                    <div>
                        <div ref={moreRef} className='keen-slider !overflow-visible cursor-grab h-[140px] sm:h-[167px] xl:h-[192px] pt-1 opacity-100 visible'>
                            {more.map(service => <a className="keen-slider__slide group relative rounded-2xl text-left !opacity-100 !visible focus-visible:outline outline-[rgba(255,255,255,0.64)] outline-offset-[3px] bg-white/[0.01] lg:max-w-[464px] xl:max-w-[467.2px]">
                                <div className='absolute inset-0 w-full h-full rounded-2xl bg-[rgba(7,7,7,0.6)] backdrop-blur-[10px] -z-10' />
                                <div className='flex absolute z-10 items-center xl:istems-start xl:py-8 justify-start w-full h-full transition-colors bg-[#D1AAD7]/[0.01] overflow-visible '>
                                    <img src={service.image} width={160} height={146} sizes='(min-width: 1280px) 120px, (min-width: 640px) 120px, 120px' className='max-w-[160px] sm:max-w-[160px] xl:max-w-max px-2 lg:px-5' />
                                    <div className='flex flex-col pr-2.5 sm:pr-4 lg:pr-10'>
                                        <p className='mb-1 text-xs font-medium sm:text-sm text-kalahari-brown-secondary'>{service.type}</p>
                                        <p className='font-aeonik text-lg leading-6 sm:text-xl lg:text-2xl lg:leading-[27px] line-clamp-2 xl:line-clamp-3'>{service.name}</p>
                                    </div>
                                </div>
                                <div role='none' className='z-10 absolute items-center duration-150 overflow-hidden justify-center w-6 h-6 group-hover:bg-white bg-white/10 border group-hover:border-white transition-colors ease-linear border-white/[0.13] flex rounded-full pointer-events-none right-3 bottom-3 sm:right-4 sm:bottom-4 sm:w-10 sm:h-10'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path className="transition-colors duration-150 ease-linear group-hover:stroke-black" d="M7.75 7.5V4.25H4.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path className="transition-colors duration-150 ease-linear group-hover:stroke-black" d="M7.5 4.5L0.75 11.25" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path className="transition-colors duration-150 ease-linear group-hover:stroke-black" d="M5.785 10.25H8.75C9.855 10.25 10.75 9.355 10.75 8.25V2.75C10.75 1.645 9.855 0.75 8.75 0.75H3.75C2.645 0.75 1.75 1.645 1.75 2.75V6.215" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                                </div>
                                <div className='absolute inset-0 w-full h-full rounded-[16px] z-[1] bg-[hsla(0,0%,100%,0.02)] shadow-[inset_0_24px_48px_0_rgba(199,211,234,0.05),_inset_0_1px_1px_0_rgba(199,211,234,0.12)] border border-[rgba(209,170,215,0.06)] transition-all duration-300 ease-in-out' />
                            </a>)}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FinCommerceServices
