import React from 'react'

const TabPanel = ({children, value, index}) => {
  return (
    <div
        hidden={value !== index}
    >
        {children}
    </div>
  )
}

export default TabPanel