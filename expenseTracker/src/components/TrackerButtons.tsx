import React from 'react'

type Props = {
    className: string,
    typeOfData: string,
    onclick:()=>void
}

function TrackerButtons({className, typeOfData,onclick}: Props) {
  return (
    <>
    <div onClick={onclick} className={`${className} cursor-pointer` }>{typeOfData}</div>
    </>
  )
}

export default TrackerButtons