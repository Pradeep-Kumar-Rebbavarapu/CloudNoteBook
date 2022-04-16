import { Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import Spinner from '../components/Spinner'
import Context from '../Context/Context'


export default function HomePage() {
    let {getUser,authtoken,loading} = useContext(Context)
    
        useEffect(()=>{
            if(authtoken){
            getUser()
        }
        },[])
    
    return (
        <div>
        
            
            <div className='text-center'>
            <div className="lg:grid grid-cols-2">
            <div className="lg:my-auto text-center my-10 lg:mx-5">
                    <h1>Welcome To CloudNote</h1>
                    <h4>Your Notes Saved Under Our Cloud</h4>
                </div>
                <div className="">
                    <img src="img/4.jpg" alt=""/>
                </div>
                
            </div>
        </div>
        
       </div> 
    )
    
}
