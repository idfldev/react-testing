import React, { Children } from 'react'

const AlertSection = ({ bg="bg-gray-200", children }) => {
  return (
   <div className={`w-full h-50 my-1 ${bg}`}>
      {children}
   </div>
  )
}

export default AlertSection
