import React from 'react'

const ActionButton = ({text, ...props}) => {

  return (
    <a
      className={`font-corporate degrade-primary text-black border-0 py-2 px-8 focus:outline-none transition-all hover:scale-105 hover:shadow-lg shadow-cyan-500/50 rounded text-lg ${props.className || ''}`}
      {...props}
    >
        {text}
    </a>
  )
}

export default ActionButton