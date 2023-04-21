import React from 'react'
import Heading from './ContainerBoxHeading'
export default function App(){
    let size = "max-w-[433px] flex flex-col h-auto rounded-md border-2 border-[#1eb5f0]"
    let contentContainer = " max-w-[433px] bg-[#1eb5f0] pt-[24px] px-[48px] w-full  pb-[32px]"
    return(
        <div className={`${size}  `}>
            <div className={`w-full rounded-md   text-center pt-[32px] bg-white pb-[24px]`}>
               
               <div className="block tex-center text-[28px]"> CueMath</div>
            </div>
            <div className={`${contentContainer}`}>
                <div className='flex flex-col gap-[16px]'>
                   <Heading heading={"One-to-four learning"}/>
                   <Heading heading="Flexible curriculum that adapts to your child's maths needs"/>
                   <Heading heading="Curriculum designed by experts from Harvard, Cambridge & IIT" />
                   <Heading heading="Visual interactive platform"/>
                   <Heading heading="Real-world maths application" />
                          </div>
                </div>
            </div>
    )
}