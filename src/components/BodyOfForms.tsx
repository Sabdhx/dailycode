import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode,
    title:string
}

function BodyOfForms({children,title}: Props) {
  return (
    <div>
      <h1 className='text-lg'>{title}</h1>
       <div>
        {children}
       </div>
    </div>
  )
}

export default BodyOfForms