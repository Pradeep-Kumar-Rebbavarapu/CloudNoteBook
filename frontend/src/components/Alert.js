import React from 'react'
import { useContext } from 'react'
import Context from '../Context/Context'

export default function Alert() {
    let {alert,setalert} = useContext(Context)
  return (
    <div>
      <div className={`${alert.class}   alert   alert-dismissible fade show m-3`} role="alert" id="alert">
        {alert.message}
        
    </div>
    </div>
  )
}

