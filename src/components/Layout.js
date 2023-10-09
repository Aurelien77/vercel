import React from 'react'

const Layout = ({children, className="", text}) => {
  return (
   
    <div className={`${className}`}> 
    
    <div>
{text}


    </div>
   
    
    </div>
  )
}

export default Layout