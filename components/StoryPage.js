import React from 'react'
import Buttons from './StoryPage/AudienceButtons'
import StoryBox from './StoryPage/StoryBox'
export default function App(){
    return(
        <div  className='flex items-center justify-center flex-col gap-[32px]'>
            <Buttons/>
            <StoryBox bgColor={"blue"}/>
        </div>
    )
}