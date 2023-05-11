import React from 'react'
import Button from '../Buttons/StoryAudienceButton'
export default function App(){
    return(
        <div className='max-w-screen h-auto flex items-center justify-center'>
           <div className='flex items-center gap-[10px]'>
               <Button audienceName={"Students"}/>
               <Button audienceName={"Parents"}/>
               {/* <Button audienceName={"Teachers"}/> */}
           </div>
        </div>
    )
}