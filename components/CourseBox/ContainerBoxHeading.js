import React from 'react'
 export default function App({heading,imgUri,color}){
     const textColor = {
         white:"text-white"
         ,black:"text-black"
         
     }
     const colorClass = textColor[color]
     return(
         <div className='text-[16px] flex gap-[16px]'>
             <img src={imgUri} className="h-[24px] w-[24px]"/>
             <div className={`${colorClass}`}>{heading}</div>
             </div>
     )
 }